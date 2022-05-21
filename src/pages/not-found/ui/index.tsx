import styles from './styles.module.scss'

const NotFound = () => {
  return (
    <main className={styles.main}>
      <h1>Такой папки нет.</h1>
      <p className={styles.subtext}>Выберите существующую папку.</p>
    </main>
  )
}

export default NotFound
