import Desinger from "../assets/images/Designer.png";

export default function BiomimesisProductoCompleto() {
  const productos = [
    {
      titulo: "Filtro Loto",
      descripcion:
        "Filtro auto-limpiante inspirado en la flor de loto, que gracias a su estructura microscópica repele el agua y la suciedad. Este filtro puede usarse en sistemas de agua potable o industriales, reduciendo el mantenimiento y mejorando la eficiencia a largo plazo.",
      inspiracion:
        "Inspirado en la capacidad de la flor de loto para mantenerse limpia en ambientes húmedos, gracias a su superficie con nanoestructuras que repelen líquidos y partículas.",
      imagen: Desinger, // ✅ Ahora sí correctamente
      color: "from-green-700 to-green-900 border-green-500",
    },
    // Puedes duplicar este objeto para más productos
  ];

  return (
    <section className="mt-24 px-6">
      {/* Título principal */}
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 bg-clip-text text-transparent mb-16 drop-shadow-lg">
        Biomimesis en productos
      </h2>

      {/* Lista de productos */}
      <div className="grid md:grid-cols-1 gap-16 max-w-6xl mx-auto">
        {productos.map((p, i) => (
          <div
            key={i}
            className={`bg-gradient-to-r ${p.color} p-8 rounded-3xl border shadow-[0_0_25px_rgba(0,255,100,0.3)] transition-transform hover:scale-105 flex flex-col md:flex-row items-center gap-8`}
          >
            {/* Imagen del producto */}
            <img
              src={p.imagen}
              alt={p.titulo}
              className="w-full md:w-1/3 rounded-xl shadow-lg"
            />

            {/* Información del producto */}
            <div className="text-gray-100 md:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-lime-100">
                {p.titulo}
              </h3>
              <p className="mb-4 text-lg leading-relaxed">{p.descripcion}</p>
              <p className="italic text-green-200">
                <strong>Inspiración biomimética:</strong> {p.inspiracion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
