import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/lib/projects'
import styles from './ProjectCard.module.css'

type Props = { project: Project; featured?: boolean }

export default function ProjectCard({ project, featured = false }: Props) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`${styles.card} ${featured ? styles.featured : ''}`}
    >
      <div className={styles.thumb}>
        {project.heroImage ? (
          <Image src={project.heroImage} alt={project.title} fill sizes="(max-width: 800px) 100vw, 50vw" />
        ) : (
          <div className={styles.thumbPlaceholder}>Image coming soon</div>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{project.title}</div>
        <div className={styles.tags}>
          {project.category.map(c => (
            <span key={c} className={styles.tag}>{c}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
