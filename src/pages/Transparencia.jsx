import {
  Landmark,
  ClipboardList,
  FileText,
  Building2,
  Briefcase,
  Users,
  ShieldCheck,
  Map,
  Plane,
  AlertTriangle,
} from "lucide-react";

import { useState } from "react";

const sections = [
  {
    title: "Actas del TSE",
    icon: <FileText size={26} />,
  },
  {
    title: "Administración del Sitio Web",
    icon: <Map size={26} />,
  },
  {
    title: "Adquisiciones",
    icon: <ClipboardList size={26} />,
  },
  {
    title: "Auditoría Interna",
    icon: <ShieldCheck size={26} />,
  },
  {
    title: "Información Financiera",
    icon: <Landmark size={26} />,
  },
  {
    title: "Informes de Gestión",
    icon: <Briefcase size={26} />,
  },
  {
    title: "Organigrama Institucional",
    icon: <Building2 size={26} />,
  },
  {
    title: "Puestos y Salarios",
    icon: <Users size={26} />,
  },
  {
    title: "Recursos Humanos",
    icon: <Users size={26} />,
  },
  {
    title: "Viajes de Funcionarios",
    icon: <Plane size={26} />,
  },
  {
    title: "Violencia contra las Mujeres",
    icon: <AlertTriangle size={26} />,
  },
];

export default function Transparencia() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900 py-14 px-6 transition-colors">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-5">
            Transparencia y Rendición de Cuentas
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
            Consulte información institucional relacionada con auditorías,
            presupuestos, recursos humanos, informes y gestión administrativa
            del Tribunal Supremo de Elecciones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {sections.map((section, index) => (
            <button
              key={index}
              onClick={handleClick}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl transition-all p-7 text-left border border-slate-200 dark:border-slate-700 hover:-translate-y-1"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400 mb-5">
                {section.icon}
              </div>

              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                {section.title}
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Acceda a información institucional y documentación oficial relacionada con esta sección.
              </p>

            </button>
          ))}

        </div>

      </div>

      {/* Toast Message */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-fade-in">
          Documentos en proceso de carga
        </div>
      )}

    </main>
  );
}
