import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import BookingForm from './components/BookingForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <HowItWorks />
      <BookingForm />
      <footer className="border-t">
        <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Assistência Tech. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

export default App
