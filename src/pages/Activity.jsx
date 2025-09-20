import actividadImg from "../assets/images/1.jpg";

export default function Activity() {
  return (
    <section className="mt-24 text-center px-4">
      {/* Título */}
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8 drop-shadow-lg">
        Actividad
      </h2>

      {/* Contenedor */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 via-purple-950 to-black p-10 rounded-2xl border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)]">
        {/* Texto */}
        <p className="text-gray-300 text-xl leading-relaxed mb-10">
          En esta sección podrás ver la{" "}
          <span className="text-purple-300 font-semibold">actividades</span> que
          son positivas y negativas.{" "}
          <span className="text-cyan-300 font-semibold">Emprendimiento</span>.
        </p>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={actividadImg}
            alt="Actividad realizada en el curso de Emprendimiento"
            className="w-[120rem] md:w-[100rem] rounded-xl border-2 border-purple-400 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
