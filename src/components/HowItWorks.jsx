import { CalendarCheck2, MousePointerClick, Video, Wrench } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: MousePointerClick,
      title: 'Solicite o atendimento',
      desc: 'Descreva o problema e indique um horário preferencial.'
    },
    {
      icon: CalendarCheck2,
      title: 'Confirmação',
      desc: 'Você recebe a confirmação por email com detalhes da sessão.'
    },
    {
      icon: Video,
      title: 'Conexão segura',
      desc: 'Entramos na chamada e acessamos remotamente seu computador com sua permissão.'
    },
    {
      icon: Wrench,
      title: 'Resolução',
      desc: 'Executamos diagnósticos e correções até resolver.'
    }
  ]

  return (
    <section id="como-funciona" className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Como funciona</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white rounded-lg p-5 border hover:shadow transition">
              <div className="p-2 rounded-md bg-blue-600 text-white w-fit mb-3">
                <s.icon size={20} />
              </div>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
