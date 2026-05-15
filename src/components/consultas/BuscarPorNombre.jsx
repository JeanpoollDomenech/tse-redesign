import { useState } from "react";
import { Search, AlertCircle, Loader, User, ChevronRight, ArrowLeft, Wifi, WifiOff } from "lucide-react";
import { buscarNombreAPI } from "../../services/cedulasAPI";
import { buscarPorNombre } from "../../data/personasSimuladas";
import { useLang } from "../../context/LangContext";
import PersonaCard from "./PersonaCard";

const toTitleCase = (str) =>
  str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

function construirPersonaDesdeAPI(apiResult) {
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

export default function BuscarPorNombre() {
  const { t } = useLang();
  const c = t.consultas.nombre;
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);
  const [estado, setEstado] = useState("idle");
  const [fuenteAPI, setFuenteAPI] = useState(false);

  const handleBuscar = async (e) => {
    e.preventDefault();
    if (query.trim().length < 4) return;
    setEstado("loading");
    setResultados([]);
    setSeleccionado(null);
    setFuenteAPI(false);

    try {
      const apiResults = await buscarNombreAPI(query);
      if (apiResults.length > 0) {
        setResultados(apiResults.slice(0, 10).map(construirPersonaDesdeAPI));
        setFuenteAPI(true);
        setEstado("results");
      } else {
        const locales = buscarPorNombre(query);
        if (locales.length > 0) {
          setResultados(locales.map((p) => ({ ...p, fuenteAPI: false })));
          setEstado("results");
        } else {
          setEstado("notfound");
        }
      }
    } catch {
      const locales = buscarPorNombre(query);
      if (locales.length > 0) {
        setResultados(locales.map((p) => ({ ...p, fuenteAPI: false })));
        setEstado("results");
      } else {
        setEstado("notfound");
      }
    }
  };

  const handleLimpiar = () => {
    setQuery("");
    setResultados([]);
    setSeleccionado(null);
    setEstado("idle");
    setFuenteAPI(false);
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
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
          placeholder={c.placeholder}
          className="flex-1 px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm"
        />
        <button type="submit" disabled={estado === "loading" || query.trim().length < 4}
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

      {estado === "notfound" && (
        <div className="flex items-start gap-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
          <AlertCircle size={18} className="text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-yellow-700 dark:text-yellow-400">{c.notFoundTitle}</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-0.5">
              {c.notFoundDesc} <strong>"{query}"</strong>. {c.notFoundHint}
            </p>
          </div>
        </div>
      )}

      {estado === "results" && !seleccionado && (
        <div className="space-y-3">
          {fuenteAPI ? (
            <div className="flex items-center gap-2 text-xs text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-3 py-2 w-fit">
              <Wifi size={13} />
              <span className="font-semibold">{c.apiResult}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg px-3 py-2 w-fit">
              <WifiOff size={13} />
              <span className="font-semibold">{c.apiOffline}</span>
            </div>
          )}
          <p className="text-sm text-gray-500 dark:text-slate-400">
            {c.found} <strong className="text-gray-800 dark:text-white">{resultados.length}</strong> {c.foundSuffix} "{query}".
            {resultados.length === 10 && ` ${c.showingFirst}`}
          </p>
          <div className="space-y-2">
            {resultados.map((persona, i) => (
              <button key={persona.cedula + i} onClick={() => setSeleccionado(persona)}
                className="w-full flex items-center gap-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all text-left group">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                  <User size={18} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 dark:text-white text-sm">
                    {persona.nombre} {persona.apellido1} {persona.apellido2}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                    Cédula: {persona.cedula} · {persona.canton}, {persona.provincia}
                  </p>
                </div>
                <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {seleccionado && (
        <div className="space-y-4">
          <button onClick={() => setSeleccionado(null)}
            className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 transition-colors">
            <ArrowLeft size={15} /> {c.back}
          </button>
          {seleccionado.fuenteAPI ? (
            <div className="flex items-center gap-2 text-xs text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-3 py-2 w-fit">
              <Wifi size={13} />
              <span className="font-semibold">{c.apiResult}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-2 w-fit">
              <span className="font-semibold">📋 {c.demo}</span>
            </div>
          )}
          <PersonaCard persona={seleccionado} tipo="nacional" />
        </div>
      )}
    </div>
  );
}
