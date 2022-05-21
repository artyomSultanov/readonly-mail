import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

import MAILS from '_data'

export interface Message {
  id: string
  name: string
  email: string
  content: string
  isRead?: boolean
  date: string
}

export interface Mail {
  id: string
  title: string
  messages: Message[]
  bookmark: boolean
  selected: boolean
}
export const blackListMails = ['inbox', 'sent', 'drafts', 'deleted', 'spam']

const initialState = MAILS as Mail[]

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    addMail: (state, action: PayloadAction<string>) => {
      state.push({
        id: action.payload.toLowerCase(),
        title: action.payload,
        messages: [],
        bookmark: false,
        selected: true,
      })
      state.forEach((mail) => {
        if (mail.title !== action.payload && mail.selected)
          mail.selected = false
      })
    },
    editMail: (state, action: PayloadAction<{ id: string; title: string }>) => {
      state.forEach((mail) => {
        if (mail.id === action.payload.id) {
          mail.title = action.payload.title
          mail.id = action.payload.title.toLowerCase()
        }
      })
    },
    deleteMail: (state, action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((mail) => mail.id === action.payload),
        1
      )
    },
    showMail: (state, action: PayloadAction<string>) => {
      state.forEach((mail) => {
        if (mail.id === action.payload) mail.selected = true
        if (mail.id !== action.payload && mail.selected) mail.selected = false
      })
    },
    readMessage: (
      state,
      action: PayloadAction<{ box: string; id: string }>
    ) => {
      state
        .find((mail: Mail) => mail.id === action.payload.box)
        ?.messages?.forEach((message: Message) => {
          if (message.id === action.payload.id) message.isRead = true
        })
    },
    deleteMessage: (
      state,
      action: PayloadAction<{ box: string; id: string }>
    ) => {
      let messages = state.find(
        (mail: Mail) => mail.id === action.payload.box
      )?.messages

      messages &&
        messages.splice(
          messages.findIndex(
            (message: Message) => message.id === action.payload.id
          ),
          1
        )
    },
  },
})

export const {
  addMail,
  editMail,
  deleteMail,
  showMail,
  readMessage,
  deleteMessage,
} = mailSlice.actions
export const selectMails = (state: RootState) => state.mail

export default mailSlice.reducer
