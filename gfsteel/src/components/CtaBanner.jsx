import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { images, phone, phoneHref, whatsappHref } from '../data'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-steel-950 py-24">
      <img
        src={images.sheets}
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-ember-400 mb-3">Let's talk materials</p>
        <h2 className="font-display font-black uppercase text-4xl sm:text-6xl text-white max-w-2xl leading-[0.95]">
          Looking for steel or building materials in Lagos?
        </h2>
        <p className="mt-5 font-body text-white/70 max-w-lg text-lg">
          Tell G.F Steel Technology what you need and speak directly with
          the team.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-ember-600 hover:bg-ember-500 text-white px-7 py-3.5 font-body font-semibold text-sm uppercase tracking-wide transition-colors"
          >
            Request a Quote
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 border border-white/70 hover:border-white text-white px-7 py-3.5 font-body font-semibold text-sm uppercase tracking-wide transition-colors"
          >
            Call {phone}
            <Phone size={15} />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/70 hover:border-white text-white px-7 py-3.5 font-body font-semibold text-sm uppercase tracking-wide transition-colors"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
