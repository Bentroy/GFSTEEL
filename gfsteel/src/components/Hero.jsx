import { ArrowRight, ChevronDown, Phone } from 'lucide-react'
import { images, phone, phoneHref } from '../data'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src={images.hero}
        alt="Steel pipes, beams and reinforcing rods in an industrial warehouse"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/70 to-steel-950/40" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pb-24 pt-40">
        <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-ember-400 mb-5 flex items-center gap-2">
          <span className="h-px w-8 bg-ember-400" />
          Iron &middot; Steel &middot; Building Materials
        </p>
        <h1 className="font-display font-black uppercase text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.92] text-steel-100 max-w-4xl">
          Reliable steel &amp; building materials in Lagos
        </h1>
        <p className="mt-6 font-body text-lg text-steel-300 max-w-xl">
          G.F Steel Technology supplies iron, steel and building materials for
          construction, fabrication, engineering and industrial needs.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-ember-600 hover:bg-ember-500 text-white px-7 py-3.5 font-body font-semibold text-sm uppercase tracking-wide transition-colors"
          >
            Request a Quote
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 border border-steel-500 hover:border-steel-300 text-steel-100 px-7 py-3.5 font-body font-semibold text-sm uppercase tracking-wide transition-colors"
          >
            <Phone size={15} />
            Call {phone}
          </a>
        </div>

        <p className="mt-10 font-body text-sm text-steel-400 flex items-center gap-2">
          <span className="text-ember-500">&#9679;</span>
          Based at Ifesowapo Iron Market, Orile Iganmu, Lagos
        </p>

        <a
          href="#products"
          className="mt-10 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wide text-steel-300 hover:text-steel-100"
        >
          Explore materials
          <ChevronDown size={14} />
        </a>
      </div>
    </section>
  )
}
