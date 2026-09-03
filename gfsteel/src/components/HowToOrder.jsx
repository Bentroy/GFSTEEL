import { ArrowRight } from 'lucide-react'
import { howToOrder, images } from '../data'

export default function HowToOrder() {
  return (
    <section className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-ember-600 mb-3">How to order</p>
          <h2 className="font-display font-black uppercase text-4xl sm:text-5xl text-steel-950 leading-[0.95]">
            Simple steps. Direct conversation.
          </h2>
          <p className="mt-4 font-body text-steel-600 max-w-md">
            Start with what you know. We'll discuss availability, pricing and
            purchase details with you.
          </p>

          <ol className="mt-10 grid sm:grid-cols-3 gap-6 sm:gap-4">
            {howToOrder.map((step) => (
              <li key={step.n} className="border-t border-steel-950/15 pt-4">
                <span className="font-display text-sm font-bold text-ember-600">{step.n}</span>
                <h3 className="font-display font-bold uppercase text-lg text-steel-950 mt-1">{step.title}</h3>
                <p className="mt-1 font-body text-sm text-steel-600">{step.copy}</p>
              </li>
            ))}
          </ol>

          <a
            href="#quote"
            className="mt-10 inline-flex items-center gap-2 bg-ember-600 hover:bg-ember-500 text-white px-7 py-3.5 font-body font-semibold text-sm uppercase tracking-wide transition-colors"
          >
            Start Your Enquiry
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>

        <img
          src={images.sheets}
          alt="Stacked steel sheets in an industrial yard"
          className="w-full aspect-[4/5] object-cover"
        />
      </div>
    </section>
  )
}
