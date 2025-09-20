import comillas from "../assets/images/comillas.png";

export default function Revelation() {
  const items = [
    {
      titulo: "¿Quién es emprendedor?",
      desc: "Un emprendedor es una persona que identifica oportunidades, crea proyectos o negocios innovadores y asume riesgos para generar valor y lograr un impacto positivo.",
    },
    {
      titulo: "¿Qué quiero que la gente recuerde de mí?",
      desc: "Quiero que la gente me recuerde como una persona amable, con grandes metas, generosa, carismática y serena, no solo por mis logros en el ámbito económico.",
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-4xl font-bold text-center text-cyan-300 mb-12">
        Reflexiones Personales
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-gray-900 to-blue-900 p-8 rounded-xl border border-cyan-700 shadow-lg hover:scale-105 transition-transform text-center"
          >
            {/* Imagen centrada y más grande */}
            <img
              src={comillas}
              alt="Comillas decorativas"
              className="w-16 mx-auto mb-6 opacity-80"
            />
            <h3 className="text-2xl font-semibold text-cyan-200 mb-4">
              {item.titulo}
            </h3>
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
