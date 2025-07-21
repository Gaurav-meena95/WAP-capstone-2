import home from "../../assets/home2.png";
import effort from "../../assets/effort.png";
import smart from "../../assets/smart.png";
import unlock from "../../assets/unlock.png";

function HomeFeatures({ features, home, unlock, effort, smart }) {
    // Default features if no props are passed (for Services component)
    const defaultFeatures = [
        {
            id: 1,
            image: home,
            title: "Find Your Dream Home",
            alt: "Home icon"
        },
        {
            id: 2,
            image: unlock,
            title: "Unlock Property Value",
            alt: "Unlock icon"
        },
        {
            id: 3,
            image: effort,
            title: "Effortless Property Management",
            alt: "Effort icon"
        },
        {
            id: 4,
            image: smart,
            title: "Smart Investments, Informed Decisions",
            alt: "Smart icon"
        }
    ];

    // Use provided features or default features
    const displayFeatures = features || defaultFeatures;

    return (
        <>
            <div className="disply_flex phone_grid my-10">
                {displayFeatures.map((feature) => (
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