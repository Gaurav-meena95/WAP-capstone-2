import React from 'react'
import house from '../../assets/house.png'

const Properties = () => {
  return (
    <div className='border_stl p-5 '>
      <div>
        <img src={house} alt="" />
      </div>

      <div className='my-10'>
        <div className=''><h1>Seaside Serenity Villa</h1></div>
        <div className='disply_flex my-10 '>
          <span className='border_stl py-1 px-2'>3-bedroom</span>
          <span className='border_stl py-1 px-2'>2-Bathroom</span>
          <span className='border_stl py-1 px-2'>2-Bathroom</span>
        </div>
        <div className='flex justify-between items-end '>
          <div>
            <p className='text-gray-500'>Price</p>
            <h1>$550,000</h1>
          </div>
          <div>
            <button className='bg-purple-600 p-2 rounded mb-0'>View Property Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Properties