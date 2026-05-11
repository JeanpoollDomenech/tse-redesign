import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const noticias = [
  {
    id: 1,
    date: "01/11/2025",
    title: "Nuevo sitio — ¡Que no lo engañen!",
    excerpt:
      "El TSE alerta a la ciudadanía sobre sitios no oficiales que suplantan la identidad institucional.",
    href: "/noticias/nuevo-sitio",
    image: "/news/noticia-1.jpg",
    tag: "Aviso institucional",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    id: 2,
    date: "15/01/2026",
    title: "Próximo lunes comenzará escrutinio definitivo de la papeleta diputadil",
    excerpt:
      "El Tribunal Supremo de Elecciones dará inicio al proceso de escrutinio definitivo el próximo lunes.",
    href: "/noticias/escrutinio-diputadil",
    image: "/news/noticia-2.jpg",
    tag: "Elecciones 2026",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    date: "16/01/2026",
    title: "TSE ofrecerá servicios a domicilio en comunidades del cantón de Bagaces",
    excerpt:
      "La iniciativa busca acercar los servicios de registro civil a las comunidades más alejadas del país.",
    href: "/noticias/servicios-bagaces",
    image: "/news/noticia-3.jpg",
    tag: "Registro Civil",
    tagColor: "bg-green-100 text-green-700",
  },
];

function NewsCard({ noticia }) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col">
      {/* Image */}
      <div className="h-48 bg-gray-100 overflow-hidden flex-shrink-0">
        <img
          src={noticia.image}
          alt={noticia.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.parentElement.style.background =
              "linear-gradient(135deg, #1E3A5F 0%, #1A56DB 100%)";
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${noticia.tagColor}`}
          >
            {noticia.tag}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Calendar size={12} />
            <span>{noticia.date}</span>
          </div>
        </div>

        <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2">
          {noticia.title}
        </h3>

        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
          {noticia.excerpt}
        </p>

        <Link
          to={noticia.href}
          className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-semibold hover:gap-2.5 transition-all"
        >
          Ver noticia <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
}

export default function NewsSection() {
  return (
    <section className="bg-gray-50 py-12" aria-label="Noticias recientes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-600 rounded-full" aria-hidden="true" />
            <h2 className="text-xl font-bold text-gray-800">Noticias</h2>
          </div>
          <Link
            to="/noticias"
            className="text-sm text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1"
          >
            Ver todas <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {noticias.map((n) => (
            <NewsCard key={n.id} noticia={n} />
          ))}
        </div>
      </div>
    </section>
  );
}
