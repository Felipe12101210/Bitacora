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
    <div>
      <h1 className="text-4xl font-bold text-center text-cyan-300 mb-10">Cronología</h1>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-400 -translate-x-1/2"></div>
        {timeline.map((item, i) => (
          <div
            key={i}
            id={`event-${i}`}
            className={`relative w-1/2 p-6 ${i % 2 === 0 ? "left-0 text-right" : "left-1/2"} ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700`}
            style={{ position: "relative" }}
          >
            <div className="bg-gray-800 bg-opacity-60 border border-gray-600 rounded-xl shadow-lg p-4">
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
