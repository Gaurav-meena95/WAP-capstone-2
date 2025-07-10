function Feature({ features }){
    return (
        <>
        {features.map((feature, index) => (
          <div key={index} className="border border-gray-800 rounded-lg w-90 mx-2 my-2 p-10">
            <div className="flex justify-start items-center gap-3">
              <img
                src={feature.icon}
                alt={feature.alt}
              />
              <h3>{feature.title}</h3>
            </div>
            <div>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
        </>
    )
}
export default Feature;