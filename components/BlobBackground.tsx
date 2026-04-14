'use client'
import { useBlobConfig } from '@/context/BlobContext'
import styles from './BlobBackground.module.css'

const variants = [styles.varA, styles.varB, styles.varC, styles.varD, styles.varE]

export default function BlobBackground() {
  const { circles } = useBlobConfig()
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.container}>
        {circles.map((c, i) => (
          <div
            key={i}
            className={`${styles.circle} ${variants[i % variants.length]}`}
            style={{
              width: c.size,
              height: c.size,
              top: `${c.top}%`,
              left: `${c.left}%`,
              animationDelay: `${c.delay}s`,
              transition: 'width 1s ease-in-out, height 1s ease-in-out, top 1s ease-in-out, left 1s ease-in-out',
            }}
          />
        ))}
      </div>
    </div>
  )
}
