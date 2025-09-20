export default function HappyStartupCanvas() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0a1930] to-[#020617] text-white flex flex-col items-center justify-center px-6 py-16">
      <h2 className="text-4xl font-bold text-pink-400 mb-20 text-center">
        Happy Startup Canvas
      </h2>

      <div className="flex flex-col items-center space-y-12 w-full max-w-6xl">
        {/* Nivel 1 - punta */}
        <div className="w-full flex justify-center">
          <div className="bg-pink-500/40 border border-pink-400 rounded-lg shadow-lg w-2/5 text-center p-8">
            <h3 className="text-2xl font-bold text-pink-300 mb-4">
              ¿Por qué hacemos lo que hacemos? <br /> ¿Qué cambio queremos ver en el mundo?
            </h3>
            <p className="text-lg text-gray-200">
              Crear un entorno donde la innovación y el emprendimiento sean accesibles para todos.
            </p>
          </div>
        </div>

        {/* Nivel 2 */}
        <div className="w-full flex justify-center gap-16">
          <div className="bg-blue-500/40 border border-blue-400 rounded-lg shadow-lg w-1/3 text-center p-8">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">
              ¿En qué creemos? <br /> ¿Qué valores se mantienen a pesar de las circunstancias?
            </h3>
            <p className="text-lg text-gray-200">
              En la creatividad, la resiliencia y la colaboración constante.
            </p>
          </div>

          <div className="bg-yellow-500/40 border border-yellow-400 rounded-lg shadow-lg w-1/3 text-center p-8">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              ¿Qué historia queremos que se cuente de nosotros?
            </h3>
            <p className="text-lg text-gray-200">
              Que somos el que transforma ideas en realidades valiosas.
            </p>
          </div>
        </div>

        {/* Nivel 3 */}
        <div className="w-full flex justify-center gap-16">
          <div className="bg-purple-500/40 border border-purple-400 rounded-lg shadow-lg w-2/5 text-center p-8">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">
              ¿Qué necesidades buscan resolver las personas? <br /> ¿Qué le hace falta al mundo?
            </h3>
            <p className="text-lg text-gray-200">
              La necesidad de innovar, adaptarse y crecer en un mercado competitivo.
            </p>
          </div>

          <div className="bg-red-500/40 border border-red-400 rounded-lg shadow-lg w-2/5 text-center p-8">
            <h3 className="text-2xl font-bold text-red-300 mb-4">
              ¿Qué solución le podemos dar a esos problemas?
            </h3>
            <p className="text-lg text-gray-200">
              Proyectos prácticos que generen impacto y nuevas oportunidades.
            </p>
          </div>
        </div>

        {/* Nivel 4 - base */}
        <div className="w-full flex justify-center gap-16">
          <div className="bg-green-500/40 border border-green-400 rounded-lg shadow-lg w-1/2 text-center p-8">
            <h3 className="text-2xl font-bold text-green-300 mb-4">
              ¿Quiénes son esos clientes que más valoran lo que hacemos?
            </h3>
            <p className="text-lg text-gray-200">
              Los emprendedores como forma de una expansión comercial.
            </p>
          </div>

          <div className="bg-emerald-500/40 border border-emerald-400 rounded-lg shadow-lg w-1/2 text-center p-8">
            <h3 className="text-2xl font-bold text-emerald-300 mb-4">
              ¿Cómo mejoramos la vida de las personas? <br /> ¿Qué nos hace indispensables?
            </h3>
            <p className="text-lg text-gray-200">
              Cumpliendo sus sueños y manteniendo la esperanza de progresar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

