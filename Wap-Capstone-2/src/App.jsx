import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Home from './components/Home/Home'
import AllProperties from './components/AllProperties/AllProperties'
import ContactForm from './components/ContactForm/ContactForm'
import Expirence from './components/Expirence/Expirence'
import PropertyDetails from './components/PropertyDetails/PropertyDetails'
import Footer from './components/Footer/Footer'
import Services from './components/Services/services'
import LiveAuctions from './components/LiveAuctions/LiveAuctions'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import ForgotPassword from './components/Auth/ForgotPassword'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/properties" element={<AllProperties />} />
              <Route path="/auctions" element={<LiveAuctions />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/services" element={<Services />} />
              <Route path="/experience" element={<Expirence />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </main>
          <div className='px-10'>
            <Footer />
          </div>
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App
