import { useRef, useState } from 'react'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [left, setLeft] = useState(100)

  return (
    <>
    <Navbar/>
    </>
  )
}

export default App
