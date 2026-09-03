import { ArrowRight } from 'lucide-react'
import { images } from '../data'

export default function About() {
  return (
    <section id="about" className="bg-steel-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img
            src={images.structural}
            alt="Structural steel beams and reinforcing bars at a materials yard"
            className="w-full aspect-[4/3] object-cover"
          />
          <p className="mt-3 font-body text-xs text-steel-500">Orile Iganmu &middot; Lagos</p>
        </div>

        <div>
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-ember-400 mb-3">About us</p>
          <h2 className="font-display font-black uppercase text-4xl sm:text-5xl text-steel-100 leading-[0.95]">
            Your local partner for iron, steel &amp; building materials
          </h2>
          <p className="mt-6 font-body text-steel-400 max-w-lg">
            G.F Steel Technology is a Lagos-based dealer specializing in
            various iron and building materials. The company serves customers
            as an industrial supplier and general contractor, providing
            materials for construction and related project requirements.
          </p>

          <address className="mt-8 not-italic font-body text-steel-300 leading-relaxed">
            Shop 250, Line 2, Section C
            <br />
            Ifesowapo Iron Market
            <br />
            Orile Iganmu, Lagos
          </address>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 border border-steel-500 hover:border-steel-300 text-steel-100 px-7 py-3.5 font-body font-semibold text-sm uppercase tracking-wide transition-colors"
          >
            Contact G.F Steel Technology
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}
