import Image from 'next/image'
import rsm from '@/../public/rsm.svg'
import { GitHubMark, LinkedInMark } from '@/common/components/Icon'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footer}>
        <div className={styles.main}>
          <section className={styles.logoContainer}>
            <a href='/'>
              <Image
                src={rsm}
                alt='RSM - Rajwinder Mahal Logo'
                className={styles.logo}
              />
            </a>
          </section>
          <section className={styles.socialContainer}>
            <a
              href='https://www.linkedin.com/in/mahalrajwinder'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInMark className={styles.icon}/>
            </a>
            <a
              href='https://github.com/mahalrs'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubMark className={styles.icon}/>
            </a>
          </section>
        </div>
        <section className={styles.copyright}>
          Rajwinder Mahal &copy; {new Date().getFullYear()}
        </section>
      </footer>
    </div>
  )
}
