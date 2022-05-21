import { useAppSelector } from 'app/hooks'
import { Mail, selectMails } from 'pages/mail-box/model'
import { Message } from 'pages/mail-box/model'
import { useParams } from 'react-router-dom'

import styles from './styles.module.scss'

const MessageBox = () => {
  const { box, id } = useParams()
  const message = (useAppSelector(selectMails) as Mail[])
    .find((mail: Mail) => mail.id === box)
    ?.messages?.find((message: Message) => message.id === id)

  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h2 className={styles.name}>{message?.name}</h2>
        <h4 className={styles.email}>{message?.email}</h4>
        <h3 className={styles.date}>{message?.date}</h3>
      </div>
      <div className={styles.content}>{message?.content}</div>
    </main>
  )
}

export default MessageBox
