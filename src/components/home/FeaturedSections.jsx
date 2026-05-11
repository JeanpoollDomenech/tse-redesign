import { Eye, BookOpen, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredSections } from "../../constants/navLinks";

const config = {
  "/transparencia": {
    Icon: Eye,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    btnColor: "bg-teal-600 hover:bg-teal-700",
    description:
      "Consulte información sobre presupuestos, contrataciones y gestión institucional del TSE.",
  },
  "/revista": {
    Icon: BookOpen,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    btnColor: "bg-indigo-600 hover:bg-indigo-700",
    description:
      "Publicación académica especializada en temas electorales y de derecho público.",
  },
  "/participacion-mujeres": {
    Icon: Users,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
    btnColor: "bg-pink-600 hover:bg-pink-700",
    description:
      "Recursos e información sobre la participación política femenina en Costa Rica.",
  },
};

export default function FeaturedSections() {
  return (
    <section className="bg-white py-12" aria-label="Secciones destacadas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1 h-5 bg-blue-600 rounded-full" aria-hidden="true" />
          <h2 className="text-xl font-bold text-gray-800">Secciones destacadas</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {featuredSections.map((section) => {
            const c = config[section.href];
            if (!c) return null;
            const { Icon, color, bg, border, btnColor, description } = c;

            return (
              <div
                key={section.href}
                className={`rounded-xl border ${border} ${bg} p-6 flex flex-col gap-4`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm`}>
                  <Icon size={24} className={color} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-2">
                    {section.label}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
                </div>
                <Link
                  to={section.href}
                  className={`inline-flex items-center gap-2 ${btnColor} text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors w-fit`}
                >
                  Ingresar <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
