import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Buscar:", searchQuery);
    }
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img
                src="/logo-tse.png"
                alt="Tribunal Supremo de Elecciones"
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-gray-800 leading-tight">
                  Tribunal Supremo
                </p>
                <p className="text-xs font-semibold text-gray-800 leading-tight">
                  de Elecciones
                </p>
              </div>
            </Link>

            {/* Search bar — visible in desktop */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex flex-1 max-w-xl items-center bg-gray-100 rounded-full px-4 py-2 gap-2 border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all"
            >
              <Search size={16} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar en el sitio..."
                className="bg-transparent flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none"
              />
            </form>

            {/* Hamburger menu button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
              aria-label="Abrir menú principal"
            >
              <Menu size={20} />
              <span className="hidden sm:inline">Menú</span>
            </button>
          </div>

          {/* Mobile search bar */}
          <div className="md:hidden pb-3">
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all"
            >
              <Search size={16} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar en el sitio..."
                className="bg-transparent flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none"
              />
            </form>
          </div>
        </div>
      </header>

      {/* Slide-in mobile menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
