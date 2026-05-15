import { useState } from "react";
import { Search, AlertCircle, Loader, Heart, Skull, Calendar, MapPin } from "lucide-react";
import { matrimonios, defunciones, formatearFecha } from "../../data/personasSimuladas";

function MatrimonioCard({ m }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-pink-600 to-rose-500 px-6 py-4 flex items-center gap-3">
        <Heart size={20} className="text-white" />
        <div>
          <h3 className="text-base font-bold text-white">Inscripción de Matrimonio</h3>
          <p className="text-pink-100 text-xs">N° {m.id}</p>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-4">
            <p className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-1">Cónyuge 1</p>
            <p className="font-bold text-gray-800 dark:text-white text-sm">{m.conyuge1Nombre}</p>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
              {m.conyuge1Cedula ? `Cédula: ${m.conyuge1Cedula}` : `DIMEX: ${m.conyuge1Dimex}`}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-4">
            <p className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-1">Cónyuge 2</p>
            <p className="font-bold text-gray-800 dark:text-white text-sm">{m.conyuge2Nombre}</p>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
              {m.conyuge2Cedula ? `Cédula: ${m.conyuge2Cedula}` : `DIMEX: ${m.conyuge2Dimex}`}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Calendar size={15} className="text-pink-500" />
            <span><strong>Fecha:</strong> {formatearFecha(m.fechaMatrimonio)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <MapPin size={15} className="text-pink-500" />
            <span><strong>Lugar:</strong> {m.lugarMatrimonio}</span>
          </div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Tipo:</strong> {m.tipoMatrimonio} · <strong>Celebrado por:</strong> {m.oficiante}
        </div>
      </div>
    </div>
  );
}

function DefuncionCard({ d }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-slate-600 to-slate-700 px-6 py-4 flex items-center gap-3">
        <Skull size={20} className="text-white" />
        <div>
          <h3 className="text-base font-bold text-white">Inscripción de Defunción</h3>
          <p className="text-slate-300 text-xs">N° {d.id}</p>
        </div>
      </div>
      <div className="p-6 space-y-3">
        <div>
          <p className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-1">Persona fallecida</p>
          <p className="font-bold text-gray-800 dark:text-white text-base">{d.nombreFallecido}</p>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-0.5">
            {d.cedulaFallecido ? `Cédula: ${d.cedulaFallecido}` : `DIMEX: ${d.dimexFallecido}`}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300">
          <div><strong>Edad:</strong> {d.edad} años</div>
          <div><strong>Estado civil:</strong> {d.estadoCivil}</div>
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-slate-500" />
            <span><strong>Fecha:</strong> {formatearFecha(d.fechaDefuncion)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-slate-500" />
            <span><strong>Lugar:</strong> {d.lugarDefuncion}</span>
          </div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Causa:</strong> {d.causaDefuncion}
        </div>
      </div>
    </div>
  );
}

function BuscarRegistro({ tipo }) {
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);
  const [estado, setEstado] = useState("idle");

  const esMatrimonio = tipo === "matrimonio";
  const datos = esMatrimonio ? matrimonios : defunciones;
  const placeholder = esMatrimonio
    ? "Ej: Carlos Rodríguez, 1-0847-0392..."
    : "Ej: Roberto Jiménez, 1-0654-2219...";

  const handleBuscar = (e) => {
    e.preventDefault();
    if (query.trim().length < 2) return;
    setEstado("loading");
    setResultados([]);

    setTimeout(() => {
      const q = query.trim().toLowerCase();
      let encontrados;
      if (esMatrimonio) {
        encontrados = datos.filter((m) =>
          m.conyuge1Nombre.toLowerCase().includes(q) ||
          m.conyuge2Nombre.toLowerCase().includes(q) ||
          (m.conyuge1Cedula && m.conyuge1Cedula.replace(/-/g, "").includes(q.replace(/-/g, ""))) ||
          (m.conyuge2Cedula && m.conyuge2Cedula.replace(/-/g, "").includes(q.replace(/-/g, "")))
        );
      } else {
        encontrados = datos.filter((d) =>
          d.nombreFallecido.toLowerCase().includes(q) ||
          (d.cedulaFallecido && d.cedulaFallecido.replace(/-/g, "").includes(q.replace(/-/g, "")))
        );
      }
      setResultados(encontrados);
      setEstado(encontrados.length > 0 ? "found" : "notfound");
    }, 800);
  };

  const handleLimpiar = () => {
    setQuery("");
    setResultados([]);
    setEstado("idle");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 dark:text-white mb-1">
          {esMatrimonio ? "Consulta de matrimonios" : "Consulta de defunciones"}
        </h3>
        <p className="text-sm text-gray-500 dark:text-slate-400">
          {esMatrimonio
            ? "Busque por nombre de uno de los cónyuges o número de cédula."
            : "Busque por nombre del fallecido o número de cédula."}
        </p>
      </div>

      <form onSubmit={handleBuscar} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm"
          />
        </div>
        <button type="submit" disabled={estado === "loading" || query.trim().length < 2}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 dark:disabled:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
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

      {estado === "notfound" && (
        <div className="flex items-start gap-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
          <AlertCircle size={18} className="text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-yellow-700 dark:text-yellow-400">Sin resultados</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-0.5">
              No se encontraron registros para <strong>"{query}"</strong>.
            </p>
          </div>
        </div>
      )}

      {estado === "found" && (
        <div className="space-y-4">
          <p className="text-sm text-gray-500 dark:text-slate-400">
            Se encontraron <strong className="text-gray-800 dark:text-white">{resultados.length}</strong> registro(s).
          </p>
          {esMatrimonio
            ? resultados.map((m) => <MatrimonioCard key={m.id} m={m} />)
            : resultados.map((d) => <DefuncionCard key={d.id} d={d} />)}
        </div>
      )}
    </div>
  );
}

export function BuscarMatrimonios() {
  return <BuscarRegistro tipo="matrimonio" />;
}

export function BuscarDefunciones() {
  return <BuscarRegistro tipo="defuncion" />;
}
