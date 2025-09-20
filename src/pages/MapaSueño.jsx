import suenoImg from "../assets/images/sueños.png"; // Asegúrate de que esté en esa ruta

export default function MapaSueno() {
  return (
    <section className="mt-24 text-center px-4">
      {/* Título */}
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent mb-8 drop-shadow-lg">
        Mapa de Sueño
      </h2>

      {/* Contenedor principal */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 via-purple-950 to-black p-10 rounded-2xl border-4 border-pink-500 shadow-[0_0_30px_rgba(255,0,150,0.4)]">
        {/* Descripción */}
        <p className="text-gray-300 text-xl leading-relaxed mb-10">
          El <span className="text-pink-300 font-semibold">Mapa de Sueño</span> es una representación visual de nuestras metas, deseos y aspiraciones más profundas. Al plasmar nuestros sueños, les damos forma, dirección e intención. Es una herramienta poderosa para enfocarnos en lo que realmente queremos lograr en la vida.
        </p>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={suenoImg}
            alt="Mapa de Sueño"
            className="w-full max-w-3xl rounded-xl border-2 border-pink-400 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
