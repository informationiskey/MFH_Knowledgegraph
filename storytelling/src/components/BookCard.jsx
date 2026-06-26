import { motion } from 'framer-motion'

// Per-layer accent colours. Each "kind" of node looks distinct so the eye can
// tell laws (books) from technical consequences and the final blockade apart.
const KIND_STYLES = {
  goal: { border: 'border-emerald-400/70', dot: 'bg-emerald-400', tag: 'text-emerald-300' },
  law: { border: 'border-amber-400/70', dot: 'bg-amber-400', tag: 'text-amber-300' },
  tech: { border: 'border-sky-400/70', dot: 'bg-sky-400', tag: 'text-sky-300' },
  blockade: { border: 'border-red-500', dot: 'bg-red-500', tag: 'text-red-300' },
}

// One card in the chain. Reveals itself (fade + rise) when scrolled into view,
// and opens the detail modal on click.
export default function BookCard({ node, onOpen, inView }) {
  const style = KIND_STYLES[node.kind] ?? KIND_STYLES.law
  const isBlockade = node.kind === 'blockade'

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(node)}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.96 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative w-full max-w-xs rounded-xl border-t-4 sm:w-64 sm:max-w-none ${style.border} ${
        isBlockade ? 'bg-red-950/85 ring-2 ring-red-500/60' : 'bg-slate-900/85'
      } px-3 py-3 text-left shadow-xl backdrop-blur transition-colors hover:bg-slate-800/90 sm:px-5 sm:py-4`}
    >
      <div className={`mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider ${style.tag}`}>
        <span className={`inline-block h-2 w-2 rounded-full ${style.dot}`} />
        {node.tag}
      </div>
      <div className={`text-base font-bold sm:text-lg ${isBlockade ? 'text-red-100' : 'text-slate-50'}`}>{node.title}</div>
      <div className="mt-1 text-xs text-slate-400 sm:text-sm">{node.ref}</div>
      <div className="mt-3 hidden text-xs text-sky-300/80 opacity-0 transition-opacity group-hover:opacity-100 sm:block">
        Klicken für Details →
      </div>
    </motion.button>
  )
}
