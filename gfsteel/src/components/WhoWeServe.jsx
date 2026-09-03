import { whoWeServe } from '../data'

export default function WhoWeServe() {
  return (
    <section className="bg-steel-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-ember-400 mb-3">Who we serve</p>
        <h2 className="font-display font-black uppercase text-4xl sm:text-5xl text-steel-100 max-w-2xl leading-[0.95]">
          Materials for your next project
        </h2>
        <p className="mt-4 font-body text-steel-400 max-w-xl">
          Whether you're sourcing materials for a construction project,
          fabrication work or another building requirement, contact G.F
          Steel Technology to discuss what you need.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-steel-700">
          {whoWeServe.map((role, i) => (
            <div
              key={role}
              className="border-r border-b border-steel-700 px-6 py-6"
            >
              <span className="block text-xs font-body font-semibold text-ember-500">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="mt-1 block font-display font-bold uppercase text-xl text-steel-100">
                {role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
