import { useEffect } from "react";
import { X } from "lucide-react";

export default function UnavailableToast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] animate-slide-up">
      <div className="flex items-start gap-3 bg-white dark:bg-gray-900 border border-red-200 dark:border-red-800 rounded-xl shadow-2xl px-5 py-4 max-w-sm w-full">
        <span className="text-2xl flex-shrink-0" aria-hidden="true">🚧</span>
        <div className="flex-1">
          <p className="font-bold text-red-700 dark:text-red-400 text-sm">
            Sección no disponible
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-xs mt-0.5 leading-relaxed">
            {message || "Este apartado está en construcción. Estará disponible próximamente."}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 flex-shrink-0"
          aria-label="Cerrar"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
