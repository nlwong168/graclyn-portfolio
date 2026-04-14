'use client'
import { useEffect, useState } from 'react'
import { useBlobConfig, BLOB_CONFIGS } from '@/context/BlobContext'
import { getAllProjects, getAllCategories } from '@/lib/projects'
import { siteContent } from '@/lib/content'
import PageWrapper from '@/components/PageWrapper'
import FilterTabs from '@/components/FilterTabs'
import ProjectCard from '@/components/ProjectCard'
import styles from './page.module.css'

export default function WorkPage() {
  const { setConfig } = useBlobConfig()
  useEffect(() => { setConfig(BLOB_CONFIGS.work) }, [setConfig])

  const allProjects = getAllProjects()
  const categories = ['All', ...getAllCategories()]
  const [active, setActive] = useState('All')

  const visible = active === 'All' ? allProjects : allProjects.filter(p => p.category.includes(active))

  return (
    <PageWrapper>
      <div className={styles.page}>
        <header className={styles.header}>
          <p className={styles.label}>Portfolio</p>
          <h1 className={styles.title}>Selected Work</h1>
          <p className={styles.subtitle}>
            A collection of {siteContent.services.slice(0, 3).join(', ').toLowerCase()}, and more.
          </p>
        </header>

        <FilterTabs categories={categories} active={active} onChange={setActive} />

        <div className={styles.grid}>
          {visible.map((p, i) => (
            <div key={p.slug} style={{ animationDelay: `${i * 60}ms` }} className="page-wrapper is-loaded">
              <ProjectCard
                project={p}
                featured={i === 0 && active === 'All'}
              />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
