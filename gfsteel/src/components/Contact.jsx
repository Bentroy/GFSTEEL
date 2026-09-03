import { address, mapEmbed, phone, phoneHref, whatsappHref } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="bg-steel-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-body text-sm tracking-wide text-ember-400 mb-3">Contact &amp; location</p>
        <h2 className="font-display text-4xl sm:text-5xl text-steel-100 max-w-2xl">
          Visit or contact us
        </h2>
        <p className="mt-4 font-body text-steel-400 max-w-xl">
          For enquiries, pricing and material availability, speak directly
          with G.F Steel Technology.
        </p>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <div className="border border-steel-700 p-8">
            <h3 className="font-display text-2xl text-steel-100">G.F Steel Technology</h3>
            <address className="mt-4 not-italic font-body text-steel-400 leading-relaxed">
              {address.line1}
              <br />
              {address.line2}
              <br />
              {address.line3}
              <br />
              {address.line4}
            </address>
            <a href={phoneHref} className="mt-4 inline-block font-display text-2xl text-ember-500">
              {phone}
            </a>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={phoneHref}
                className="inline-flex items-center rounded-sm bg-ember-600 hover:bg-ember-500 text-white px-6 py-3 font-body text-sm font-medium transition-colors"
              >
                Call Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-sm border border-steel-500 hover:border-steel-300 text-steel-100 px-6 py-3 font-body text-sm font-medium transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <iframe
            title="G.F Steel Technology location"
            src={mapEmbed}
            className="w-full h-full min-h-[320px] border border-steel-700"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
