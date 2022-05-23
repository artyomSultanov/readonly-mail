import { FC } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { NavLink } from 'react-router-dom'
import {
  Mail,
  selectMails,
  showMail,
  blackListMails,
} from 'pages/mail-box/model'

import { FaTrash } from 'react-icons/fa'

import cn from 'classnames'

import styles from './styles.module.css'
import CreateForm from 'components/create-form'
import EditForm from './EditForm'
import useEditForm from '../model'

const NavBar: FC = () => {
  const mails = useAppSelector(selectMails) as Mail[]
  const dispatch = useAppDispatch()
  const { handleDelete } = useEditForm()

  const styleLink = (selected: Boolean) =>
    cn(styles.link, selected ? styles.active : '')

  return (
    <nav className={styles.nav}>
      <CreateForm />
      <ul className={styles.list}>
        {mails.map((mail: Mail) => (
          <li key={mail.id} className={styles.item}>
            <NavLink
              to={`/${mail.id}`}
              className={styleLink(mail.selected)}
              onClick={() => dispatch(showMail(mail.id))}
            >
              {mail.title}
            </NavLink>
            <div className={styles.icons}>
              {!blackListMails.includes(mail.id) && (
                <>
                  <EditForm id={mail.id} title={mail.title} />
                  <FaTrash onClick={() => handleDelete(mail.id)} />
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
