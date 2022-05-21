import mailReducer, {
  addMail,
  deleteMail,
  showMail,
  editMail,
  mailSlice,
  selectMails,
  Mail,
  Message,
  blackListMails,
  readMessage,
  deleteMessage,
} from './mailSlice'

export {
  addMail,
  deleteMail,
  showMail,
  editMail,
  mailSlice,
  selectMails,
  blackListMails,
  readMessage,
  deleteMessage,
}

export type { Mail, Message }

export default mailReducer
