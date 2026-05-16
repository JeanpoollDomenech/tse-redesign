import {
  Users,
  BarChart3,
  BookOpen,
  FileText,
  Download,
  Award,
  Globe,
} from "lucide-react";

import { useState } from "react";

const recursos = [
  {
    titulo: "Participación de las Mujeres en Elecciones Nacionales",
    categoria: "Investigación",
  },
  {
    titulo: "Guía de Liderazgo Político Femenino",
    categoria: "Recurso Educativo",
  },
  {
    titulo: "Estadísticas de Representación Política",
    categoria: "Datos Abiertos",
  },
  {
    titulo: "Violencia Política contra las Mujeres",
    categoria: "Informe",
  },
];

const stats = [
  {
    valor: "52%",
    texto: "Participación femenina en procesos electorales",
  },
  {
    valor: "48%",
    texto: "Representación política en instituciones públicas",
  },
  {
    valor: "120+",
    texto: "Recursos académicos y educativos disponibles",
  },
];

export default function ParticipacionMujeres() {
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

            <div className="w-16 h-16 rounded-2xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
              <Users size={34} className="text-pink-700 dark:text-pink-400" />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
                Participación Política de las Mujeres
              </h1>

              <p className="text-pink-700 dark:text-pink-400 font-medium mt-2">
                Inclusión, liderazgo y representación política
              </p>
            </div>

          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
            Espacio dedicado a promover la participación política femenina
            mediante recursos educativos, estadísticas, investigaciones y
            materiales relacionados con igualdad y representación política
            en Costa Rica.
          </p>

        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-pink-600 to-pink-800 rounded-3xl p-10 text-white mb-14 shadow-2xl">

          <div className="max-w-3xl">

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
              Participación e Igualdad
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
              Fortaleciendo la representación política femenina
            </h2>

            <p className="text-pink-100 text-lg leading-relaxed mb-8">
              Acceda a investigaciones, estadísticas y herramientas
              relacionadas con la participación política de las mujeres y
              el fortalecimiento democrático.
            </p>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 bg-white text-pink-700 font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
            >
              <Download size={18} />
              Descargar informe
            </button>

          </div>

        </div>

        {/* Estadísticas */}
        <div className="grid md:grid-cols-3 gap-7 mb-14">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-8 border border-slate-200 dark:border-slate-700"
            >

              <div className="w-14 h-14 rounded-2xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-5">
                <BarChart3
                  size={28}
                  className="text-pink-700 dark:text-pink-400"
                />
              </div>

              <h3 className="text-4xl font-bold text-slate-800 dark:text-white mb-3">
                {stat.valor}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {stat.texto}
              </p>

            </div>
          ))}

        </div>

        {/* Recursos */}
        <div>

          <div className="flex items-center gap-3 mb-8">

            <BookOpen className="text-pink-700 dark:text-pink-400" />

            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              Recursos y Publicaciones
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-7">

            {recursos.map((recurso, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl transition-all p-7 border border-slate-200 dark:border-slate-700 hover:-translate-y-1"
              >

                <div className="flex items-start justify-between gap-4 mb-5">

                  <div className="w-14 h-14 rounded-2xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0">
                    <FileText
                      size={28}
                      className="text-pink-700 dark:text-pink-400"
                    />
                  </div>

                  <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 text-sm px-3 py-1 rounded-full">
                    {recurso.categoria}
                  </span>

                </div>

                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 leading-snug">
                  {recurso.titulo}
                </h3>

                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300 mb-7">

                  <div className="flex items-center gap-2">
                    <Award size={18} />
                    Igualdad Política
                  </div>

                  <div className="flex items-center gap-2">
                    <Globe size={18} />
                    Costa Rica
                  </div>

                </div>

                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-3 bg-pink-700 hover:bg-pink-800 text-white font-bold px-5 py-3 rounded-xl transition-colors"
                >
                  <Download size={18} />
                  Descargar recurso
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl z-50">
          Documentos en proceso de carga
        </div>
      )}

    </main>
  );
}
