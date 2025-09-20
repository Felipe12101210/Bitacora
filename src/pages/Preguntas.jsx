import juego from "../assets/images/juego.png";
import experiencia from "../assets/images/experiencia-en-programacion-con-una-persona-que-trabaja-con-codigos-en-la-computadora.jpg";
import conocimientos from "../assets/images/11602236_21004063.jpg";
import investigacion from "../assets/images/investigacion.jpg";
import familia from "../assets/images/familia.jpg";
import economia from "../assets/images/economia.jpg";

export default function Preguntas() {
  const preguntas = [
    {
      img: juego,
      titulo: "¿Qué cosas me encanta hacer?",
      desc: "Las cosas que más me encanta hacer es jugar Clash of Clans, ver videos, programar y mirar nuevas tecnologías.",
      color: "from-cyan-900 to-blue-900 border-cyan-500",
    },
    {
      img: experiencia,
      titulo: "¿En qué soy genial?",
      desc: "Siento que soy genial en todo lo que tiene que ver con la tecnología, siempre he sentido que tengo una facilidad con esto.",
      color: "from-green-900 to-emerald-900 border-green-500",
    },
    {
      img: conocimientos,
      titulo: "¿Qué conocimientos tengo?",
      desc: "Tengo conocimientos en tecnologías de software y hardware en general.",
      color: "from-blue-900 to-indigo-900 border-blue-500",
    },
    {
      img: investigacion,
      titulo: "¿Qué herramientas tengo a la mano?",
      desc: "Como herramientas tengo mi ingenio y ganas de investigar ya que a lo que me quiero dedicar hay que estar investigando día a día, lo nuevo o renovaciones de todo.",
      color: "from-cyan-900 to-teal-900 border-teal-500",
    },
    {
      img: familia,
      titulo: "¿Qué personas conozco que me pueden ayudar?",
      desc: "Las personas que me podrían ayudar son mi familia en todo el contexto.",
      color: "from-green-900 to-lime-900 border-lime-500",
    },
    {
      img: economia,
      titulo: "¿Qué podría hacer con estos recursos?",
      desc: "Podría transformarlos para una evolución en el entorno tecnológico y económico.",
      color: "from-indigo-900 to-purple-900 border-purple-500",
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-4xl font-bold text-center text-cyan-300 mb-10">
        Preguntas Clave
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {preguntas.map((p, i) => (
          <div
            key={i}
            className={`bg-gradient-to-r ${p.color} p-6 rounded-xl border shadow-xl hover:scale-105 transition-transform`}
          >
            <img
              src={p.img}
              alt={p.titulo}
              className="rounded-lg mb-4 w-full h-70 object-cover"
            />
            <h3 className="text-xl font-semibold text-cyan-200 mb-2">
              {p.titulo}
            </h3>
            <p className="text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
