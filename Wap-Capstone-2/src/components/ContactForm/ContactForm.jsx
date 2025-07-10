import React from 'react'
import mail from "../../assets/mail.png"
import call from "../../assets/call.png"
import handel from "../../assets/handel.png"
import location from "../../assets/location.png"

const ContactForm = () => {
  return (
    <>
      <div className="disply_flex  phone_grid my-10">
        <div className="home_cont_2 grid_w border_stl ">
          <img className="my-3" src={mail} alt="" />
          <p className='text-amber-50'>info@estatein.com</p>
        </div>
        <div className="home_cont_2 grid_w border_stl ">
          <img className="my-3" src={call} alt="" />
          <p className='text-amber-50'>+1 (123) 456-7890</p>
        </div>
        <div className="home_cont_2 grid_w border_stl ">
          <img className="my-3" src={location} alt="" />
          <p className='text-amber-50'>Main Headquarters</p>
        </div>
        <div className="home_cont_2 grid_w border_stl ">
          <img className="my-3" src={handel} alt="" />
          <div className='flex gap-4 underline'> 
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm