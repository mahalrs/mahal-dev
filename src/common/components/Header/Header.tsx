import Image from 'next/image'
import rsm from '@/../public/rsm.svg'
import rsmLogo from '@/../public/rsm-logo.svg'
import { OpenInNew } from '@/common/components/Icon'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <section>
          <a href='/'>
            <Image
              src={rsm}
              alt='RSM - Rajwinder Mahal Logo'
              className={styles.rsm}
              priority
            />
            <Image
              src={rsmLogo}
              alt='RSM - Rajwinder Mahal Logo'
              className={styles.rsmLogo}
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
