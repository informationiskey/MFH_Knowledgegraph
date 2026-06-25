import { useState } from 'react'
import StoryChain from './components/StoryChain'
import StoryModal from './components/StoryModal'
import { chain } from './data/chain'

export default function App() {
  const [activeNode, setActiveNode] = useState(null)

  return (
    <div className="blueprint-bg min-h-screen text-slate-100">
      {/* DRAFT banner — every legal text on this page is still a placeholder. */}
      <div className="sticky top-0 z-40 bg-amber-500/95 px-4 py-1.5 text-center text-xs font-semibold text-amber-950">
        ⚠︎ DRAFT — alle Gesetzes- und Normtexte sind Platzhalter und müssen fachlich geprüft werden.
      </div>

      <header className="mx-auto max-w-3xl px-6 pb-10 pt-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">{chain.meta.kicker}</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">{chain.meta.title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">{chain.meta.intro}</p>
        <div className="mt-10 animate-bounce text-sky-300">↓ scrollen</div>
      </header>

      <StoryChain onOpen={setActiveNode} />

      <footer className="mx-auto max-w-2xl px-6 pb-28 pt-12 text-center">
        <h2 className="text-2xl font-bold text-white">{chain.meta.outroTitle}</h2>
        <p className="mt-4 text-slate-300">{chain.meta.outro}</p>
      </footer>

      <StoryModal node={activeNode} onClose={() => setActiveNode(null)} />
    </div>
  )
}
