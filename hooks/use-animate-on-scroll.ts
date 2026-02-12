"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"

interface UseAnimateOnScrollOptions {
  /** Intersection ratio required to trigger (0–1). Default: 0.15 */
  threshold?: number
  /** Root margin passed to IntersectionObserver. Default: "0px 0px -60px 0px" */
  rootMargin?: string
  /** Delay in ms before the element begins its entrance transition. Default: 0 */
  delay?: number
}

/**
 * One-shot entrance animation triggered by IntersectionObserver.
 *
 * Returns:
 *  - `ref`   — attach to the element you want to animate
 *  - `style` — spread onto the same element for opacity + translateY transition
 *
 * The element fades in and slides up once when it enters the viewport,
 * then stays fully visible — no reversal on upward scroll.
 */
export function useAnimateOnScroll({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  delay = 0,
}: UseAnimateOnScrollOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    willChange: "opacity, transform",
  }

  return { ref, style, isVisible }
}
