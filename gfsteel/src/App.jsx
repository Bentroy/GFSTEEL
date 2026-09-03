import { MessageCircle } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Products from './components/Products'
import About from './components/About'
import WhyUs from './components/WhyUs'
import WhoWeServe from './components/WhoWeServe'
import HowToOrder from './components/HowToOrder'
import CtaBanner from './components/CtaBanner'
import QuoteForm from './components/QuoteForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { whatsappHref } from './data'

export default function App() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Products />
        <About />
        <WhyUs />
        <WhoWeServe />
        <HowToOrder />
        <CtaBanner />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with G.F Steel Technology on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ember-600 text-white shadow-xl transition-transform hover:scale-105"
      >
        <MessageCircle size={25} />
      </a>
    </div>
  )
}
