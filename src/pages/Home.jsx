import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Preguntas from "./Preguntas";
import Revelation from "./Revelation";
import Ikigai from "./Ikigai";
import Activity from "./Activity";
import Circulo from "./Circulo";
import RuedaVida from "./RuedaVida";
import TestPersonalidad from "./Testpersonalidad";
import ReflexionPolitica from "./ReflexionPolitica";
import BiomimesisProductoCompleto from "./BiomimesisProductoCompleto";
import MapaSueno from "./MapaSueño";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-16 w-full">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Mi Bitácora
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Bienvenido 
        </p>
      </motion.div>

      {/* Secciones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl">
        {/* Timeline */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 bg-opacity-50 p-6 rounded-2xl border border-cyan-500 shadow-xl text-center">
          <img src="/src/assets/images/Timeline.png" alt="Timeline" className="mx-auto w-140 h-80 object-cover"/>
          <h2 className="text-2xl font-semibold text-cyan-300 mt-4">Mi Timeline</h2>
          <p className="text-gray-400 mt-2">Explora mi línea de tiempo personal.</p>
          <Link to="/timeline" className="mt-4 inline-block bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-700">Ver Timeline</Link>
        </motion.div>

        {/* Happy Canvas */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 bg-opacity-50 p-6 rounded-2xl border border-purple-500 shadow-xl text-center">
          <img src="/src/assets/images/Happy-startup.png" alt="Happy Startup" className="mx-auto w-140 h-80 object-cover"/>
          <h2 className="text-2xl font-semibold text-purple-300 mt-4">Happy Startup Canvas</h2>
          <p className="text-gray-400 mt-2">Un canvas de mis ideas y sueños.</p>
          <Link to="/happy-canvas" className="mt-4 inline-block bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">Ver Canvas</Link>
        </motion.div>

        {/* Retos */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 bg-opacity-50 p-6 rounded-2xl border border-pink-500 shadow-xl text-center">
          <img src="/src/assets/images/retos.png" alt="Retos" className="mx-auto w-80 h-80 object-cover"/>
          <h2 className="text-2xl font-semibold text-pink-300 mt-4">Retos</h2>
          <p className="text-gray-400 mt-2">Mis desafíos y aprendizajes.</p>
          <Link to="/retos" className="mt-4 inline-block bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700">Ver Retos</Link>
        </motion.div>
      </div>

        <Preguntas />
        <Revelation />
        <Ikigai />
        <Activity />
        <Circulo />
        <RuedaVida />
        <TestPersonalidad />
        <ReflexionPolitica />
        <BiomimesisProductoCompleto />
        <MapaSueno />
    </div>
  );
}
