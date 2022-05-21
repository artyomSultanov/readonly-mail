import { useAppDispatch, useAppSelector } from 'app/hooks'
import { addMail, selectMails, Mail } from 'pages/mail-box/model'
import { useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

const useForm = () => {
  const [value, setValue] = useState('')
  const dispatch = useAppDispatch()
  const mails = useAppSelector(selectMails) as Mail[]
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (/^\s+|\s+$/g.test(value) || value === '') return
    if (mails.find((mail) => mail.id === value.toLowerCase())) return

    dispatch(addMail(value))
    navigate(value)
    setValue('')
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return { value, handleSubmit, handleChange }
}

export default useForm
