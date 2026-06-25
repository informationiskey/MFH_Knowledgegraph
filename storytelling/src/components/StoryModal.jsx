import { motion, AnimatePresence } from 'framer-motion'

// Detail overlay for a clicked card: the (draft) legal/norm excerpt plus a
// plain-language "post-it" note for a non-technical audience.
export default function StoryModal({ node, onClose }) {
  return (
    <AnimatePresence>
      {node && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="relative z-10 w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Schließen"
              className="absolute right-4 top-4 text-slate-400 transition-colors hover:text-white"
            >
              ✕
            </button>

            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-sky-300">{node.tag}</div>
            <h3 className="text-2xl font-bold text-white">{node.title}</h3>
            <div className="mt-1 text-sm text-slate-400">{node.ref}</div>

            <div className="mt-5 rounded-lg border-l-4 border-amber-400 bg-slate-800/60 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-amber-300">
                Gesetzestext / Norm (Entwurf)
              </div>
              <p className="mt-1 text-sm leading-relaxed text-slate-200">{node.modal.paragraph}</p>
            </div>

            <div className="mt-4 -rotate-1 rounded-sm bg-yellow-200 p-4 text-slate-900 shadow-lg">
              <div className="text-xs font-bold uppercase tracking-wide text-yellow-800">Post-it · Klartext</div>
              <p className="mt-1 text-sm leading-relaxed">{node.modal.postit}</p>
            </div>

            <p className="mt-4 text-xs text-slate-500">⚠︎ {node.modal.source}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
