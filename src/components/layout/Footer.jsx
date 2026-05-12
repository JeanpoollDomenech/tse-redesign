import { Phone, MapPin } from "lucide-react";
import { footerLinks } from "../../constants/navLinks";
import UnavailableToast from "../ui/UnavailableToast";
import { useUnavailable } from "../../hooks/useUnavailable";

export default function Footer() {
  const toast = useUnavailable();

  const handleLink = (e) => {
    e.preventDefault();
    toast.show("Este apartado estará disponible próximamente.");
  };

  return (
    <>
      <footer className="bg-[#1E3A5F] dark:bg-slate-950 text-white transition-colors" aria-label="Pie de página">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Brand */}
            <div className="lg:col-span-1">
              <img
                src="/logo-tse.png"
                alt="Tribunal Supremo de Elecciones"
                className="h-10 w-auto p-1 rounded-md bg-[#1E3A5F]"
              />
              <p className="text-blue-200 text-sm leading-relaxed mb-3">
                Tribunal Supremo de Elecciones de Costa Rica
              </p>
              <p className="text-blue-300 text-sm">
                Basada en una obra en{" "}
                <a
                  href="https://www.tse.go.cr"
                  className="underline hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.tse.go.cr
                </a>
              </p>
              <p className="text-blue-400 text-xs mt-1">Sitio de actualización diaria</p>
            </div>

            {/* Institucional */}
            <div>
              <h3 className="text-sm font-bold text-white mb-4">Mapa del Sitio</h3>
              <ul className="space-y-2">
                {footerLinks.institucional.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleLink}
                      className="text-blue-200 text-sm hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-sm font-bold text-white mb-4">Horarios y Contactos</h3>
              <ul className="space-y-2">
                {footerLinks.contacto.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleLink}
                      className="text-blue-200 text-sm hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {link.href === "/contacto" ? <Phone size={13} /> : <MapPin size={13} />}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/sedes"
                onClick={handleLink}
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Ubicación de sedes
              </a>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-sm font-bold text-white mb-4">Redes Sociales</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: "https://facebook.com/TSECostaRica", label: "f", title: "Facebook" },
                  { href: "https://twitter.com/TSECostaRica", label: "𝕏", title: "X / Twitter" },
                  { href: "https://youtube.com/TSECostaRica", label: "▶", title: "YouTube" },
                  { href: "https://instagram.com/TSECostaRica", label: "◉", title: "Instagram" },
                ].map(({ href, label, title }) => (
                  <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={title}
                    className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors text-sm font-bold"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-blue-300 text-sm">
              © {new Date().getFullYear()} Tribunal Supremo de Elecciones — Costa Rica
            </p>
            <div className="flex items-center gap-4">
              <a href="/privacidad" onClick={handleLink} className="text-blue-400 text-sm hover:text-white transition-colors cursor-pointer">
                Privacidad
              </a>
              <a href="/terminos" onClick={handleLink} className="text-blue-400 text-sm hover:text-white transition-colors cursor-pointer">
                Términos de uso
              </a>
            </div>
          </div>
        </div>
      </footer>

      {toast.visible && (
        <UnavailableToast message={toast.message} onClose={toast.hide} />
      )}
    </>
  );
}
