import React, { useEffect } from "react";
import Explore from "../Explore/Explore";
import HomeFeatures from "../Home/HomeFeatures";
import home from "../../assets/home2.png";
import effort from "../../assets/effort.png";
import smart from "../../assets/smart.png";
import unlock from "../../assets/unlock.png";
import Feature from "../About/Feature";

function Services() {
    // Add useEffect to scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    // Home features data for HomeFeatures component
    const homeFeaturesData = [
        {
          id: 1,
          image: home,
          title: "Find Your Dream Home",
          alt: "Home icon",
          description: "Discover properties that match your lifestyle and preferences"
        },
        {
          id: 2,
          image: unlock,
          title: "Unlock Property Value",
          alt: "Unlock icon",
          description: "Get the best value for your property with our expert services"
        },
        {
          id: 3,
          image: effort,
          title: "Effortless Property Management",
          alt: "Effort icon",
          description: "Let us handle all aspects of property management for you"
        },
        {
          id: 4,
          image: smart,
          title: "Smart Investments, Informed Decisions",
          alt: "Smart icon",
          description: "Make informed investment decisions with our market insights"
        }
    ];

    const ServicefeaturesData = [
        {
          icon :'https://ik.imagekit.io/iyp2cf0jo/Icon%20Container%20(1).png?updatedAt=1752117108129',
          alt: "Valuation Mastery",
          title: "Valuation Mastery",
          description: "Discover the true worth of your property with our expert valuation services."
        },
        {
          icon: "https://ik.imagekit.io/iyp2cf0jo/Icon%20Container%20(2).png?updatedAt=1752117205900",
          alt: "Strategic Marketing",
          title: "Strategic Marketing",
          description: "Selling a property requires more than just a listing; it demands a strategic marketing."
        },
        {
          icon: "https://ik.imagekit.io/iyp2cf0jo/Icon%20Container%20(3).png?updatedAt=1752117240687",
          alt: "Negotiation Wizardry",
          title: "Negotiation Wizardry",
          description: "Negotiating the best deal is an art, and our negotiation experts are masters of it."
        },
        {
          icon: "https://ik.imagekit.io/iyp2cf0jo/Icon%20Container%20(4).png?updatedAt=1752117653846",
          alt: "Closing Success",
          title: "Closing Success",
          description: "A successful sale is not complete until the closing. We guide you through the intricate closing process."
        }
    ];

    const PropertMangment = [
        {
            icon :'https://ik.imagekit.io/iyp2cf0jo/Icon%20Container%20(5).png?updatedAt=1752118254840',
            alt: "Tenant Harmony",
            title: "Tenant Harmony",
            description: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
        },
        {
            icon: "https://ik.imagekit.io/iyp2cf0jo/Icon%20Container%20(6).png?updatedAt=1752118346008",
            alt: "Maintenance Ease",
            title: "Maintenance Ease",
            description: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
        },
        {
            icon: "https://ik.imagekit.io/iyp2cf0jo/Icon%20Container%20(7).png?updatedAt=1752118388485",
            alt: "Financial Peace of Mind",
            title: "Financial Peace of Mind",
            description: "Managing property finances can be complex. Our financial experts take care of rent collection"
        },
        {
            icon: "https://ik.imagekit.io/iyp2cf0jo/Icon%20Container%20(8).png?updatedAt=1752118419591",
            alt: "Legal Guardian",
            title: "Legal Guardian",
            description: "Stay compliant with property laws and regulations effortlessly."
        }
    ];

    return (
        <>
        <div className="px-4 sm:px-6 md:px-10 p-10 md:p-20 bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h1 className="mb-4 max-[432px]:text-2xl">Elevate Your Real Estate Experience</h1>
                <p className="text-gray-500">Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.</p>
            </div>
        </div>
        
        <HomeFeatures features={homeFeaturesData} />
        
        <div className="px-4 sm:px-6 md:px-10 rounded border border-gray-700 my-6 md:my-10 p-4 sm:p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="mb-4 max-[432px]:text-2xl">Unlock Property Value</h1>
                <p className="text-gray-500 mb-6 md:mb-8">Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey</p>
            </div>
            <div className="flex flex-col md:flex-row my-6 md:my-10 bg-gray-950 rounded-lg overflow-hidden">
                <Feature features={ServicefeaturesData}/>
            </div>
        </div>
        
        <div className="px-4 sm:px-6 md:px-10 rounded border border-gray-700 my-6 md:my-10 p-4 sm:p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="mb-4 max-[432px]:text-2xl">Effortless Property Management</h1>
                <p className="text-gray-500 mb-6 md:mb-8">Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you</p>
            </div>
            <div className="flex flex-col md:flex-row my-6 md:my-10 bg-gray-950 rounded-lg overflow-hidden">
                <Feature features={PropertMangment}/>
            </div>
        </div>
        
        <Explore />
        </>
    );
}

export default Services;