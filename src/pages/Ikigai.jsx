import ikigaiImg from "../assets/images/ikigai.png";

export default function Ikigai() {
  return (
    <section className="mt-24 text-center px-4">
      {/* Título */}
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-8 drop-shadow-lg">
        Ikigai
      </h2>

      {/* Contenedor */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 via-blue-950 to-black p-10 rounded-2xl border-4 border-cyan-500 shadow-[0_0_30px_rgba(0,255,255,0.5)]">
        {/* Texto */}
        <p className="text-gray-300 text-xl leading-relaxed mb-10">
          Mi <span className="text-cyan-300 font-semibold">Ikigai</span> es la
          intersección de lo que amo, lo que soy bueno, lo que el mundo necesita
          y lo que puedo ser remunerado. Es mi propósito y motivación en la vida.
        </p>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={ikigaiImg}
            alt="Diagrama Ikigai"
            className="w-[120rem] md:w-[100rem] rounded-xl border-2 border-cyan-400 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
