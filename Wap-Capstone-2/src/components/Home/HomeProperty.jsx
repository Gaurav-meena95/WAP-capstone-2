import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomeProperty = ({ propertyData }) => {
  const navigate = useNavigate();
  
  const property = propertyData || {
    title: "Seaside Serenity Villa",
    price: "$550,000",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    location: "Miami Beach, FL",
    type: "Villa"
  };

  return (
    <div className='border_stl my-3 md:my-5 p-2 md:p-3 w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto'>
      <div className="w-full h-40 md:h-48 overflow-hidden rounded image-container">
        <img 
          src={property.image} 
          alt={property.title}
          className="home-property-image"
        />
      </div>

      <div className='my-6 md:my-10'>
        <div className=''><h1 className='text-lg md:text-xl'>{property.title}</h1></div>
        <div className='disply_flex my-4 md:my-10 flex-wrap gap-2'>
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
              className='bg-purple-600 p-2 rounded mb-0 cursor-pointer max-[432px]:w-20 max-[432px]:text-xs'
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

export default HomeProperty 