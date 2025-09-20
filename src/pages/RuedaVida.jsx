import ruedaImg from "../assets/images/Rueda.png";

export default function RuedaVida() {
  return (
    <section className="mt-24 text-center px-4">
      {/* Título */}
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8 drop-shadow-lg">
        Rueda de la Vida
      </h2>

      {/* Contenedor */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 via-fuchsia-950 to-black p-10 rounded-2xl border-4 border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.6)]">
        {/* Texto */}
        <p className="text-gray-300 text-xl leading-relaxed mb-10">
          La <span className="text-pink-300 font-semibold">Rueda de la Vida </span> 
          es una herramienta que me ayuda a {" "}
          <span className="text-cyan-300 font-semibold">evaluar</span> y{" "}
          <span className="text-purple-300 font-semibold">equilibrar</span> las
          diferentes áreas de mi vida, como la{" "}
          <span className="text-green-300 font-semibold">salud</span>, las{" "}
          <span className="text-yellow-300 font-semibold">relaciones</span>, el{" "}
          <span className="text-blue-300 font-semibold">trabajo</span> y el{" "}
          <span className="text-indigo-300 font-semibold">crecimiento personal</span>.
        </p>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={ruedaImg}
            alt="Rueda de la Vida"
            className="w-[120rem] md:w-[100rem] rounded-xl border-2 border-pink-400 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
