import React, { useEffect } from 'react'
import mail from "../../assets/mail.png"
import call from "../../assets/call.png"
import handel from "../../assets/handel.png"
import location from "../../assets/location.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='px-10 py-20 bg-gray-950'>
        <h1>Get in Touch with Estatein</h1>
        <p className='my-10'>Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.</p>
      </div>
      
      {/* Contact Info Cards - Using existing phone_grid class */}
      <div className="disply_flex phone_grid my-10">
        <div className="home_cont_2 grid_w border_stl">
          <div className="image-container my-3">
            <img className="feature-icon" src={mail} alt="Email" />
          </div>
          <p className='text-amber-50'>info@estatein.com</p>
        </div>
        <div className="home_cont_2 grid_w border_stl">
          <div className="image-container my-3">
            <img className="feature-icon" src={call} alt="Phone" />
          </div>
          <p className='text-amber-50'>+1 (123) 456-7890</p>
        </div>
        <div className="home_cont_2 grid_w border_stl">
          <div className="image-container my-3">
            <img className="feature-icon" src={location} alt="Location" />
          </div>
          <p className='text-amber-50'>Main Headquarters</p>
        </div>
        <div className="home_cont_2 grid_w border_stl">
          <div className="image-container my-3">
            <img className="feature-icon" src={handel} alt="Social Media" />
          </div>
          <div className='flex gap-4 underline max-[432px]:flex-col max-[432px]:gap-2'>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-10 py-10">
        <div className='py-20'>
          <h1>Let's Connect</h1>
          <p className='mt-5'>We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.</p>
        </div>
        <form className='space-y-6 p-10 border border-gray-800 rounded-lg'>
          {/* Personal Information - 1 row, 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-gray-300 mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter First Name"
                className="bg-[#1f232bd4] px-5 py-3 rounded-md border border-gray-600 focus:border-purple-600 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-gray-300 mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name"
                className="bg-[#1f232bd4] px-5 py-3 rounded-md border border-gray-600 focus:border-purple-600 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="bg-[#1f232bd4] px-5 py-3 rounded-md border border-gray-600 focus:border-purple-600 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Additional Information - 1 row, 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-300 mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter Phone Number"
                className="bg-[#1f232bd4] px-5 py-3 rounded-md border border-gray-600 focus:border-purple-600 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="location" className="text-gray-300 mb-2">Inquiry Type</label>
              <select
                id="location"
                name="location"
                required
                className="bg-[#1f232bd4] px-5 py-3 rounded-md border border-gray-600 focus:border-purple-600 focus:outline-none transition-colors"
              >
                <option value="">Select Inquiry Type</option>
                <option value="buying">Buying Property</option>
                <option value="selling">Selling Property</option>
                <option value="renting">Renting Property</option>
                <option value="investment">Investment</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="propertyType" className="text-gray-300 mb-2">How Did You Hear About Us?</label>
              <select
                id="propertyType"
                name="propertyType"
                required
                className="bg-[#1f232bd4] px-5 py-3 rounded-md border border-gray-600 focus:border-purple-600 focus:outline-none transition-colors"
              >
                <option value="">Select</option>
                <option value="social">Social Media</option>
                <option value="search">Search Engine</option>
                <option value="referral">Friend/Family Referral</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Message Section */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message here..."
              className="bg-[#1f232bd4] px-5 py-3 rounded-md border border-gray-600 focus:border-purple-600 focus:outline-none transition-colors resize-none"
            ></textarea>
          </div>

          {/* Submit Button and Terms Checkbox */}
          <div className="flex md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-600 focus:ring-2"
              />
              <label htmlFor="terms" className="text-gray-300 text-sm">
                I agree with <a href="#" className="text-purple-400 hover:text-purple-300 underline">Terms of Use</a> and <a href="#" className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</a>
              </label>
            </div>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md transition-colors duration-300 font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm