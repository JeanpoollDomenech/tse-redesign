import { useState } from "react";
import { Search, AlertCircle, Loader } from "lucide-react";
import { buscarExtranjeroPorDimex, calcularEdad, formatearFecha } from "../../data/personasSimuladas";
import PersonaCard from "./PersonaCard";

export default function BuscarExtranjero() {
  const [dimex, setDimex] = useState("");
  const [resultado, setResultado] = useState(null);
  const [estado, setEstado] = useState("idle");

  const handleBuscar = (e) => {
    e.preventDefault();
    const valor = dimex.trim().replace(/\s/g, "");
    if (!valor) return;

    if (isNaN(valor) || valor.length < 10 || valor.length > 12) {
      setEstado("error");
      setResultado(null);
      return;
    }

    setEstado("loading");
    setResultado(null);

    setTimeout(() => {
      const persona = buscarExtranjeroPorDimex(valor);
      if (persona) {
        setResultado(persona);
        setEstado("found");
      } else {
        setEstado("notfound");
      }
    }, 800);
  };

  const handleLimpiar = () => {
    setDimex("");
    setResultado(null);
    setEstado("idle");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 dark:text-white mb-1">
          Consulta por número de DIMEX
        </h3>
        <p className="text-sm text-gray-500 dark:text-slate-400">
          Ingrese el número de Documento de Identidad Migratoria para Extranjeros (DIMEX).
        </p>
      </div>

      <form onSubmit={handleBuscar} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="text"
            value={dimex}
            onChange={(e) => setDimex(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder="Ej: 117200445632"
            maxLength={12}
            className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm font-mono"
          />
        </div>
        <button
          type="submit"
          disabled={estado === "loading" || !dimex.trim()}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 dark:disabled:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
        >
          {estado === "loading" ? <Loader size={16} className="animate-spin" /> : <Search size={16} />}
          {estado === "loading" ? "Buscando..." : "Consultar"}
        </button>
        {estado !== "idle" && (
          <button type="button" onClick={handleLimpiar}
            className="px-4 py-3 border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-sm font-semibold">
            Limpiar
          </button>
        )}
      </form>

      {estado === "error" && (
        <div className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
          <AlertCircle size={18} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-red-700 dark:text-red-400">Formato inválido</p>
            <p className="text-sm text-red-600 dark:text-red-300 mt-0.5">
              El DIMEX debe contener entre 10 y 12 dígitos numéricos.
            </p>
          </div>
        </div>
      )}

      {estado === "notfound" && (
        <div className="flex items-start gap-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
          <AlertCircle size={18} className="text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-yellow-700 dark:text-yellow-400">Sin resultados</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-0.5">
              No se encontró ninguna persona con el DIMEX <strong>{dimex}</strong>.
            </p>
          </div>
        </div>
      )}

      {estado === "found" && resultado && (
        <PersonaCard persona={resultado} tipo="extranjero" />
      )}
    </div>
  );
}
