import { MapPin, Phone, MessageCircle } from 'lucide-react'
import { address, mapEmbed, phone, phoneHref, whatsappHref } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-ember-600 mb-3">Contact &amp; location</p>
        <h2 className="font-display font-black uppercase text-4xl sm:text-5xl text-steel-950 max-w-2xl leading-[0.95]">
          Visit or contact us
        </h2>
        <p className="mt-4 font-body text-steel-600 max-w-xl">
          For enquiries, pricing and material availability, speak directly
          with G.F Steel Technology.
        </p>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <div className="border border-steel-950/10 bg-white p-8">
            <h3 className="font-display font-bold uppercase text-xl text-steel-950">G.F Steel Technology</h3>
            <address className="mt-4 not-italic font-body text-steel-600 leading-relaxed flex gap-2">
              <MapPin size={16} className="text-ember-600 shrink-0 mt-0.5" />
              <span>
                {address.line1}
                <br />
                {address.line2}
                <br />
                {address.line3}
                <br />
                {address.line4}
              </span>
            </address>
            <a href={phoneHref} className="mt-4 inline-flex items-center gap-2 font-display font-bold text-xl text-ember-600">
              <Phone size={16} />
              {phone}
            </a>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 bg-ember-600 hover:bg-ember-500 text-white px-6 py-3 font-body text-xs font-semibold uppercase tracking-wide transition-colors"
              >
                <Phone size={14} />
                Call Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-steel-950/25 hover:border-steel-950/50 text-steel-950 px-6 py-3 font-body text-xs font-semibold uppercase tracking-wide transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </div>

          <iframe
            title="G.F Steel Technology location"
            src={mapEmbed}
            className="w-full h-full min-h-[320px] border border-steel-950/10"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
