import testImg from "../assets/images/Test.png"; // cambia el nombre de la imagen si es diferente

export default function TestPersonalidad() {
  return (
    <section className="mt-24 text-center px-4">
      {/* Título */}
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-8 drop-shadow-lg">
        Test de Personalidad
      </h2>

      {/* Contenedor */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 via-yellow-950 to-black p-10 rounded-2xl border-4 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.6)]">
        {/* Texto */}
        <p className="text-gray-300 text-xl leading-relaxed mb-10">
          El <span className="text-yellow-300 font-semibold">Test de Personalidad</span> 
          me permite conocer mejor mis{" "}
          <span className="text-orange-300 font-semibold">fortalezas</span>,{" "}
          <span className="text-red-300 font-semibold">áreas de mejora</span> y
          mi forma de relacionarme con el mundo. Es una herramienta esencial
          para el <span className="text-cyan-300 font-semibold">autoconocimiento</span> 
          y el <span className="text-green-300 font-semibold">crecimiento personal</span>.
        </p>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={testImg}
            alt="Test de Personalidad"
            className="w-[120rem] md:w-[100rem] rounded-xl border-2 border-yellow-400 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
