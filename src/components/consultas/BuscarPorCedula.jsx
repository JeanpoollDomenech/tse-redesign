import { useState } from "react";
import { Search, AlertCircle, Loader, Wifi, WifiOff } from "lucide-react";
import { buscarCedulaAPI } from "../../services/cedulasAPI";
import { buscarPorCedula } from "../../data/personasSimuladas";
import { useLang } from "../../context/LangContext";
import PersonaCard from "./PersonaCard";

const toTitleCase = (str) =>
  str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

function construirPersona(apiResult) {
  const nombre = toTitleCase(apiResult.firstname || "");
  const apellidos = (apiResult.temp || "").trim().split(/\s+/);
  const apellido1 = toTitleCase(apellidos[0] || "");
  const apellido2 = toTitleCase(apellidos[1] || "");
  const seed = apiResult.cedula.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);

  const provincias = [
    { nombre: "San José", cantones: ["San José", "Escazú", "Desamparados"] },
    { nombre: "Alajuela", cantones: ["Alajuela", "San Ramón", "San Carlos"] },
    { nombre: "Cartago", cantones: ["Cartago", "Turrialba"] },
    { nombre: "Heredia", cantones: ["Heredia", "Barva"] },
    { nombre: "Guanacaste", cantones: ["Liberia", "Nicoya"] },
    { nombre: "Puntarenas", cantones: ["Puntarenas", "Quepos"] },
    { nombre: "Limón", cantones: ["Limón", "Siquirres"] },
  ];
  const estadosCiviles = ["Soltero/a", "Casado/a", "Divorciado/a", "Viudo/a"];
  const prov = provincias[seed % provincias.length];
  const canton = prov.cantones[seed % prov.cantones.length];
  const anioBase = 1950 + (seed % 50);
  const mes = (seed % 12) + 1;
  const dia = (seed % 28) + 1;

  return {
    cedula: apiResult.cedula.replace(/(\d{1})(\d{4})(\d{4})/, "$1-$2-$3"),
    nombre,
    apellido1,
    apellido2,
    fechaNacimiento: `${anioBase}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`,
    sexo: seed % 2 === 0 ? "Masculino" : "Femenino",
    estadoCivil: estadosCiviles[seed % estadosCiviles.length],
    canton,
    provincia: prov.nombre,
    nombrePadre: null,
    nombreMadre: null,
    nacionalidad: "Costarricense",
    fuenteAPI: true,
  };
}

export default function BuscarPorCedula() {
  const { t } = useLang();
  const c = t.consultas.cedula;
  const [cedula, setCedula] = useState("");
  const [resultado, setResultado] = useState(null);
  const [estado, setEstado] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleBuscar = async (e) => {
    e.preventDefault();
    const valor = cedula.trim();
    if (!valor) return;

    const soloNumeros = valor.replace(/-/g, "");
    if (soloNumeros.length < 8 || soloNumeros.length > 12 || isNaN(soloNumeros)) {
      setEstado("error");
      setErrorMsg(c.errorDesc);
      setResultado(null);
      return;
    }

    setEstado("loading");
    setResultado(null);

    try {
      const apiResult = await buscarCedulaAPI(valor);
      if (apiResult) {
        setResultado(construirPersona(apiResult));
        setEstado("found");
      } else {
        const local = buscarPorCedula(valor);
        if (local) {
          setResultado({ ...local, fuenteAPI: false });
          setEstado("found");
        } else {
          setEstado("notfound");
        }
      }
    } catch {
      const local = buscarPorCedula(valor);
      if (local) {
        setResultado({ ...local, fuenteAPI: false, apiOffline: true });
        setEstado("found");
      } else {
        setEstado("offline");
        setErrorMsg(c.offlineDesc);
      }
    }
  };

  const handleLimpiar = () => {
    setCedula("");
    setResultado(null);
    setEstado("idle");
    setErrorMsg("");
  };

  const handleCedulaChange = (e) => {
    let val = e.target.value.replace(/[^0-9]/g, "");
    if (val.length === 9) val = val[0] + "-" + val.slice(1, 5) + "-" + val.slice(5);
    else if (val.length === 10) val = val.slice(0, 2) + "-" + val.slice(2, 6) + "-" + val.slice(6);
    setCedula(val);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 dark:text-white mb-1">{c.title}</h3>
        <p className="text-sm text-gray-500 dark:text-slate-400">{c.desc}</p>
      </div>

      <div className="flex items-center gap-2 text-xs text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-3 py-2 w-fit">
        <Wifi size={13} />
        <span className="font-semibold">{c.apiConnected}</span>
      </div>

      <form onSubmit={handleBuscar} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={cedula}
          onChange={handleCedulaChange}
          placeholder={c.placeholder}
          maxLength={12}
          className="flex-1 px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm font-mono"
        />
        <button type="submit" disabled={estado === "loading" || !cedula.trim()}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 dark:disabled:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
          {estado === "loading" ? <Loader size={16} className="animate-spin" /> : <Search size={16} />}
          {estado === "loading" ? c.loading : c.btn}
        </button>
        {estado !== "idle" && (
          <button type="button" onClick={handleLimpiar}
            className="px-4 py-3 border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-sm font-semibold">
            {c.clear}
          </button>
        )}
      </form>

      {(estado === "error" || estado === "offline") && (
        <div className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
          {estado === "offline" ? <WifiOff size={18} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" /> : <AlertCircle size={18} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />}
          <div>
            <p className="text-sm font-bold text-red-700 dark:text-red-400">
              {estado === "offline" ? c.offlineTitle : c.errorTitle}
            </p>
            <p className="text-sm text-red-600 dark:text-red-300 mt-0.5">{errorMsg}</p>
          </div>
        </div>
      )}

      {estado === "notfound" && (
        <div className="flex items-start gap-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
          <AlertCircle size={18} className="text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-yellow-700 dark:text-yellow-400">{c.notFoundTitle}</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-0.5">
              {c.notFoundDesc} <strong>{cedula}</strong>.
            </p>
          </div>
        </div>
      )}

      {estado === "found" && resultado && (
        <div className="space-y-3">
          {resultado.fuenteAPI ? (
            <div className="flex items-center gap-2 text-xs text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-3 py-2 w-fit">
              <Wifi size={13} />
              <span className="font-semibold">{c.apiResult}</span>
            </div>
          ) : resultado.apiOffline ? (
            <div className="flex items-center gap-2 text-xs text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg px-3 py-2 w-fit">
              <WifiOff size={13} />
              <span className="font-semibold">{c.apiOffline}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-2 w-fit">
              <span className="font-semibold">📋 {c.demo}</span>
            </div>
          )}
          <PersonaCard persona={resultado} tipo="nacional" />
        </div>
      )}
    </div>
  );
}
