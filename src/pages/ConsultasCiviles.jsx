import { useState } from "react";
import { ChevronDown, ChevronUp, User, Users, Heart, Skull, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import BuscarPorCedula from "../components/consultas/BuscarPorCedula";
import BuscarPorNombre from "../components/consultas/BuscarPorNombre";
import BuscarExtranjero from "../components/consultas/BuscarExtranjero";
import { BuscarMatrimonios, BuscarDefunciones } from "../components/consultas/BuscarMatrimoniosDefunciones";

function SubSeccion({ label, icon: Icon, children }) {
  const [abierta, setAbierta] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <button onClick={() => setAbierta(!abierta)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors text-left">
        <div className="flex items-center gap-3">
          <Icon size={16} className="text-gray-500 dark:text-slate-400 flex-shrink-0" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{label}</span>
        </div>
        {abierta ? <ChevronUp size={16} className="text-gray-400 flex-shrink-0" /> : <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />}
      </button>
      {abierta && (
        <div className="px-5 py-6 bg-gray-50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-slate-700">
          {children}
        </div>
      )}
    </div>
  );
}

function GrupoSeccion({ label, icon: Icon, color, bg, border, children }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className={`rounded-xl border ${border} overflow-hidden`}>
      <button onClick={() => setAbierto(!abierto)}
        className={`w-full flex items-center justify-between px-6 py-4 ${bg} hover:opacity-90 transition-opacity text-left`}>
        <div className="flex items-center gap-3">
          <Icon size={18} className={color} />
          <span className={`font-bold text-sm ${color}`}>{label}</span>
        </div>
        {abierto ? <ChevronUp size={16} className={color} /> : <ChevronDown size={16} className={color} />}
      </button>
      {abierto && (
        <div className="p-4 space-y-3 bg-white dark:bg-slate-900">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ConsultasCiviles() {
  const { t, lang } = useLang();

  return (
    <main className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400 mb-3">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {lang === "en" ? "Home" : "Inicio"}
          </Link>
          <span>/</span>
          <span className="text-gray-700 dark:text-gray-200 font-medium">{t.consultas.breadcrumb}</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{t.consultas.pageTitle}</h1>
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">{t.consultas.pageDesc}</p>

        {/* key={lang} forces full re-render of accordion state on language change */}
        <div className="space-y-4 mb-10" key={lang}>

          {/* Personas Nacionales */}
          <GrupoSeccion
            label={t.consultas.nacionales}
            icon={User}
            color="text-blue-600 dark:text-blue-400"
            bg="bg-blue-50 dark:bg-blue-900/20"
            border="border-blue-200 dark:border-blue-800"
          >
            <SubSeccion label={t.consultas.cedula.title} icon={FileText}>
              <BuscarPorCedula />
            </SubSeccion>
            <SubSeccion label={t.consultas.nombre.title} icon={User}>
              <BuscarPorNombre />
            </SubSeccion>
          </GrupoSeccion>

          {/* Personas Extranjeras */}
          <GrupoSeccion
            label={t.consultas.extranjeros}
            icon={Users}
            color="text-indigo-600 dark:text-indigo-400"
            bg="bg-indigo-50 dark:bg-indigo-900/20"
            border="border-indigo-200 dark:border-indigo-800"
          >
            <SubSeccion label={t.consultas.extranjero.title} icon={FileText}>
              <BuscarExtranjero />
            </SubSeccion>
            <SubSeccion label={t.consultas.matrimonios.title} icon={Heart}>
              <BuscarMatrimonios />
            </SubSeccion>
            <SubSeccion label={t.consultas.defunciones.title} icon={Skull}>
              <BuscarDefunciones />
            </SubSeccion>
          </GrupoSeccion>
        </div>

        {/* Disclaimer */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <Mail size={18} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
              {t.consultas.disclaimer}{" "}
              <a href="mailto:actualizaciondedatos@tse.go.cr?subject=Actualización a la Base de Datos"
                className="font-bold underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                actualizaciondedatos@tse.go.cr
              </a>
              , {t.consultas.disclaimerForm}{" "}
              <strong>{t.consultas.formLabel}</strong>{" "}
              <a href="https://servicioselectorales.tse.go.cr/chc/docs/ANEXO%201%20-%20Formulario%20para%20solicitar%20correcci%C3%B3n%20general%20en%20la%20base%20de%20datos.docm"
                target="_blank" rel="noreferrer"
                className="font-bold underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                ({t.consultas.clickHere})
              </a>{" "}
              {t.consultas.disclaimerAttach}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
