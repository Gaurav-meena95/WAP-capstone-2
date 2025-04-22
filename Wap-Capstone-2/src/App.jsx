import { useRef, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  const [left, setLeft] = useState(100)

  return (
    <>
    <Navbar/>
    <Footer/> 
    </>
  )
}

export default App
