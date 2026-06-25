import { motion } from 'framer-motion'

// Builds a smooth S-curve from the bottom of the source card to the top of the
// target card. Coordinates come from measured positions, so the curve follows
// the cards on any window size.
function buildPath(from, to) {
  const sx = from.centerX
  const sy = from.bottomY
  const tx = to.centerX
  const ty = to.topY
  const curve = Math.max(40, Math.abs(ty - sy) * 0.4)
  return `M ${sx} ${sy} C ${sx} ${sy + curve}, ${tx} ${ty - curve}, ${tx} ${ty}`
}

// The animated "threads" connecting the cards. Each thread draws itself
// (pathLength 0 -> 1) once its target card has scrolled into view.
export default function ThreadLayer({ edges, positions, canvas, visible }) {
  if (!canvas.width || !canvas.height) return null

  return (
    <svg
      className="pointer-events-none absolute inset-0"
      width={canvas.width}
      height={canvas.height}
      viewBox={`0 0 ${canvas.width} ${canvas.height}`}
      fill="none"
    >
      {edges.map(([fromId, toId]) => {
        const from = positions[fromId]
        const to = positions[toId]
        if (!from || !to) return null

        const toBlockade = toId === 'blockade'
        const isLit = visible.has(toId)
        const color = toBlockade ? '#ef4444' : '#38bdf8'
        const glow = toBlockade ? 'rgba(239,68,68,0.6)' : 'rgba(56,189,248,0.5)'

        return (
          <motion.path
            key={`${fromId}-${toId}`}
            d={buildPath(from, to)}
            stroke={color}
            strokeWidth={2.5}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 6px ${glow})` }}
            initial={{ pathLength: 0, opacity: 0.15 }}
            animate={isLit ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.15 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />
        )
      })}
    </svg>
  )
}
