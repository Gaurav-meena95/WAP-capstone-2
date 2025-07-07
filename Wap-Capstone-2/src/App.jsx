import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Home from './components/Home/Home'
import AllProperties from './components/AllProperties/AllProperties'
import ContactForm from './components/ContactForm/ContactForm'
import Explore from './components/Explore/Explore'
import Expirence from './components/Expirence/Expirence'
import PropertyDetails from './components/PropertyDetails/PropertyDetails'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<AllProperties />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/experience" element={<Expirence />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>
        <div className='px-10'>
        <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
