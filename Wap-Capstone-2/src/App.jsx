import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import PublicRoute from './components/Auth/PublicRoute'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Home from './components/Home/Home'
import AllProperties from './components/AllProperties/AllProperties'
import ContactForm from './components/ContactForm/ContactForm'
import Expirence from './components/Expirence/Expirence'
import PropertyDetails from './components/PropertyDetails/PropertyDetails'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
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
              {/* Public routes - accessible to everyone */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } />
              <Route path="/signup" element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              } />
              <Route path="/forgot-password" element={
                <PublicRoute>
                  <ForgotPassword />
                </PublicRoute>
              } />

              {/* Protected routes - require authentication */}
              <Route path="/about" element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              } />
              <Route path="/properties" element={
                <ProtectedRoute>
                  <AllProperties />
                </ProtectedRoute>
              } />
              <Route path="/contact" element={
                <ProtectedRoute>
                  <ContactForm />
                </ProtectedRoute>
              } />
              <Route path="/services" element={
                <ProtectedRoute>
                  <Services />
                </ProtectedRoute>
              } />
              <Route path="/experience" element={
                <ProtectedRoute>
                  <Expirence />
                </ProtectedRoute>
              } />
              <Route path="/property/:id" element={
                <ProtectedRoute>
                  <PropertyDetails />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <div className='px-10 my-10'>
            <Footer />
          </div>
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App
