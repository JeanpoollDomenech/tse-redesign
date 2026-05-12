import { Calendar, ArrowRight } from "lucide-react";
import UnavailableToast from "../ui/UnavailableToast";
import { useUnavailable } from "../../hooks/useUnavailable";

const noticias = [
  {
    id: 1,
    date: "01/11/2025",
    title: "Nuevo sitio — ¡Que no lo engañen!",
    excerpt: "El TSE alerta a la ciudadanía sobre sitios no oficiales que suplantan la identidad institucional.",
    href: "/noticias/nuevo-sitio",
    image: "/news/noticia-1.jpg",
    tag: "Aviso institucional",
    tagColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    id: 2,
    date: "15/01/2026",
    title: "Próximo lunes comenzará escrutinio definitivo de la papeleta diputadil",
    excerpt: "El Tribunal Supremo de Elecciones dará inicio al proceso de escrutinio definitivo el próximo lunes.",
    href: "/noticias/escrutinio-diputadil",
    image: "/news/noticia-2.jpg",
    tag: "Elecciones 2026",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    id: 3,
    date: "16/01/2026",
    title: "TSE ofrecerá servicios a domicilio en comunidades del cantón de Bagaces",
    excerpt: "La iniciativa busca acercar los servicios de registro civil a las comunidades más alejadas del país.",
    href: "/noticias/servicios-bagaces",
    image: "/news/noticia-3.jpg",
    tag: "Registro Civil",
    tagColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  },
];

function NewsCard({ noticia, onCardClick }) {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-200 flex flex-col">
      <div className="h-48 bg-gray-100 dark:bg-slate-700 overflow-hidden flex-shrink-0">
        <img
          src={noticia.image}
          alt={noticia.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.parentElement.style.background = "linear-gradient(135deg, #1E3A5F 0%, #1A56DB 100%)";
            e.target.style.display = "none";
          }}
        />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-center justify-between">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${noticia.tagColor}`}>
            {noticia.tag}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-slate-500">
            <Calendar size={12} />
            <span>{noticia.date}</span>
          </div>
        </div>

        <h3 className="font-bold text-gray-800 dark:text-white text-base leading-snug line-clamp-2">
          {noticia.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed line-clamp-2 flex-1">
          {noticia.excerpt}
        </p>

        <a
          href={noticia.href}
          onClick={onCardClick}
          className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-bold hover:gap-2.5 transition-all cursor-pointer"
        >
          Ver noticia <ArrowRight size={13} />
        </a>
      </div>
    </article>
  );
}

export default function NewsSection() {
  const toast = useUnavailable();

  const handleClick = (e) => {
    e.preventDefault();
    toast.show("Esta noticia no está disponible en este momento.");
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-slate-800/50 py-12 transition-colors" aria-label="Noticias recientes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-full" aria-hidden="true" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Noticias</h2>
            </div>
            <a
              href="/noticias"
              onClick={handleClick}
              className="text-sm text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 cursor-pointer"
            >
              Ver todas <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {noticias.map((n) => (
              <NewsCard key={n.id} noticia={n} onCardClick={handleClick} />
            ))}
          </div>
        </div>
      </section>

      {toast.visible && (
        <UnavailableToast message={toast.message} onClose={toast.hide} />
      )}
    </>
  );
}
