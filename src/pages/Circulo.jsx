import circuloImg from "../assets/images/circulo.png";

export default function Circulo() {
  return (
    <section className="mt-24 text-center px-4">
      {/* Título */}
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 drop-shadow-lg">
        Círculo
      </h2>

      {/* Contenedor */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 via-indigo-950 to-black p-10 rounded-2xl border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]">
        {/* Texto */}
        <p className="text-gray-300 text-xl leading-relaxed mb-10">
          Este <span className="text-cyan-300 font-semibold">círculo</span>{" "}
          representa la unión de ideas, conocimientos y aprendizajes adquiridos
          en el proceso de <span className="text-purple-300 font-semibold">emprendimiento</span>, 
          simbolizando el crecimiento continuo y la conexión de todos los elementos.
        </p>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={circuloImg}
            alt="Círculo representando el proceso de emprendimiento"
            className="w-[120rem] md:w-[100rem] rounded-xl border-2 border-blue-400 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
