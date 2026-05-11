import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { footerLinks } from "../../constants/navLinks";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/logo-tse.png"
              alt="Tribunal Supremo de Elecciones"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-blue-200 text-xs leading-relaxed mb-3">
              Tribunal Supremo de Elecciones de Costa Rica
            </p>
            <p className="text-blue-300 text-xs">
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
            <h3 className="text-sm font-semibold text-white mb-4">Mapa del Sitio</h3>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-blue-200 text-xs hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Horarios y Contactos
            </h3>
            <ul className="space-y-2">
              {footerLinks.contacto.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-blue-200 text-xs hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    {link.href === "/contacto" ? (
                      <Phone size={12} />
                    ) : (
                      <MapPin size={12} />
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Ubicación de sedes button */}
            <Link
              to="/sedes"
              className="inline-block mt-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Ubicación de sedes
            </Link>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Redes Sociales</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "https://facebook.com", label: "f", title: "Facebook" },
                { href: "https://twitter.com", label: "𝕏", title: "X / Twitter" },
                { href: "https://youtube.com", label: "▶", title: "YouTube" },
                { href: "https://instagram.com", label: "◉", title: "Instagram" },
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
          <p className="text-blue-300 text-xs">
            © {new Date().getFullYear()} Tribunal Supremo de Elecciones — Costa Rica
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacidad" className="text-blue-400 text-xs hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link to="/terminos" className="text-blue-400 text-xs hover:text-white transition-colors">
              Términos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
