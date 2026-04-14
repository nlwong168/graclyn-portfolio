import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getAllProjects, getProjectBySlug, getAdjacentProjects } from '@/lib/projects'
import BlobConfigSetter from './BlobConfigSetter'
import PageWrapper from '@/components/PageWrapper'
import styles from './page.module.css'

export function generateStaticParams() {
  return getAllProjects().map(p => ({ slug: p.slug }))
}

type Props = { params: { slug: string } }

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(project.slug)

  return (
    <>
      <BlobConfigSetter />
      <PageWrapper>
        <article className={styles.page}>
          <header className={styles.hero}>
            <p className={styles.label}>{project.category[0]}</p>
            <h1 className={styles.title}>{project.title}</h1>
            <div className={styles.tags}>
              {project.category.map(c => <span key={c} className={styles.tag}>{c}</span>)}
            </div>
            <p className={styles.description}>{project.description}</p>
          </header>

          <div className={styles.heroImg}>
            {project.heroImage ? (
              <Image src={project.heroImage} alt={project.title} fill sizes="100vw" />
            ) : null}
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <label>Year</label>
              <span>{project.year}</span>
            </div>
            <div className={styles.metaItem}>
              <label>Category</label>
              <span>{project.category.join(', ')}</span>
            </div>
          </div>

          <div className={styles.body}>
            <ReactMarkdown>{project.body}</ReactMarkdown>
          </div>

          {project.images.length > 0 && (
            <div className={styles.images}>
              {project.images.map((src, i) => (
                <div key={i} className={styles.extraImg}>
                  <Image src={src} alt={`${project.title} ${i + 1}`} fill sizes="100vw" />
                </div>
              ))}
            </div>
          )}

          <nav className={styles.nav}>
            {prev ? <Link href={`/work/${prev.slug}`} className={styles.navLink}>← {prev.title}</Link> : <span />}
            {next ? <Link href={`/work/${next.slug}`} className={styles.navLink}>{next.title} →</Link> : <span />}
          </nav>
        </article>
      </PageWrapper>
    </>
  )
}
