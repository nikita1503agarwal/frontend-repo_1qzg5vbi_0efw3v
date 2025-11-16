export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
      <div className="max-w-5xl mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Agende suporte técnico remoto de forma simples
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Diagnóstico, remoção de vírus, otimizações e configurações. Atendimento humano por especialistas.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#agendar" className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">Agendar agora</a>
              <a href="#como-funciona" className="px-5 py-3 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">Como funciona</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-200 to-indigo-200 shadow-inner" />
          </div>
        </div>
      </div>
    </section>
  )
}
