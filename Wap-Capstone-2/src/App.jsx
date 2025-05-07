import { useRef, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
// import About from './components/About/About'
// import Home from './components/Home/Home'
import AllProperties from './components/AllProperties/AllProperties'

function App() {
  const [left, setLeft] = useState(100)

  return (
    <>
    <Navbar/>
    {/* <Home/>
    <About/> */}
    <AllProperties/>
 
    </>
  )
}

export default App
