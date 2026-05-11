import {
  Building2,
  FileText,
  Vote,
  Scale,
  BookOpen,
  BookMarked,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { mainMenuLinks } from "../../constants/navLinks";

const icons = {
  "/sobre-tse": Building2,
  "/registro-civil": FileText,
  "/elecciones": Vote,
  "/jurisprudencia": Scale,
  "/formacion": BookOpen,
  "/publicaciones": BookMarked,
};

const accentColors = [
  "group-hover:text-blue-600 group-hover:bg-blue-50",
  "group-hover:text-indigo-600 group-hover:bg-indigo-50",
  "group-hover:text-red-600 group-hover:bg-red-50",
  "group-hover:text-teal-600 group-hover:bg-teal-50",
  "group-hover:text-green-600 group-hover:bg-green-50",
  "group-hover:text-purple-600 group-hover:bg-purple-50",
];

export default function MainCategories() {
  return (
    <section className="bg-gray-50 py-12" aria-label="Categorías principales">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Nuestros servicios
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {mainMenuLinks.map((link, i) => {
            const Icon = icons[link.href] || FileText;
            return (
              <Link
                key={link.href}
                to={link.href}
                className="group bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 hover:border-blue-200 hover:shadow-md transition-all duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 transition-all duration-200 ${accentColors[i]}`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm leading-snug">
                    {link.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 leading-snug">
                    {link.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver más <ArrowRight size={12} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
