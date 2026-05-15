import { useState } from "react";
import { Search, Menu, Moon, Sun, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useLang } from "../../context/LangContext";
import MobileMenu from "./MobileMenu";
import UnavailableToast from "../ui/UnavailableToast";
import { useUnavailable } from "../../hooks/useUnavailable";

const languages = [
  { code: "es", label: "ES", full: "Español" },
  { code: "en", label: "EN", full: "English" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const { dark, setDark } = useTheme();
  const { lang, setLang, t } = useLang();
  const toast = useUnavailable();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.show(t.toast.search);
    }
  };

  const handleLangChange = (code) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <>
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img
                src="/logo-tse.png"
                alt="Tribunal Supremo de Elecciones"
                className="h-10 w-auto p-1 rounded-md bg-[#1E3A5F]"
              />
              <div className="hidden sm:block">
                <p className="text-xs font-bold text-gray-800 dark:text-white leading-tight">
                  Tribunal Supremo
                </p>
                <p className="text-xs font-bold text-gray-800 dark:text-white leading-tight">
                  de Elecciones
                </p>
              </div>
            </Link>

            {/* Search bar desktop */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex flex-1 max-w-xl items-center bg-gray-100 dark:bg-slate-800 rounded-full px-4 py-2 gap-2 border border-transparent focus-within:border-blue-500 focus-within:bg-white dark:focus-within:bg-slate-700 transition-all"
            >
              <Search size={16} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.nav.search}
                className="bg-transparent flex-1 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 outline-none"
              />
            </form>

            {/* Right controls */}
            <div className="flex items-center gap-1">

              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen((o) => !o)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-semibold"
                  aria-label="Cambiar idioma / Change language"
                >
                  <Globe size={16} />
                  <span>{lang.toUpperCase()}</span>
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-xl shadow-lg overflow-hidden w-36 z-50">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => handleLangChange(l.code)}
                        className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 transition-colors ${
                          lang === l.code
                            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700"
                        }`}
                      >
                        <span className="font-bold text-xs w-6">{l.label}</span>
                        <span>{l.full}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dark mode toggle */}
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-semibold"
                aria-label="Abrir menú principal"
              >
                <Menu size={20} />
                <span className="hidden sm:inline">{t.nav.menu}</span>
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden pb-3">
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-gray-100 dark:bg-slate-800 rounded-full px-4 py-2 gap-2 border border-transparent focus-within:border-blue-500 transition-all"
            >
              <Search size={16} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.nav.search}
                className="bg-transparent flex-1 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 outline-none"
              />
            </form>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {toast.visible && (
        <UnavailableToast message={toast.message} onClose={toast.hide} />
      )}
    </>
  );
}
