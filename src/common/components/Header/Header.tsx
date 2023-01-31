import Image from 'next/image'
import { OpenInNew } from '@/common/components/Icon'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <section className={styles.logoContainer}>
          <a href='/'>
            <Image
              src='/rsm.svg'
              alt='RSM Logo'
              className={`${styles.logo} ${styles.rsm}`}
              width={256}
              height={256}
              priority
            />
            <Image
              src='/rsm-logo.svg'
              alt='RSM - Rajwinder Mahal Logo'
              className={`${styles.logo} ${styles.rsmLogo}`}
              width={256}
              height={256}
              priority
            />
          </a>
        </section>
        <section className={styles.navContainer}>
          {/* <nav className={styles.nav}>
            <a>Link1</a>
            <a>Link2</a>
          </nav> */}
          {/* <span className={styles.hamburger}>
            <button>Menu</button>
          </span> */}
          <span className={styles.github}>
            <a
              href='https://github.com/mahalrs'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <span>GitHub</span>
                <OpenInNew className={styles.icon}/>
              </span>
            </a>
          </span>
        </section>
      </header>
    </div>
  )
}
