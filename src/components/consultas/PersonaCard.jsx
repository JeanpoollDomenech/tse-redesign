import { User, Calendar, MapPin, Heart, Users } from "lucide-react";
import { calcularEdad, formatearFecha } from "../../data/personasSimuladas";

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 dark:border-slate-700 last:border-0">
      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={15} className="text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <p className="text-xs text-gray-400 dark:text-slate-500 font-medium uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-800 dark:text-white mt-0.5">{value}</p>
      </div>
    </div>
  );
}

export default function PersonaCard({ persona, tipo = "nacional" }) {
  const nombreCompleto = `${persona.nombre} ${persona.apellido1}${persona.apellido2 ? " " + persona.apellido2 : ""}`;
  const edad = calcularEdad(persona.fechaNacimiento);
  const fechaFormateada = formatearFecha(persona.fechaNacimiento);
  const idLabel = tipo === "nacional" ? "Cédula" : "DIMEX";
  const idValue = tipo === "nacional" ? persona.cedula : persona.dimex;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1E3A5F] to-[#1A56DB] px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center flex-shrink-0">
            <User size={28} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">{nombreCompleto}</h3>
            <p className="text-blue-200 text-sm mt-0.5">
              {idLabel}: <span className="font-semibold text-white">{idValue}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-2">
        <InfoRow
          icon={Calendar}
          label="Fecha de nacimiento"
          value={`${fechaFormateada} (${edad} años)`}
        />
        <InfoRow
          icon={User}
          label="Sexo"
          value={persona.sexo}
        />
        <InfoRow
          icon={Heart}
          label="Estado civil"
          value={persona.estadoCivil}
        />
        <InfoRow
          icon={MapPin}
          label="Cantón de residencia"
          value={`${persona.canton}, ${persona.provincia}`}
        />
        <InfoRow
          icon={Users}
          label="Nombre del padre"
          value={persona.nombrePadre || "No registrado"}
        />
        <InfoRow
          icon={Users}
          label="Nombre de la madre"
          value={persona.nombreMadre || "No registrado"}
        />
        <InfoRow
          icon={User}
          label="Nacionalidad"
          value={persona.nacionalidad}
        />
      </div>

      {/* Footer disclaimer */}
      <div className="px-6 py-3 bg-blue-50 dark:bg-blue-900/20 border-t border-blue-100 dark:border-blue-900/40">
        <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
          ⚠️ Esta información es de carácter oficial. Su uso indebido puede constituir una infracción a la Ley de Protección de Datos.
        </p>
      </div>
    </div>
  );
}
