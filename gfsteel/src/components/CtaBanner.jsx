import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { phone, phoneHref, whatsappHref } from '../data'

export default function CtaBanner() {
  return (
    <section className="bg-ember-600 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/80 mb-2">Let's talk materials</p>
          <h2 className="font-display font-black uppercase text-4xl sm:text-5xl text-white max-w-xl leading-[0.95]">
            Looking for steel or building materials in Lagos?
          </h2>
          <p className="mt-3 font-body text-white/85 max-w-md">
            Tell G.F Steel Technology what you need and speak directly with
            the team.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-steel-950 hover:bg-steel-900 text-white px-7 py-3.5 font-body font-semibold text-sm uppercase tracking-wide transition-colors"
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
            WhatsApp Us
            <MessageCircle size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
