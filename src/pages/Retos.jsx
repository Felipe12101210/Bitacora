import { useState, useMemo } from "react";
import { retos } from "../data/retos";

// Cargamos todos los archivos multimedia de la carpeta
const mediaFiles = import.meta.glob("../assets/images/Retos/*", { eager: true });

// Creamos un mapa de nombre => ruta
const mediaMap = {};
for (const path in mediaFiles) {
  const name = path.split("/").pop();
  mediaMap[name] = mediaFiles[path].default;
}

// Función auxiliar para detectar si un archivo es video
function isVideo(fileName) {
  return /\.(mp4|webm|ogg)$/i.test(fileName);
}

export default function Retos() {
  return (
    <div className="px-6 mt-24">
      <h1 className="text-4xl font-bold text-center text-pink-300 mb-10">
        Retos Cumplidos
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {retos.map((reto) => (
          <RetoCard key={reto.id} reto={reto} />
        ))}
      </div>
    </div>
  );
}

function RetoCard({ reto }) {
  const [index, setIndex] = useState(0);

  // useMemo para optimizar el arreglo de medios
  const media = useMemo(() => {
    return reto.imgs
      .map((fileName) => {
        if (!fileName) return null;
        const url = mediaMap[fileName];
        if (!url) {
          console.warn(`⚠️ Archivo no encontrado: ${fileName}`);
          return null;
        }
        return { url, isVideo: isVideo(fileName) };
      })
      .filter(Boolean);
  }, [reto.imgs]);

  const safeIndex = index >= media.length ? 0 : index;

  const next = () => setIndex((prev) => (prev + 1) % media.length);
  const prev = () => setIndex((prev) => (prev - 1 + media.length) % media.length);

  return (
    <div className="bg-gray-800 bg-opacity-60 rounded-2xl border border-pink-500 shadow-xl p-6">
      <div className="relative overflow-hidden rounded-xl mb-4">
        {media.length === 0 ? (
          <div className="bg-gray-700 h-52 flex items-center justify-center text-white text-sm italic rounded-xl">
            Sin medios disponibles
          </div>
        ) : (
          <>
            {/* Mostrar imagen o video según el tipo */}
            {media[safeIndex].isVideo ? (
              <video
                src={media[safeIndex].url}
                controls
                className="w-full h-52 object-cover rounded-xl border border-pink-400/40 shadow-md"
              />
            ) : (
              <img
                src={media[safeIndex].url}
                alt={reto.titulo}
                className="w-full h-52 object-cover rounded-xl border border-pink-400/40 shadow-md transition-transform duration-500"
              />
            )}

            {/* Botones de navegación */}
            {media.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                  aria-label="Medio anterior"
                  type="button"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                  aria-label="Medio siguiente"
                  type="button"
                >
                  ›
                </button>

                {/* Indicadores clickeables */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {media.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`w-3 h-3 rounded-full focus:outline-none ${
                        i === safeIndex ? "bg-pink-400" : "bg-gray-400"
                      }`}
                      aria-label={`Mostrar medio ${i + 1}`}
                      type="button"
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Texto del reto */}
      <h2 className="text-2xl font-semibold text-cyan-200">{reto.titulo}</h2>
      <p className="text-gray-300 mt-2">{reto.descripcion}</p>
    </div>
  );
}
