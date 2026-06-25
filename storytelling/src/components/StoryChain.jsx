import { useRef, useState, useCallback, useEffect, useMemo } from 'react'
import { chain } from '../data/chain'
import { useNodePositions } from '../hooks/useNodePositions'
import BookCard from './BookCard'
import ThreadLayer from './ThreadLayer'

const COL_TO_GRID = { left: 1, center: 2, right: 3 }

// Orchestrates the vertical journey: lays cards out on a 3-column grid, draws
// the threads between them, and reveals each card (and its incoming threads)
// as it scrolls into view.
export default function StoryChain({ onOpen }) {
  const containerRef = useRef(null)
  const nodeRefs = useRef({})
  const nodeIds = useMemo(() => chain.nodes.map((n) => n.id), [])

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
      className="relative mx-auto grid w-full max-w-4xl grid-cols-3 gap-x-6 gap-y-28 px-4 py-16"
    >
      <ThreadLayer edges={chain.edges} positions={positions} canvas={canvas} visible={visible} />

      {chain.nodes.map((node) => (
        <div
          key={node.id}
          data-node-id={node.id}
          ref={(el) => registerRef(node.id, el)}
          style={{ gridColumn: COL_TO_GRID[node.col], gridRow: node.row }}
          className="relative z-10 flex justify-center"
        >
          <BookCard node={node} onOpen={onOpen} inView={visible.has(node.id)} />
        </div>
      ))}
    </div>
  )
}
