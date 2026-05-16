import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CicilRegistration () {
    const [openIndex, setOpenIndex] = useState(null);
    const sections = [
        {
            title: 'Registro Civil',
            descripcion: 'Acceda a servicios y plataformas relacionadas con identificación, certificaciones, verificación de identidad y estadísticas del Registro Civil.',
            subIndex: [ 
                'Servicios en línea', 'Servicios de atención personal', 'Sistema de Verficación de Identidad', 
                'Plataforma de servicios institucionales (PSI)', 'CLARCIEV', 'Listado de certificadores',
                'Estadísticas del Registro Civil'
            ]
        },
        {
            title: 'Contraloría de Servicios',
            descripcion: 'Presente su consulta, inconformidad, sugerencia o felicitación sobre el servicio que recibió Aquí',
            subIndex: [ 
                'Formulario de Gestión', 'Evalúe aquí el servicio que recibió',
                'Informes de evaluación de servicios'
            ]
        }
    ];

    const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      

      {/* Hero */}
  <section
      className="
        relative overflow-hidden text-white
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: `
          linear-gradient(rgba(15,23,42,0.70), rgba(15,23,42,0.70)),
          url('/hero/plenario.jpg')
        `,
      }}
    >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
              Informese
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight">
              Servicios de Registración Civil
            </h2>

            <p className="mt-6 text-lg text-slate-200">
              Explora todo lo que debes de saber respecto a los servicios de registración civil.
            </p>
          </div>
        </div>
      </section>

      {/* Secciones*/}
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-5">
          {sections.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={section.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition dark:border-slate-700 dark:bg-slate-800"
              >
                {/* Headers */}
                <button
                  onClick={() => toggleSection(index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {section.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      {section.descripcion}
                    </p>
                  </div>

                  <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-slate-700 dark:text-cyan-400">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Contenido */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-8 py-6 dark:border-slate-700">
                      <ul className="grid gap-3 md:grid-cols-2">
                        {section.subIndex.map((item) => (
                          <li
                            key={item}
                            className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 dark:hover:text-cyan-400"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}