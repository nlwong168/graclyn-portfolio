'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useBlobConfig, BLOB_CONFIGS } from '@/context/BlobContext'
import { siteContent } from '@/lib/content'
import PageWrapper from '@/components/PageWrapper'
import styles from './page.module.css'

export default function AboutPage() {
  const { setConfig } = useBlobConfig()
  useEffect(() => { setConfig(BLOB_CONFIGS.about) }, [setConfig])

  return (
    <PageWrapper>
      <div className={styles.page}>
        <header className={styles.header}>
          <p className={styles.label}>About</p>
          <h1 className={styles.title}>About Me</h1>
        </header>

        <div className={styles.bio}>
          <div className={styles.photo}>
            {siteContent.bioPhoto ? (
              <Image src={siteContent.bioPhoto} alt={siteContent.name} fill sizes="300px" />
            ) : (
              <div className={styles.photoPlaceholder}>Photo</div>
            )}
          </div>
          <div className={styles.bioText}>
            {siteContent.bio.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>

        <section className={styles.servicesSection}>
          <p className={styles.servicesLabel}>Services</p>
          <div className={styles.services}>
            {siteContent.services.map(s => (
              <span key={s} className={styles.service}>{s}</span>
            ))}
          </div>
        </section>

        <Link href="/contact" className={styles.cta}>Get in Touch</Link>
      </div>
    </PageWrapper>
  )
}
