import { Monitor, Phone, ShieldCheck } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-10 border-b">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-blue-600 text-white">
            <Monitor size={20} />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-gray-800">Assistência Tech</p>
            <p className="text-xs text-gray-500">Suporte remoto em minutos</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-600"/> Confiável</div>
          <div className="flex items-center gap-2"><Phone size={16} className="text-blue-600"/> Atend. Rápido</div>
        </div>
        <a href="#agendar" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Agendar</a>
      </div>
    </header>
  )
}
