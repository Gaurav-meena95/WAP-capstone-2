import { useRef, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Landing from './components/LandingPage/Landing'
import About from './components/About/About'

function App() {
  const [left, setLeft] = useState(100)

  return (
    <>
    <Navbar/>
    <Landing/>
    <About/>
    <Footer/> 
    </>
  )
}

export default App
