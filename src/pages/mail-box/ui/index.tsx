import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectMails, Mail } from '../model'
import { readMessage } from 'pages/mail-box/model'

import cn from 'classnames'
import styles from './styles.module.scss'
import { NavLink, useParams } from 'react-router-dom'
import ToolBox from 'components/tool-box'
import { useState } from 'react'

const MailBox = () => {
  const { box } = useParams()
  const dispatch = useAppDispatch()
  const mail = (useAppSelector(selectMails) as Mail[]).find(
    (mail: Mail) => mail.selected
  )
  // !!! По хорошему конечно убрать логику в model
  const [checkboxes, setChecked] = useState<any>(
    mail?.messages.reduce(
      (acc, message) => ({ ...acc, ...{ [message.id]: false } }),
      {}
    )
  )
  const handleChange = (id: string) => {
    setChecked({ ...checkboxes, [id]: !checkboxes[id] })
  }
  const handleReset = () => {
    for (let key in checkboxes) {
      if (checkboxes[key]) {
        checkboxes[key] = false
      }
    }
    setChecked(() => ({ ...checkboxes }))
  }
  const styleItem = (isRead: Boolean = false) =>
    cn(styles.item, isRead ? styles.isRead : '')

  return (
    <main className={styles.main}>
      {mail?.messages.length ? (
        <ToolBox checkboxes={checkboxes} handleReset={handleReset} />
      ) : null}
      <ul className={styles.list}>
        {mail?.messages.map((message) => (
          <li key={message.id} className={styleItem(message?.isRead)}>
            <input
              type='checkbox'
              name='message'
              className={styles.checkbox}
              checked={checkboxes[message.id]}
              onChange={() => handleChange(message.id)}
            />
            <NavLink
              to={`${message.id}`}
              className={styles.link}
              onClick={() =>
                dispatch(readMessage({ box: box as string, id: message.id }))
              }
            >
              <h4 className={styles.name}>{message.name}</h4>
              <p className={styles.content}>{message.content}</p>
              <p className={styles.date}>{message.date}</p>
            </NavLink>
          </li>
        ))}
        {!mail?.messages.length && <h1>Сообщений пока нет</h1>}
      </ul>
    </main>
  )
}

export default MailBox
