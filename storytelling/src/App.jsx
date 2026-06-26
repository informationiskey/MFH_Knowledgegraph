import { useState, useEffect } from 'react'
import StoryChain from './components/StoryChain'
import StoryModal from './components/StoryModal'
import ChainSelector from './components/ChainSelector'
import { fetchManifest, fetchChain } from './data/loadChains'

export default function App() {
  const [chains, setChains] = useState([]) // manifest: [{ id, title, file }]
  const [activeId, setActiveId] = useState(null)
  const [chain, setChain] = useState(null) // the full active chain
  const [activeNode, setActiveNode] = useState(null)
  const [error, setError] = useState(null)

  // Load the list of chains once on startup.
  useEffect(() => {
    fetchManifest()
      .then((list) => {
        setChains(list)
        if (list.length > 0) setActiveId(list[0].id)
      })
      .catch((err) => setError(err.message))
  }, [])

  // Load the selected chain's full content whenever the selection changes.
  useEffect(() => {
    if (!activeId) return
    const entry = chains.find((c) => c.id === activeId)
    if (!entry) return

    let cancelled = false
    setChain(null) // show the loading state while switching
    fetchChain(entry.file)
      .then((data) => {
        if (!cancelled) setChain(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })
    return () => {
      cancelled = true
    }
  }, [activeId, chains])

  const handleSelect = (id) => {
    setActiveNode(null)
    setActiveId(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="blueprint-bg min-h-screen text-slate-100">
      {/* Sticky header: DRAFT warning + chain selector travel together. */}
      <div className="sticky top-0 z-40">
        <div className="bg-amber-500/95 px-4 py-1.5 text-center text-xs font-semibold text-amber-950">
          ⚠︎ DRAFT — alle Gesetzes- und Normtexte sind Platzhalter und müssen fachlich geprüft werden.
        </div>
        {chains.length > 1 && (
          <ChainSelector chains={chains} activeId={activeId} onSelect={handleSelect} />
        )}
      </div>

      {error && (
        <p className="mx-auto mt-10 max-w-md rounded-lg border border-red-500/60 bg-red-950/60 px-4 py-3 text-center text-sm text-red-200">
          Konnte die Wirkketten nicht laden: {error}
        </p>
      )}

      {chain && (
        <>
          <header className="mx-auto max-w-3xl px-6 pb-10 pt-16 text-center sm:pt-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">{chain.meta.kicker}</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">{chain.meta.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">{chain.meta.intro}</p>
            <div className="mt-10 animate-bounce text-sky-300">↓ scrollen</div>
          </header>

          <StoryChain key={activeId} chain={chain} onOpen={setActiveNode} />

          <footer className="mx-auto max-w-2xl px-6 pb-28 pt-12 text-center">
            <h2 className="text-2xl font-bold text-white">{chain.meta.outroTitle}</h2>
            <p className="mt-4 text-slate-300">{chain.meta.outro}</p>
          </footer>
        </>
      )}

      {!chain && !error && (
        <div className="py-32 text-center text-slate-400">Lädt …</div>
      )}

      <StoryModal node={activeNode} onClose={() => setActiveNode(null)} />
    </div>
  )
}
