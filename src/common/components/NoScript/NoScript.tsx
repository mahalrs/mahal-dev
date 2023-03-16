import styles from './NoScript.module.scss'

export default function NoScript() {
  return (
    <noscript className={styles.noscript}>
      <div className={styles.msg}>
        You need to enable JavaScript to run this app.
      </div>
    </noscript>
  )
}
