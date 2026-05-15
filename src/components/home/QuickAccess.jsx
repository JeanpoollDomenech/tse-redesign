import { FileText, Award, CreditCard, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { quickLinks } from "../../constants/navLinks";
import UnavailableToast from "../ui/UnavailableToast";
import { useUnavailable } from "../../hooks/useUnavailable";

const icons = {
  "/consultas-civiles": FileText,
  "/certificaciones": Award,
  "/documento-identidad": CreditCard,
};

const colors = [
  "bg-blue-600 hover:bg-blue-700",
  "bg-blue-700 hover:bg-blue-800",
  "bg-blue-800 hover:bg-blue-900",
];

// Rutas que ya tienen página real
const rutasActivas = ["/consultas-civiles"];

export default function QuickAccess() {
  const toast = useUnavailable();

  return (
    <>
      <section className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-700 transition-colors" aria-label="Servicios más visitados">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1 h-5 bg-blue-600 rounded-full" aria-hidden="true" />
            <h2 className="text-sm font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
              Más visitados
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {quickLinks.map((link, i) => {
              const Icon = icons[link.href] || FileText;
              const activo = rutasActivas.includes(link.href);

              if (activo) {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`flex items-center justify-between gap-3 ${colors[i]} text-white px-5 py-4 rounded-xl transition-all duration-200 group shadow-sm`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="flex-shrink-0 opacity-90" />
                      <span className="font-bold text-sm">{link.label}</span>
                    </div>
                    <ArrowRight size={16} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                );
              }

              return (
                <button
                  key={link.href}
                  onClick={() => toast.show("Este servicio estará disponible próximamente.")}
                  className={`flex items-center justify-between gap-3 ${colors[i]} text-white px-5 py-4 rounded-xl transition-all duration-200 group shadow-sm w-full text-left`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} className="flex-shrink-0 opacity-90" />
                    <span className="font-bold text-sm">{link.label}</span>
                  </div>
                  <ArrowRight size={16} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {toast.visible && (
        <UnavailableToast message={toast.message} onClose={toast.hide} />
      )}
    </>
  );
}
