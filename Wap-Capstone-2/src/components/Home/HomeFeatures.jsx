function HomeFeatures({ features, home, unlock, effort, smart }) {

    return (
        <>
            <div className="disply_flex phone_grid mx-8 my-10">
                {features.map((feature) => (
                    <div key={feature.id} className="home_cont_2 grid_w border_stl">
                        <div className="w-16 h-16 mx-auto my-3 image-container">
                            <img 
                                className="feature-icon" 
                                src={feature.image} 
                                alt={feature.alt} 
                            />
                        </div>
                        <p>{feature.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomeFeatures;