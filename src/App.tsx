import Router from 'pages'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import './app/styles/index.css'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
