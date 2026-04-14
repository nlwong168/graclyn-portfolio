'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { siteContent } from '@/lib/content'
import styles from './Nav.module.css'

export default function Nav() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          {siteContent.name.toLowerCase()}.
        </Link>

        <ul className={styles.links}>
          {navLinks.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={pathname.startsWith(l.href) ? styles.active : ''}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <button className={styles.iconBtn} onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button
            className={`${styles.hamburger} ${open ? styles.open : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.open : ''}`}
        onClick={e => { if (e.target === e.currentTarget) setOpen(false) }}
      >
        <ul className={styles.overlayLinks}>
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          {navLinks.map(l => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.socialLinks}>
          {siteContent.contact.linkedin && (
            <a href={siteContent.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          {siteContent.contact.behance && (
            <a href={siteContent.contact.behance} target="_blank" rel="noreferrer">Behance</a>
          )}
          {siteContent.contact.email && (
            <a href={`mailto:${siteContent.contact.email}`}>Email</a>
          )}
        </div>
      </div>
    </>
  )
}
