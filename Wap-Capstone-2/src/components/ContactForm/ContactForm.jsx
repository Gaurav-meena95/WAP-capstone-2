import React, { useEffect, useState } from 'react'
import mail from "../../assets/mail.png"
import call from "../../assets/call.png"
import handel from "../../assets/handel.png"
import location from "../../assets/location.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(false);
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbykK10vEcUZBPuMCLwTjQBwS5nic7r8-rE-MO1CvvMfFjQ1-8I3_u4KQNL6FE4IGTY9/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      inquiryType: form.inquiryType.value,
      source: form.hearAboutUs.value,
      message: form.message.value,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Your message has been submitted!");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='px-10 py-10 bg-gray-900 mx-10'>
        <h1>Get in Touch with Estatein</h1>
        <p className='my-10'>Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.</p>
      </div>

      <div className="disply_flex phone_grid my-10 mx-8">
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

      <div className="">
        <div className='bg-gray-950 mx-10 py-10 px-10 my-10'>
          <h1>Let's Connect</h1>
          <p className='mt-5'>We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.</p>
        </div>
        <form onSubmit={handleSubmit} className='space-y-6 p-10 border border-gray-800 bg-gray-950 rounded-lg mx-10'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-gray-300 mb-2">First Name *</label>
              <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" required className="contactForm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-gray-300 mb-2">Last Name </label>
              <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name"  className="contactForm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-300 mb-2">Email *</label>
              <input type="email" id="email" name="email" placeholder="Enter your Email" required className="contactForm" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-300 mb-2">Phone *</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter Phone Number" required className="contactForm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="inquiryType" className="text-gray-300 mb-2">Inquiry Type *</label>
              <select id="inquiryType" name="inquiryType" required className="contactForm">
                <option value="">Select Inquiry Type</option>
                <option value="buying">Buying Property</option>
                <option value="selling">Selling Property</option>
                <option value="renting">Renting Property</option>
                <option value="investment">Investment</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="hearAboutUs" className="text-gray-300 mb-2">How Did You Hear About Us? *</label>
              <select id="hearAboutUs" name="hearAboutUs" required className="contactForm">
                <option value="">Select</option>
                <option value="social">Social Media</option>
                <option value="search">Search Engine</option>
                <option value="referral">Friend/Family Referral</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 mb-2">Message *</label>
            <textarea id="message" name="message" rows="4" placeholder="Enter your message here..." required className="contactForm resize-none"></textarea>
          </div>

          <div className="flex md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" name="terms" required className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-600 focus:ring-2" />
              <label htmlFor="terms" className="text-gray-300 text-sm">
                I agree with <a href="#" className="text-purple-400 hover:text-purple-300 underline">Terms of Use</a> and <a href="#" className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</a> *
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-purple-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
              } text-white px-8 py-3 rounded-md transition-colors duration-300 font-medium`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
