import { useRef, useState, useCallback, useEffect, useMemo } from 'react'
import { useNodePositions } from '../hooks/useNodePositions'
import BookCard from './BookCard'
import ThreadLayer from './ThreadLayer'

// Grid-column placement per path. The same node keeps its path on every screen:
//   - phone  : two lanes — left = path A, right = path B, shared steps span both.
//   - desktop: a 3-column "knot" — left / center / right.
// Parallel steps share a `row`, so they sit side by side and each path forms one
// continuous vertical lane; an arrow that "skips" the other path stays in its
// own lane instead of jumping over a foreign card.
const COL_TO_GRID_CLASSES = {
  left: 'col-start-1',
  center: 'col-start-1 col-span-2 sm:col-start-2 sm:col-span-1',
  right: 'col-start-2 sm:col-start-3',
}

// Reading / reveal order: top to bottom by row, left before right within a row.
const COL_ORDER = { left: 0, center: 1, right: 2 }

// Orchestrates the journey: lays the cards out as two lanes (phone) or three
// columns (desktop), draws the threads between them, and reveals each card (and
// its incoming threads) as it scrolls into view.
export default function StoryChain({ chain, onOpen }) {
  const containerRef = useRef(null)
  const nodeRefs = useRef({})

  const orderedNodes = useMemo(
    () =>
      [...chain.nodes].sort((a, b) => a.row - b.row || COL_ORDER[a.col] - COL_ORDER[b.col]),
    [chain.nodes],
  )
  const nodeIds = useMemo(() => orderedNodes.map((n) => n.id), [orderedNodes])

  const registerRef = useCallback((id, el) => {
    if (el) nodeRefs.current[id] = el
  }, [])

  const { positions, canvas, remeasure } = useNodePositions(containerRef, nodeRefs, nodeIds)
  const [visible, setVisible] = useState(() => new Set())

  // Mark a card visible the first time it scrolls into view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = new Set(prev)
          let changed = false
          entries.forEach((entry) => {
            const id = entry.target.dataset.nodeId
            if (entry.isIntersecting && !next.has(id)) {
              next.add(id)
              changed = true
            }
          })
          return changed ? next : prev
        })
      },
      { threshold: 0.4 },
    )
    Object.values(nodeRefs.current).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [nodeIds])

  // Reveal animations shift cards by a few pixels; re-measure once they settle
  // so the threads stay attached.
  useEffect(() => {
    remeasure()
    const timer = setTimeout(remeasure, 700)
    return () => clearTimeout(timer)
  }, [visible, remeasure])

  return (
    <div
      ref={containerRef}
      className="relative mx-auto grid w-full max-w-4xl grid-cols-2 gap-x-3 gap-y-12 px-4 py-12 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-28 sm:py-16"
    >
      <ThreadLayer edges={chain.edges} positions={positions} canvas={canvas} visible={visible} />

      {orderedNodes.map((node) => (
        <div
          key={node.id}
          data-node-id={node.id}
          ref={(el) => registerRef(node.id, el)}
          style={{ gridRow: node.row }}
          className={`relative z-10 flex justify-center ${COL_TO_GRID_CLASSES[node.col]}`}
        >
          <BookCard node={node} onOpen={onOpen} inView={visible.has(node.id)} />
        </div>
      ))}
    </div>
  )
}
