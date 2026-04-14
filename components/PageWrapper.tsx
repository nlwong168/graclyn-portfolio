'use client'
import { useEffect, useRef } from 'react'
import styles from './PageWrapper.module.css'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Allow one frame so CSS is applied before class triggers animations
    requestAnimationFrame(() => el.classList.add('is-loaded'))
    return () => el.classList.remove('is-loaded')
  }, [])

  return (
    <div ref={ref} className={`page-wrapper ${styles.wrapper}`}>
      {children}
    </div>
  )
}
