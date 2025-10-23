import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookAppointmentForm from './components/BookAppointmentForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookAppointmentForm/>
    </>
  )
}

export default App
