import { X } from "lucide-react";
import { quickLinks, mainMenuLinks, featuredSections } from "../../constants/navLinks";
import UnavailableToast from "../ui/UnavailableToast";
import { useUnavailable } from "../../hooks/useUnavailable";

export default function MobileMenu({ isOpen, onClose }) {
  const toast = useUnavailable();

  const handleLink = (e) => {
    e.preventDefault();
    onClose();
    toast.show("Este apartado estará disponible próximamente.");
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white dark:bg-slate-900 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col border-l border-gray-200 dark:border-slate-700 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menú principal"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-slate-700">
          <span className="font-bold text-gray-800 dark:text-white">Menú principal</span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-gray-500 dark:text-gray-400"
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
          <section>
            <h3 className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              Servicios más visitados
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLink}
                    className="block px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-200 dark:border-slate-700" />

          <section>
            <h3 className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              Menú principal
            </h3>
            <ul className="space-y-1">
              {mainMenuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLink}
                    className="block px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span className="font-semibold">{link.label}</span>
                    <p className="text-xs text-gray-400 dark:text-slate-500 mt-0.5">{link.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-200 dark:border-slate-700" />

          <section>
            <h3 className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              Secciones
            </h3>
            <ul className="space-y-1">
              {featuredSections.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLink}
                    className="block px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </nav>

      {toast.visible && (
        <UnavailableToast message={toast.message} onClose={toast.hide} />
      )}
    </>
  );
}
