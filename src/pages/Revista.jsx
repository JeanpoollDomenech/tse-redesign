import {
  BookOpen,
  FileText,
  Download,
  Calendar,
  User,
} from "lucide-react";

import { useState } from "react";

const revistas = [
  {
    titulo: "Democracia y Participación Ciudadana",
    autor: "María Fernández",
    fecha: "Mayo 2026",
  },
  {
    titulo: "Transparencia Electoral en América Latina",
    autor: "Carlos Jiménez",
    fecha: "Abril 2026",
  },
  {
    titulo: "Derecho Público y Procesos Electorales",
    autor: "Andrea Morales",
    fecha: "Marzo 2026",
  },
  {
    titulo: "Tecnología y Seguridad Electoral",
    autor: "Luis Vargas",
    fecha: "Febrero 2026",
  },
];

export default function Revista() {
    const [showToast, setShowToast] = useState(false);

    const handleDownload = () => {
    setShowToast(true);

    setTimeout(() => {
        setShowToast(false);
    }, 3000);
    };
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900 py-14 px-6 transition-colors">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">

          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <BookOpen size={34} className="text-indigo-700 dark:text-indigo-400" />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
                Revista de Derecho Electoral
              </h1>

              <p className="text-indigo-700 dark:text-indigo-400 font-medium mt-2">
                Publicación académica especializada
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
            Espacio académico dedicado al análisis de temas electorales,
            democracia, derecho público y participación ciudadana,
            inspirado en las publicaciones oficiales del Tribunal Supremo
            de Elecciones.
          </p>

        </div>

        {/* Destacado */}
        <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-3xl p-10 text-white mb-14 shadow-2xl">

          <div className="max-w-3xl">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
              Edición Destacada
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
              Democracia Digital y Procesos Electorales Modernos
            </h2>

            <p className="text-indigo-100 text-lg leading-relaxed mb-8">
              Análisis sobre el impacto de las nuevas tecnologías en los
              sistemas electorales contemporáneos y los desafíos jurídicos
              asociados a la transformación digital.
            </p>

            <button onClick={handleDownload}
            className="inline-flex items-center gap-3 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
            >
            <Download size={18} />
            Descargar edición
            </button>
          </div>

        </div>

        {/* Publicaciones */}
        <div className="mb-10">

          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-indigo-700 dark:text-indigo-400" />

            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              Publicaciones Recientes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-7">

            {revistas.map((revista, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl transition-all p-7 border border-slate-200 dark:border-slate-700 hover:-translate-y-1"
              >

                <div className="flex items-start justify-between gap-4 mb-5">

                  <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <BookOpen
                      size={28}
                      className="text-indigo-700 dark:text-indigo-400"
                    />
                  </div>

                  <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm px-3 py-1 rounded-full">
                    Revista Académica
                  </span>

                </div>

                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 leading-snug">
                  {revista.titulo}
                </h3>

                <div className="flex flex-col gap-3 text-slate-600 dark:text-slate-300 mb-7">

                  <div className="flex items-center gap-3">
                    <User size={18} />
                    {revista.autor}
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar size={18} />
                    {revista.fecha}
                  </div>

                </div>

                <button onClick={handleDownload}
                className="inline-flex items-center gap-3 bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-5 py-3 rounded-xl transition-colors"
                >
                <Download size={18} />
                Descargar PDF
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

      {showToast && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-pulse">
            Documentos en proceso de carga
        </div>
        )}

    </main>
  );
}
