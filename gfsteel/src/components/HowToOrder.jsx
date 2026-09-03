import { howToOrder, images } from '../data'

export default function HowToOrder() {
  return (
    <section className="bg-steel-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="font-body text-sm tracking-wide text-ember-400 mb-3">How to order</p>
          <h2 className="font-display text-4xl sm:text-5xl text-steel-100 leading-tight">
            Simple steps. Direct conversation.
          </h2>
          <p className="mt-4 font-body text-steel-400 max-w-md">
            Start with what you know. We'll discuss availability, pricing and
            purchase details with you.
          </p>

          <ol className="mt-10 space-y-8">
            {howToOrder.map((step) => (
              <li key={step.n} className="flex gap-5">
                <span className="font-display text-2xl text-ember-500 shrink-0">{step.n}</span>
                <div>
                  <h3 className="font-display text-2xl text-steel-100">{step.title}</h3>
                  <p className="mt-1 font-body text-sm text-steel-400">{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href="#quote"
            className="mt-10 inline-flex items-center rounded-sm bg-ember-600 hover:bg-ember-500 text-white px-7 py-3.5 font-body font-medium transition-colors"
          >
            Start Your Enquiry
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
