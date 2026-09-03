import { images, phone, phoneHref } from '../data'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src={images.hero}
        alt="Steel pipes, beams and reinforcing rods in an industrial warehouse"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/70 to-steel-950/30" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pb-24 pt-40">
        <p className="font-body text-sm tracking-wide text-ember-400 mb-4">
          Iron &middot; Steel &middot; Building Materials
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-steel-100 max-w-3xl">
          Reliable steel &amp; building materials in Lagos
        </h1>
        <p className="mt-6 font-body text-lg text-steel-300 max-w-xl">
          G.F Steel Technology supplies iron, steel and building materials for
          construction, fabrication, engineering and industrial needs.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#quote"
            className="inline-flex items-center rounded-sm bg-ember-600 hover:bg-ember-500 text-white px-7 py-3.5 font-body font-medium transition-colors"
          >
            Request a Quote
          </a>
          <a
            href={phoneHref}
            className="inline-flex items-center rounded-sm border border-steel-500 hover:border-steel-300 text-steel-100 px-7 py-3.5 font-body font-medium transition-colors"
          >
            Call {phone}
          </a>
        </div>

        <p className="mt-10 font-body text-sm text-steel-400">
          Based at Ifesowapo Iron Market, Orile Iganmu, Lagos
        </p>
      </div>
    </section>
  )
}
