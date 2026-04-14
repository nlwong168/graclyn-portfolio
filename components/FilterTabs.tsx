import styles from './FilterTabs.module.css'

type Props = {
  categories: string[]
  active: string
  onChange: (cat: string) => void
}

export default function FilterTabs({ categories, active, onChange }: Props) {
  return (
    <div className={styles.tabs} role="group" aria-label="Filter projects by category">
      {categories.map(cat => (
        <button
          key={cat}
          className={`${styles.tab} ${active === cat ? styles.active : ''}`}
          onClick={() => onChange(cat)}
          aria-pressed={active === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
