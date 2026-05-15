import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../../context/LangContext";
import UnavailableToast from "../ui/UnavailableToast";
import { useUnavailable } from "../../hooks/useUnavailable";

const slideBgs = [
  "from-[#1E3A5F] to-[#1A56DB]",
  "from-[#1E3A5F] to-[#2563EB]",
  "from-[#14532D] to-[#1A56DB]",
];

const slideImages = [
  "/hero/plenario.jpg",
  "/hero/slide-2.jpg",
  "/hero/slide-3.jpg",
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const { t } = useLang();
  const toast = useUnavailable();

  const next = useCallback(() => setCurrent((c) => (c + 1) % 3), []);
  const prev = () => setCurrent((c) => (c - 1 + 3) % 3);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, next]);

  const slide = t.hero.slides[current];

  const handleCta = (e) => {
    e.preventDefault();
    toast.show(t.toast.unavailable);
  };

  return (
    <>
      <section
        className={`relative w-full overflow-hidden bg-gradient-to-r ${slideBgs[current]} transition-all duration-700`}
        style={{ minHeight: "360px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-label={slide.title}
      >
        <div className="absolute inset-0">
          <img
            src={slideImages[current]}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-20"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center min-h-[360px]">
          <div className="max-w-2xl">
            <span className="inline-block text-blue-200 text-sm font-semibold tracking-wide uppercase mb-3">
              {slide.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {slide.title}
            </h1>
            <a
              href="#"
              onClick={handleCta}
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-md text-sm"
            >
              {slide.cta}
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center justify-center bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
            <span className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">
              {t.hero.elections}
            </span>
            <span className="text-white text-5xl font-black leading-none">2026</span>
            <span className="text-blue-100 text-xs mt-1">{t.hero.country}</span>
          </div>
        </div>

        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm" aria-label={t.hero.prev}>
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm" aria-label={t.hero.next}>
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`${t.hero.goTo} ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {toast.visible && <UnavailableToast message={toast.message} onClose={toast.hide} />}
    </>
  );
}
