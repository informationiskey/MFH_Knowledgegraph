import { useState, useLayoutEffect, useCallback } from 'react'

// Measures every card's box relative to the chain container so the SVG thread
// layer can draw lines that follow the cards. Recomputed on resize and on
// demand, which keeps the "threads" correct when the window is scaled.
export function useNodePositions(containerRef, nodeRefs, nodeIds) {
  const [positions, setPositions] = useState({})
  const [canvas, setCanvas] = useState({ width: 0, height: 0 })

  const measure = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const base = container.getBoundingClientRect()
    const next = {}
    nodeIds.forEach((id) => {
      const el = nodeRefs.current[id]
      if (!el) return
      const r = el.getBoundingClientRect()
      const left = r.left - base.left
      const top = r.top - base.top
      next[id] = {
        centerX: left + r.width / 2,
        topY: top,
        bottomY: top + r.height,
      }
    })
    setPositions(next)
    setCanvas({ width: container.scrollWidth, height: container.scrollHeight })
  }, [containerRef, nodeRefs, nodeIds])

  useLayoutEffect(() => {
    measure()
    const container = containerRef.current
    const observer = new ResizeObserver(() => measure())
    if (container) observer.observe(container)
    window.addEventListener('resize', measure)
    window.addEventListener('load', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
      window.removeEventListener('load', measure)
    }
  }, [measure, containerRef])

  return { positions, canvas, remeasure: measure }
}
