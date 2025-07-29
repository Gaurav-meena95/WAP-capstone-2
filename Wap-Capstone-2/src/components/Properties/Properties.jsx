import React, { useState } from 'react'
import house from '../../assets/house.png'
import { useNavigate } from 'react-router-dom';

const Properties = ({ propertyData }) => {
  const navigate = useNavigate();

  return (
    <div className='border_stl my-3 md:my-5 p-2 md:p-3 w-full sm:max-w-xs md:max-w-md lg:max-w-lg mx-auto'>
      <div className="w-full h-40 md:h-48 overflow-hidden rounded image-container">
        <img 
          src={propertyData.image} 
          alt={propertyData.title}
          className="property-image"
        />
      </div>

      <div className='my-6 md:my-10'>
        <div className=''><h1 className='text-lg md:text-xl'>{propertyData.title}</h1></div>
        <div className='disply_flex my-4 md:my-10 flex-wrap gap-2'>
          <span className='proprty_btn border_stl'>{propertyData.bedrooms}-bedroom</span>
          <span className='proprty_btn border_stl'>{propertyData.bathrooms}-Bathroom</span>
          <span className='proprty_btn border_stl'>{propertyData.type}</span>
        </div>
        <div className='flex justify-between gap-1 items-end'>
          <div>
            <p className='text-gray-500'>Price</p>
            <h1 className='max-[432px]:text-2xl'>{propertyData.price}</h1>
          </div>
          <div>
            <button 
              className='bg-purple-600 p-2 rounded mb-0 cursor-pointer max-[432px]:w-20 max-[432px]:text-xs'
              onClick={() => navigate(`/property/${propertyData.id}`, { state: { property: propertyData } })}
            >
              View Property Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Properties