import React, { useState } from 'react'
import house from '../../assets/house.png'
import { useNavigate } from 'react-router-dom';

const Properties = ({ propertyData }) => {
  const navigate = useNavigate();
  // Default property data if none provided
  const property = propertyData || {
    title: "Seaside Serenity Villa",
    price: "$550,000",
    bedrooms: 3,
    bathrooms: 2,
    image: house,
    location: "Miami Beach, FL",
    type: "Villa"
  };

  return (
    <div className='border_stl my-5 p-3 w-100 max-[432px]:w-full max-[432px]:my-5'>
      <div className="w-full h-48 overflow-hidden rounded image-container">
        <img 
          src={property.image} 
          alt={property.title}
          className="property-image"
        />
      </div>

      <div className='my-10'>
        <div className=''><h1>{property.title}</h1></div>
        <div className='disply_flex my-10'>
          <span className='proprty_btn border_stl'>{property.bedrooms}-bedroom</span>
          <span className='proprty_btn border_stl'>{property.bathrooms}-Bathroom</span>
          <span className='proprty_btn border_stl'>{property.type}</span>
        </div>
        <div className='flex justify-between gap-1 items-end'>
          <div>
            <p className='text-gray-500'>Price</p>
            <h1 className='max-[432px]:text-2xl'>{property.price}</h1>
          </div>
          <div>
            <button 
              className='bg-purple-600 p-2 rounded mb-0 cursor-pointer max-[432px]:w-50 max-[432px]:text-10px'
              onClick={() => navigate(`/property/${property.id}`)}
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