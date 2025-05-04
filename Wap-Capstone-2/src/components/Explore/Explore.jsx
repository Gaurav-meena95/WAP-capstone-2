import React from 'react'

const Explore = () => {
  return (
    <div className="disply_flex  max-[432px]:flex-col p-10  border_stl">
    <div>
      <h1>Start Your Real Estate Journey Today</h1>
      <p className="text-gray-500 my-5">
        Your dream property is just a click away. Whether you're looking for
        a new home, a strategic investment, or expert real estate advice,
        Estatein is here to assist you every step of the way. Take the first
        step towards your real estate goals and explore our available
        properties or get in touch with our team for personalized
        assistance.
      </p>
    </div>
    <div className=" mx-10">
      <button className="bg-purple-600 p-2 rounded  w-50">
        Explore Properties
      </button>
    </div>
  </div>
  )
}

export default Explore;