'use client'
import { useBlobConfig } from '@/context/BlobContext'
import styles from './BlobBackground.module.css'

export default function BlobBackground() {
  const { circles } = useBlobConfig()
  return (
    <div className={styles.root} aria-hidden="true">
      <svg className={styles.filter}>
        <defs>
          <filter id="blob-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -10"
              result="goo"
            />
          </filter>
        </defs>
      </svg>
      <div className={styles.container}>
        {circles.map((c, i) => (
          <div
            key={i}
            className={styles.circle}
            style={{
              width: c.size,
              height: c.size,
              top: `${c.top}%`,
              left: `${c.left}%`,
              animationDelay: `${c.delay}s`,
              transition: 'width 1s var(--easing), height 1s var(--easing), top 1s var(--easing), left 1s var(--easing)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
