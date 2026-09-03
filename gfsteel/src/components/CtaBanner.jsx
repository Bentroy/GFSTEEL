    import { phone, phoneHref, whatsappHref } from '../data'
    
    export default function CtaBanner() {
      return (
        <section className="bg-ember-600 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="font-body text-sm tracking-wide text-white/80 mb-2">Let's talk materials</p>
              <h2 className="font-display text-4xl sm:text-5xl text-white max-w-xl leading-tight">
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
                className="inline-flex items-center rounded-sm bg-steel-950 hover:bg-steel-900 text-white px-7 py-3.5 font-body font-medium transition-colors"
              >
                Request a Quote
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center rounded-sm border border-white/70 hover:border-white text-white px-7 py-3.5 font-body font-medium transition-colors"
              >
                Call {phone}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-sm border border-white/70 hover:border-white text-white px-7 py-3.5 font-body font-medium transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      )
    }
    