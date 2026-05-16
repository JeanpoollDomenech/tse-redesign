import { Building2, FileText, Vote, Scale, BookOpen, BookMarked, ArrowRight } from "lucide-react";
import { useLang } from "../../context/LangContext";
import UnavailableToast from "../ui/UnavailableToast";
import { useUnavailable } from "../../hooks/useUnavailable";
import { useNavigate } from "react-router-dom";


const cardAccents = [
  { icon: "text-blue-600 bg-blue-100 dark:bg-blue-900/40 dark:text-blue-300", hover: "hover:border-blue-300" },
  { icon: "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/40 dark:text-indigo-300", hover: "hover:border-indigo-300" },
  { icon: "text-red-600 bg-red-100 dark:bg-red-900/40 dark:text-red-300", hover: "hover:border-red-300" },
  { icon: "text-teal-600 bg-teal-100 dark:bg-teal-900/40 dark:text-teal-300", hover: "hover:border-teal-300" },
  { icon: "text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-300", hover: "hover:border-green-300" },
  { icon: "text-purple-600 bg-purple-100 dark:bg-purple-900/40 dark:text-purple-300", hover: "hover:border-purple-300" },
];

const icons = [Building2, FileText, Vote, Scale, BookOpen, BookMarked];

export default function MainCategories() {
  const { t } = useLang();
  const toast = useUnavailable();
  const navigate = useNavigate();
  const handleClick = (e, href) => {
    e.preventDefault();
    if (href === '/sobre-tse') {
      navigate(href);
    } else {
      toast.show("Esta sección estará disponible próximamente.");
    }
  };

  const mainMenuLinks = [
    { label: t.links.sobreTSE, href: "/sobre-tse", description: t.links.sobreTSEDesc },
    { label: t.links.registroCivil, href: "/registro-civil", description: t.links.registroCivilDesc },
    { label: t.links.elecciones, href: "/elecciones", description: t.links.eleccionesDesc },
    { label: t.links.jurisprudencia, href: "/jurisprudencia", description: t.links.jurisprudenciaDesc },
    { label: t.links.formacion, href: "/formacion", description: t.links.formacionDesc },
    { label: t.links.publicaciones, href: "/publicaciones", description: t.links.publicacionesDesc },
  ];

  return (
    <>
      <section className="bg-gray-50 dark:bg-slate-800/50 py-12 transition-colors" aria-label={t.categories.title}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-5 bg-blue-600 rounded-full" aria-hidden="true" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">{t.categories.title}</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {mainMenuLinks.map((link, i) => {
              const Icon = icons[i];
              const accent = cardAccents[i];
              return (
                <button key={link.href} onClick={(e) => handleClick(e, link.href)}
                  className={`group bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-5 flex flex-col gap-3 ${accent.hover} hover:shadow-md transition-all duration-200 text-left w-full`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${accent.icon}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white text-sm leading-snug">{link.label}</p>
                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1 leading-snug">{link.description}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {t.categories.seeMore} <ArrowRight size={12} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {toast.visible && <UnavailableToast message={toast.message} onClose={toast.hide} />}
    </>
  );
}
