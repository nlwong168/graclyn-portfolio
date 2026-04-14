import styles from './Marquee.module.css'

type Props = { items: string[] }

export default function Marquee({ items }: Props) {
  // Duplicate items so the loop is seamless
  const doubled = [...items, ...items]
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            {i < doubled.length - 1 && <span className={styles.sep}>·</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
