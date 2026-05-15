import { useState } from "react";
import { ChevronDown, ChevronUp, User, Users, Heart, Skull, Mail, FileText } from "lucide-react";
import BuscarPorCedula from "../components/consultas/BuscarPorCedula";
import BuscarPorNombre from "../components/consultas/BuscarPorNombre";
import BuscarExtranjero from "../components/consultas/BuscarExtranjero";
import { BuscarMatrimonios, BuscarDefunciones } from "../components/consultas/BuscarMatrimoniosDefunciones";

const secciones = [
  {
    id: "nacionales",
    grupo: true,
    label: "Personas Nacionales",
    icon: User,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    subsecciones: [
      {
        id: "cedula",
        label: "Consulta por número de cédula",
        icon: FileText,
        componente: <BuscarPorCedula />,
      },
      {
        id: "nombre",
        label: "Consulta por nombre y apellidos",
        icon: User,
        componente: <BuscarPorNombre />,
      },
    ],
  },
  {
    id: "extranjeros",
    grupo: true,
    label: "Personas Extranjeras",
    icon: Users,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    subsecciones: [
      {
        id: "dimex",
        label: "Consulta por número de DIMEX",
        icon: FileText,
        componente: <BuscarExtranjero />,
      },
      {
        id: "matrimonios",
        label: "Consulta de matrimonios",
        icon: Heart,
        componente: <BuscarMatrimonios />,
      },
      {
        id: "defunciones",
        label: "Consulta de defunciones",
        icon: Skull,
        componente: <BuscarDefunciones />,
      },
    ],
  },
];

function SubSeccion({ sub }) {
  const [abierta, setAbierta] = useState(false);
  const Icon = sub.icon;

  return (
    <div className="border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setAbierta(!abierta)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <Icon size={16} className="text-gray-500 dark:text-slate-400 flex-shrink-0" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            {sub.label}
          </span>
        </div>
        {abierta
          ? <ChevronUp size={16} className="text-gray-400 flex-shrink-0" />
          : <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
        }
      </button>
      {abierta && (
        <div className="px-5 py-6 bg-gray-50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-slate-700">
          {sub.componente}
        </div>
      )}
    </div>
  );
}

function GrupoSeccion({ seccion }) {
  const [abierto, setAbierto] = useState(false);
  const Icon = seccion.icon;

  return (
    <div className={`rounded-xl border ${seccion.borderColor} overflow-hidden`}>
      <button
        onClick={() => setAbierto(!abierto)}
        className={`w-full flex items-center justify-between px-6 py-4 ${seccion.bgColor} hover:opacity-90 transition-opacity text-left`}
      >
        <div className="flex items-center gap-3">
          <Icon size={18} className={seccion.color} />
          <span className={`font-bold text-sm ${seccion.color}`}>{seccion.label}</span>
        </div>
        {abierto
          ? <ChevronUp size={16} className={seccion.color} />
          : <ChevronDown size={16} className={seccion.color} />
        }
      </button>
      {abierto && (
        <div className="p-4 space-y-3 bg-white dark:bg-slate-900">
          {seccion.subsecciones.map((sub) => (
            <SubSeccion key={sub.id} sub={sub} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ConsultasCiviles() {
  return (
    <main className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Page header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400 mb-3">
            <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</a>
            <span>/</span>
            <span className="text-gray-700 dark:text-gray-200 font-medium">Consultas Civiles</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Consultas Civiles y Solicitud de Certificaciones
          </h1>
          <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed max-w-2xl">
            Consulte información del Registro Civil del Tribunal Supremo de Elecciones. Seleccione el tipo de consulta que desea realizar.
          </p>
        </div>

        {/* Secciones */}
        <div className="space-y-4 mb-10">
          {secciones.map((seccion) => (
            <GrupoSeccion key={seccion.id} seccion={seccion} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <Mail size={18} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                En caso de detectar alguna inconsistencia en la información que se refleja en este servicio de consultas civiles, podrá solicitar su aclaración o corrección, mediante correo electrónico a la siguiente dirección:{" "}
                <a
                  href="mailto:actualizaciondedatos@tse.go.cr?subject=Actualización a la Base de Datos"
                  className="font-bold underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                >
                  actualizaciondedatos@tse.go.cr
                </a>
                , para lo cual se deberá completar el formulario{" "}
                <strong>Actualización a la Base de Datos</strong>{" "}
                <a
                  href="https://servicioselectorales.tse.go.cr/chc/docs/ANEXO%201%20-%20Formulario%20para%20solicitar%20correcci%C3%B3n%20general%20en%20la%20base%20de%20datos.docm"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                >
                  (Haga clic aquí)
                </a>{" "}
                y adjuntarlo al correo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
