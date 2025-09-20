import { useState, useEffect } from "react";
import { timeline } from "../data/timeline";

export default function Timeline() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const checkScroll = () => {
      const newVisible = timeline.map((_, i) => {
        const el = document.getElementById(`event-${i}`);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
      });
      setVisible(newVisible);
    };
    window.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-cyan-300 mb-10">Cronología</h1>

      {/* Reflección positiva */}
      <div className="relative w-full p-10 mb-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-white mb-4">Reflexión positiva</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Uso de motivación para recordar cada momento y poder seguir dando el rendimiento máximo.
          </p>
        </div>
      </div>

      {/* Reflección negativa */}
      <div className="relative w-full p-10 mb-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-white mb-4">Reflexión negativa</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            No es algo negativo solo un incapie para poder saber el mal paso cometido o el momento de recuerdos felices sobre personas.
          </p>
        </div>
      </div>

      {/* Cronología de eventos */}
      <div className="relative max-w-3xl mx-auto mt-10">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-400 -translate-x-1/2"></div>
        {timeline.map((item, i) => (
          <div
            key={i}
            id={`event-${i}`}
            className={`relative w-1/2 p-6 ${i % 2 === 0 ? "left-0 text-right" : "left-1/2"} ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700`}
            style={{ position: "relative" }}
          >
            <div className="bg-gray-800 bg-opacity-60 border border-gray-600 rounded-xl shadow-lg p-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-cyan-200">{item.titulo}</h3>
              <p className="text-sm text-purple-300">{item.fecha}</p>
              <p className="text-gray-300 mt-2">{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
