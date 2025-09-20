export default function ReflexionPolitica() {
  const preguntas = [
    {
      titulo: "¿Sirve en la actualidad adoptar una doctrina de derecha o izquierda?",
      respuesta:
        "Hoy en día, seguir una doctrina rígida de derecha o izquierda no siempre resuelve los problemas reales. La sociedad es dinámica y necesita soluciones flexibles, centradas en la innovación, la inclusión y la adaptación a los cambios globales.",
      color: "from-cyan-900 to-blue-900 border-cyan-500",
    },
    {
      titulo: "¿Qué podemos hacer nosotros para solucionar eso?",
      respuesta:
        "Podemos contribuir generando pensamiento crítico, fomentando el diálogo y trabajando en proyectos que trasciendan ideologías. La clave está en unir esfuerzos para mejorar la calidad de vida, apoyar la educación y promover la equidad.",
      color: "from-green-900 to-emerald-900 border-green-500",
    },
    {
        titulo: "¿Comó trasciende la dualidad?",
        respuesta:
            "Yo creo que la dualidad se trasciende cuando dejamos de ver todo como blanco o negro. O sea, no es solo “derecha o izquierda”, “bueno o malo”, sino entender que siempre hay matices. Si mezclamos lo mejor de cada lado y no nos cerramos a una sola idea, podemos encontrar soluciones más reales. Al final, se trata de aprender a escuchar, ser flexibles y buscar puntos en común en lugar de pelearnos por quién tiene la razón.",
        color: "from-purple-800 to-purple-900 border-purple-500",   
    },
    {
        titulo: "¿Como serán los estudiantes en 100 años?",
        respuesta:
          "los estudiantes no aprenderán solo con libros, sino conectando su mente a la tecnología, como si pudieran “descargar” conocimientos. Estudiarán en clases virtuales donde podrán viajar al espacio o vivir la historia como si estuvieran ahí. Cada uno aprenderá a su propio ritmo, con la ayuda de inteligencias artificiales que los entiendan y los guíen. Más que memorizar, se enfocarán en pensar, crear y entender mejor a los demás.",
        color: "from-pink-800 to-red-900 border-pink-500",
    }
  ];

  return (
    <section className="mt-24 px-6">
      {/* Título general */}
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-12 drop-shadow-lg">
        Reflexión Crítica
      </h2>

      {/* Grid de preguntas */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {preguntas.map((p, i) => (
          <div
            key={i}
            className={`bg-gradient-to-r ${p.color} p-8 rounded-2xl border shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:scale-105 transition-transform`}
          >
            <h3 className="text-2xl font-semibold text-cyan-200 mb-4">
              {p.titulo}
            </h3>
            <p className="text-gray-200 leading-relaxed">{p.respuesta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
