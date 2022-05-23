import { useAppSelector } from 'app/hooks'
import { Mail, selectMails } from 'pages/mail-box/model'
import { Message } from 'pages/mail-box/model'
import { useParams } from 'react-router-dom'

import styles from './styles.module.css'

const MessageBox = () => {
  const { box, id } = useParams()
  const message = (useAppSelector(selectMails) as Mail[])
    .find((mail: Mail) => mail.id === box)
    ?.messages?.find((message: Message) => message.id === id)

  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h2 className={styles.name}>{message?.name}</h2>
        <span className={styles.email}>{message?.email}</span>
        <span className={styles.date}>{message?.date}</span>
      </div>
      <p className={styles.content}>{message?.content}</p>
    </main>
  )
}

export default MessageBox
