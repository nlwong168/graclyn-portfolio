'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { useBlobConfig, BLOB_CONFIGS } from '@/context/BlobContext'
import { getAllProjects } from '@/lib/projects'
import { siteContent } from '@/lib/content'
import PageWrapper from '@/components/PageWrapper'
import Marquee from '@/components/Marquee'
import ProjectCard from '@/components/ProjectCard'
import styles from './page.module.css'

export default function Home() {
  const { setConfig } = useBlobConfig()
  useEffect(() => { setConfig(BLOB_CONFIGS.home) }, [setConfig])

  const previewProjects = getAllProjects().slice(0, 3)

  return (
    <PageWrapper>
      <section className={styles.hero}>
        <p className={styles.label}>{siteContent.role}</p>
        <h1 className={styles.name}>{siteContent.name}.</h1>
        <p className={styles.tagline}>{siteContent.tagline}</p>
        <div className={styles.buttons}>
          <Link href="/work" className={styles.btnPrimary}>View Work</Link>
          <Link href="/about" className={styles.btnSecondary}>About Me</Link>
        </div>
      </section>

      <Marquee items={siteContent.marqueeItems} />

      <section className={styles.workSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Selected Work</span>
          <Link href="/work" className={styles.sectionLink}>View all →</Link>
        </div>
        <div className={styles.grid}>
          {previewProjects.map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
