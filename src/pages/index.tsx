import { Routes, Route, Navigate } from 'react-router-dom'

import Layout from 'components/Layout'
import MailBox from 'pages/mail-box'
import MessageBox from 'pages/message-box'
import NotFound from './not-found'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate to='/inbox' replace />} />
        <Route path=':box' element={<MailBox />} />
        <Route path=':box/:id' element={<MessageBox />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Router
