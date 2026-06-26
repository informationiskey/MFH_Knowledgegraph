// Horizontal row of chips to switch between effect chains. Scrolls sideways on
// narrow screens so any number of chains stays reachable on a phone.
export default function ChainSelector({ chains, activeId, onSelect }) {
  return (
    <nav
      aria-label="Wirkkette wählen"
      className="border-b border-slate-800/70 bg-blueprint-deep/90 backdrop-blur"
    >
      <div className="mx-auto flex max-w-3xl gap-2 overflow-x-auto px-4 py-3">
        {chains.map((chain) => {
          const isActive = chain.id === activeId
          return (
            <button
              key={chain.id}
              type="button"
              onClick={() => onSelect(chain.id)}
              aria-pressed={isActive}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-sky-400 bg-sky-500/20 text-sky-100'
                  : 'border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
              }`}
            >
              {chain.title}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
