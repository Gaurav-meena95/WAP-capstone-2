import Explore from "../Explore/Explore";
import HomeFeatures from "../Home/HomeFeatures";
import home from "../../assets/home2.png";
import effort from "../../assets/effort.png";
import smart from "../../assets/smart.png";
import unlock from "../../assets/unlock.png";

function Services() {
    return (
        <>
        <div className="px-10 p-20 bg-gray-900 ">
            <div>
                <h1 className="mb-4">Elevate Your Real Estate Experience</h1>
                <p>Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.</p>
            </div>
        </div>
            <HomeFeatures
                home={home}
                unlock={unlock}
                effort={effort}
                smart={smart}
            />
            <Explore />
            <div className="px-10 rounded border border-gray-700 my-10 p-10">
                <div>
                    <h1>Unlock Property Value</h1>
                    <p>Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey</p>
                </div>
                <div className="bg-amber-700">
                    

                </div>
            </div>
        </>
    );
}

export default Services;