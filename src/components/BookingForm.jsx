import { useState } from 'react'

const services = [
  { value: 'Suporte Remoto', label: 'Suporte Remoto' },
  { value: 'Remoção de Vírus', label: 'Remoção de Vírus' },
  { value: 'Instalação/Configuração', label: 'Instalação/Configuração' },
  { value: 'Consultoria', label: 'Consultoria' },
]

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: 'Suporte Remoto',
    issue_description: '',
    preferred_datetime: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)
    try {
      const res = await fetch(`${backend}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Falha ao enviar. Tente novamente.')
      const data = await res.json()
      setSuccess(
        'Agendamento recebido! Em breve enviaremos a confirmação por email.'
      )
      setForm({
        name: '',
        email: '',
        phone: '',
        service_type: 'Suporte Remoto',
        issue_description: '',
        preferred_datetime: '',
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="agendar" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Agende seu atendimento
        </h2>
        <p className="text-gray-600 mb-6">
          Preencha os dados e indique um horário preferencial. Entraremos em
          contato para confirmar a sessão.
        </p>
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-5">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Seu nome completo"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Telefone/WhatsApp</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="(11) 99999-9999"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Serviço</label>
            <select
              name="service_type"
              value={form.service_type}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {services.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Descrição do problema</label>
            <textarea
              name="issue_description"
              value={form.issue_description}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Conte resumidamente o que está acontecendo"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Data e hora preferenciais</label>
            <input
              type="datetime-local"
              name="preferred_datetime"
              value={form.preferred_datetime}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {success && (
            <div className="md:col-span-2 p-3 rounded-md bg-green-50 text-green-700 border border-green-200">
              {success}
            </div>
          )}
          {error && (
            <div className="md:col-span-2 p-3 rounded-md bg-red-50 text-red-700 border border-red-200">
              {error}
            </div>
          )}
          <div className="md:col-span-2">
            <button
              disabled={loading}
              className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-md transition-colors"
            >
              {loading ? 'Enviando...' : 'Enviar agendamento'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
