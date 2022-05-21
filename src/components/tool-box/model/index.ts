import { useAppDispatch, useAppSelector } from 'app/hooks'
import {
  deleteMessage,
  Message,
  readMessage,
  selectMails,
} from 'pages/mail-box/model'
import { batch } from 'react-redux'
import { useParams } from 'react-router-dom'
export type { ToolBoxProp } from './types'
const useToolBox = () => {
  const mails = useAppSelector(selectMails)
  const dispatch = useAppDispatch()
  const { box } = useParams()

  const handleDispatch = (param: string, checked: any) => {
    mails.forEach((mail) => {
      if (mail.messages) {
        batch(() => {
          mail.messages.forEach((message: Message) => {
            if (message.id in checked) {
              if (param === 'DELETE') {
                dispatch(deleteMessage({ box: box as string, id: message.id }))
              } else {
                if (!message.isRead)
                  dispatch(readMessage({ box: box as string, id: message.id }))
              }
            }
          })
        })
      }
    })
  }

  return { handleDispatch }
}

export default useToolBox
