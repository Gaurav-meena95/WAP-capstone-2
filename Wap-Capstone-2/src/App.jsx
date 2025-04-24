import { useRef, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Landing from './components/LandingPage/Landing'

function App() {
  const [left, setLeft] = useState(100)

  return (
    <>
    <Navbar/>
    <Landing/>
    <Footer/> 
    </>
  )
}

export default App
