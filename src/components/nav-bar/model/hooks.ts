import { useAppDispatch, useAppSelector } from 'app/hooks'
import {
  deleteMail,
  editMail,
  Mail,
  selectMails,
  showMail,
} from 'pages/mail-box/model'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const useForm = () => {
  const [value, setValue] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const dispatch = useAppDispatch()
  const mails = useAppSelector(selectMails) as Mail[]
  const navigate = useNavigate()
  const { box } = useParams()
  const handleSubmit = (event: FormEvent, id: string) => {
    event.preventDefault()
    if (/^\s+|\s+$/g.test(value) || value === '') return
    mails.forEach((mail) => {
      if (mail.id === id) {
        dispatch(editMail({ id, title: value }))
        dispatch(showMail(value.toLowerCase()))
        navigate(value)
        handleEdit()
        setValue('')
      }
    })
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleDelete = (id: string) => {
    dispatch(deleteMail(id))
    if (box === id) {
      dispatch(showMail('inbox'))
      navigate('inbox')
    }
  }
  const handleEdit = () => setIsEdit((state) => !state)

  return { value, handleSubmit, handleChange, handleDelete, handleEdit, isEdit }
}

export default useForm
