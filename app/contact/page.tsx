'use client'
import { useEffect } from 'react'
import { useBlobConfig, BLOB_CONFIGS } from '@/context/BlobContext'
import { siteContent } from '@/lib/content'
import PageWrapper from '@/components/PageWrapper'
import styles from './page.module.css'

export default function ContactPage() {
  const { setConfig } = useBlobConfig()
  useEffect(() => { setConfig(BLOB_CONFIGS.contact) }, [setConfig])

  return (
    <PageWrapper>
      <div className={styles.page}>
        <header className={styles.header}>
          <p className={styles.label}>Contact</p>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.prompt}>Have a project in mind? Send a message and I&apos;ll get back to you.</p>
        </header>

        <form
          className={styles.form}
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>

          <div className={styles.field}>
            <input type="text" name="name" id="name" placeholder=" " required />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className={styles.field}>
            <input type="email" name="email" id="email" placeholder=" " required />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className={`${styles.field} ${styles.textarea}`}>
            <textarea name="message" id="message" placeholder=" " required />
            <label htmlFor="message">Your Message</label>
          </div>

          <button type="submit" className={styles.submit}>Send →</button>
        </form>

        <div className={styles.socials}>
          {siteContent.contact.email && (
            <a href={`mailto:${siteContent.contact.email}`} className={styles.socialLink}>Email</a>
          )}
          {siteContent.contact.linkedin && (
            <a href={siteContent.contact.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn</a>
          )}
          {siteContent.contact.behance && (
            <a href={siteContent.contact.behance} target="_blank" rel="noreferrer" className={styles.socialLink}>Behance</a>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}
