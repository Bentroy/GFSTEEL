import { whoWeServe } from '../data'

export default function WhoWeServe() {
  return (
    <section className="bg-steel-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-body text-sm tracking-wide text-ember-400 mb-3">Who we serve</p>
        <h2 className="font-display text-4xl sm:text-5xl text-steel-100 max-w-2xl">
          Materials for your next project
        </h2>
        <p className="mt-4 font-body text-steel-400 max-w-xl">
          Whether you're sourcing materials for a construction project,
          fabrication work or another building requirement, contact G.F
          Steel Technology to discuss what you need.
        </p>

        <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {whoWeServe.map((role, i) => (
            <li
              key={role}
              className="flex items-baseline gap-4 border-b border-steel-800 pb-4 font-display text-2xl text-steel-100"
            >
              <span className="text-sm font-body text-ember-500">
                {String(i + 1).padStart(2, '0')}
              </span>
              {role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
