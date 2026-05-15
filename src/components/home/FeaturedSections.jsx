import { Eye, BookOpen, Users, ArrowRight } from "lucide-react";
import { useLang } from "../../context/LangContext";
import UnavailableToast from "../ui/UnavailableToast";
import { useUnavailable } from "../../hooks/useUnavailable";

const config = {
  "/transparencia": {
    Icon: Eye,
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-100 dark:border-teal-800",
    btnColor: "bg-teal-600 hover:bg-teal-700",
  },
  "/revista": {
    Icon: BookOpen,
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-100 dark:border-indigo-800",
    btnColor: "bg-indigo-600 hover:bg-indigo-700",
  },
  "/participacion-mujeres": {
    Icon: Users,
    color: "text-pink-600 dark:text-pink-400",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    border: "border-pink-100 dark:border-pink-800",
    btnColor: "bg-pink-600 hover:bg-pink-700",
  },
};

export default function FeaturedSections() {
  const { t } = useLang();
  const toast = useUnavailable();

  const featuredSections = [
    { label: t.links.transparencia, href: "/transparencia" },
    { label: t.links.revista, href: "/revista" },
    { label: t.links.participacion, href: "/participacion-mujeres" },
  ];

  return (
    <>
      <section className="bg-white dark:bg-slate-900 py-12 transition-colors" aria-label={t.featured.title}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-5 bg-blue-600 rounded-full" aria-hidden="true" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">{t.featured.title}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {featuredSections.map((section) => {
              const c = config[section.href];
              if (!c) return null;
              const { Icon, color, bg, border, btnColor } = c;
              const description = t.featured.descriptions[section.href];

              return (
                <div key={section.href} className={`rounded-xl border ${border} ${bg} p-6 flex flex-col gap-4 transition-colors`}>
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                    <Icon size={24} className={color} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 dark:text-white text-base leading-snug mb-2">
                      {section.label}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{description}</p>
                  </div>
                  <button
                    onClick={() => toast.show(t.toast.section)}
                    className={`inline-flex items-center gap-2 ${btnColor} text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-colors w-fit cursor-pointer`}
                  >
                    {t.featured.enter} <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {toast.visible && <UnavailableToast message={toast.message} onClose={toast.hide} />}
    </>
  );
}
