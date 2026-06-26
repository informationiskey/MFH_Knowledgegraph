import { motion } from 'framer-motion'

// Builds a smooth S-curve from the bottom of the source card to the top of the
// target card. The curve enters the target straight from above (both the last
// control point and the end share the target's x), so a downward arrow head at
// the target is always geometrically correct.
function buildPath(from, to) {
  const sx = from.centerX
  const sy = from.bottomY
  const tx = to.centerX
  const ty = to.topY
  const curve = Math.max(40, Math.abs(ty - sy) * 0.45)
  return `M ${sx} ${sy} C ${sx} ${sy + curve}, ${tx} ${ty - curve}, ${tx} ${ty}`
}

// A downward-pointing triangle whose tip touches the top of the target card.
function arrowHead(to, size = 6) {
  const x = to.centerX
  const y = to.topY
  return `M ${x - size} ${y - size * 1.6} L ${x + size} ${y - size * 1.6} L ${x} ${y} z`
}

// The animated "threads" connecting the cards. Each thread draws itself
// (pathLength 0 -> 1) once its target card has scrolled into view, then anchors
// its ends with a start dot (source) and an arrow head (target) so the reader
// can follow exactly where the path runs and in which direction.
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
        const glow = toBlockade ? 'rgba(239,68,68,0.65)' : 'rgba(56,189,248,0.55)'

        return (
          <g key={`${fromId}-${toId}`} style={{ filter: `drop-shadow(0 0 7px ${glow})` }}>
            {/* The flowing line. */}
            <motion.path
              d={buildPath(from, to)}
              stroke={color}
              strokeWidth={3}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.18 }}
              animate={isLit ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.18 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            />

            {/* Start dot at the source card — anchors where the path begins. */}
            <motion.circle
              cx={from.centerX}
              cy={from.bottomY}
              r={3.5}
              fill={color}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLit ? 1 : 0 }}
              transition={{ duration: 0.3, delay: isLit ? 0.1 : 0 }}
            />

            {/* Arrow head at the target card — shows the flow direction. */}
            <motion.path
              d={arrowHead(to)}
              fill={color}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLit ? 1 : 0 }}
              transition={{ duration: 0.3, delay: isLit ? 0.6 : 0 }}
            />
          </g>
        )
      })}
    </svg>
  )
}
