import { Calendar, ArrowRight } from "lucide-react";
import { useLang } from "../../context/LangContext";
import UnavailableToast from "../ui/UnavailableToast";
import { useUnavailable } from "../../hooks/useUnavailable";

const noticias = [
  {
    id: 1,
    date: "01/11/2025",
    titleKey: "Nuevo sitio — ¡Que no lo engañen!",
    excerptKey: "El TSE alerta a la ciudadanía sobre sitios no oficiales que suplantan la identidad institucional.",
    titleEn: "New site — Don't be fooled!",
    excerptEn: "The TSE alerts citizens about unofficial sites that impersonate the institutional identity.",
    image: "/news/noticia-1.jpg",
    tagKey: "institucional",
    tagColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    id: 2,
    date: "15/01/2026",
    titleKey: "Próximo lunes comenzará escrutinio definitivo de la papeleta diputadil",
    excerptKey: "El Tribunal Supremo de Elecciones dará inicio al proceso de escrutinio definitivo el próximo lunes.",
    titleEn: "Next Monday the definitive scrutiny of the deputy ballot will begin",
    excerptEn: "The Supreme Electoral Tribunal will begin the final scrutiny process next Monday.",
    image: "/news/noticia-2.jpg",
    tagKey: "elecciones",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    id: 3,
    date: "16/01/2026",
    titleKey: "TSE ofrecerá servicios a domicilio en comunidades del cantón de Bagaces",
    excerptKey: "La iniciativa busca acercar los servicios de registro civil a las comunidades más alejadas del país.",
    titleEn: "TSE will offer home services in communities of the canton of Bagaces",
    excerptEn: "The initiative seeks to bring civil registry services closer to the most remote communities in the country.",
    image: "/news/noticia-3.jpg",
    tagKey: "civil",
    tagColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  },
];

function NewsCard({ noticia, onCardClick, t, lang }) {
  const title = lang === "en" ? noticia.titleEn : noticia.titleKey;
  const excerpt = lang === "en" ? noticia.excerptEn : noticia.excerptKey;
  const tag = t.news.tags[noticia.tagKey];

  return (
    <article className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-200 flex flex-col">
      <div className="h-48 bg-gray-100 dark:bg-slate-700 overflow-hidden flex-shrink-0">
        <img src={noticia.image} alt={title} className="w-full h-full object-cover"
          onError={(e) => {
            e.target.parentElement.style.background = "linear-gradient(135deg, #1E3A5F 0%, #1A56DB 100%)";
            e.target.style.display = "none";
          }}
        />
      </div>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-center justify-between">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${noticia.tagColor}`}>{tag}</span>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-slate-500">
            <Calendar size={12} />
            <span>{noticia.date}</span>
          </div>
        </div>
        <h3 className="font-bold text-gray-800 dark:text-white text-base leading-snug line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed line-clamp-2 flex-1">{excerpt}</p>
        <button onClick={onCardClick}
          className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-bold hover:gap-2.5 transition-all cursor-pointer">
          {t.news.readMore} <ArrowRight size={13} />
        </button>
      </div>
    </article>
  );
}

export default function NewsSection() {
  const { t, lang } = useLang();
  const toast = useUnavailable();

  const handleClick = () => toast.show(t.toast.news);

  return (
    <>
      <section className="bg-gray-50 dark:bg-slate-800/50 py-12 transition-colors" aria-label={t.news.title}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-full" aria-hidden="true" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">{t.news.title}</h2>
            </div>
            <button onClick={handleClick}
              className="text-sm text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 cursor-pointer">
              {t.news.seeAll} <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {noticias.map((n) => (
              <NewsCard key={n.id} noticia={n} onCardClick={handleClick} t={t} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {toast.visible && <UnavailableToast message={toast.message} onClose={toast.hide} />}
    </>
  );
}
