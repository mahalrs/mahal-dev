import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <h1 className={styles.headline}>{`Hello!`}</h1>
        <p className={styles.para}>
          {`Content here..`}
        </p>
      </main>
    </div>
  )
}
