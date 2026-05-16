import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ConsultasCiviles from "./pages/ConsultasCiviles";
import Transparencia from "./pages/Transparencia";
import Revista from "./pages/Revista";
import ParticipacionMujeres from "./pages/ParticipacionMujeres";
import TSE from "./pages/TSE";
import Elections from "./pages/Elections";
import CivilRegistration from "./pages/CivilRegistration";

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/consultas-civiles" element={<ConsultasCiviles />} />
                <Route path="/transparencia" element={<Transparencia />} />
                <Route path="/revista" element={<Revista />} />
                <Route path="/participacion-mujeres" element={<ParticipacionMujeres />} />
                <Route path="/sobre-tse" element={<TSE />} />
                <Route path="/elecciones" element={<Elections />} />
                <Route path="/registro-civil" element={<CivilRegistration />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </LangProvider>
    </ThemeProvider>
  );
}
