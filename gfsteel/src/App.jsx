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
    </div>
  )
}
