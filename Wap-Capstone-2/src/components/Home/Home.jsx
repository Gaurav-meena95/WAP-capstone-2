import React, { useState } from "react";
import home from "../../assets/home2.png";
import effort from "../../assets/effort.png";
import smart from "../../assets/smart.png";
import unlock from "../../assets/unlock.png";
import Properties from "../Properties/Properties";
import Footer from "../Footer/Footer";
import Explore from "../Explore/Explore";
import Expirence from "../Expirence/Expirence";
import HomeFeatures from "./HomeFeatures";

const Home = () => {
  // Array of objects for hero section buttons
  const heroButtons = [
    {
      id: 1,
      text: "Learn More",
      className: "border_stl p-2 hover:bg-gray-800 transition-colors",
      action: () => console.log("Learn More clicked")
    },
    {
      id: 2,
      text: "Browse Properties",
      className: "bg-purple-600 p-2 rounded hover:bg-purple-700 transition-colors",
      action: () => console.log("Browse Properties clicked")
    },
    {
      id: 3,
      text: "Contact Us",
      className: "border_stl p-2 hover:bg-gray-800 transition-colors",
      action: () => console.log("Contact Us clicked")
    }
  ];

  // Array of objects for home features
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

  // Array of objects for featured properties (15+ items)
  const featuredProperties = [
    {
      id: 1,
      title: "Seaside Serenity Villa",
      price: "$550,000",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Miami Beach, FL",
      type: "Villa",
      size: "2,500 sq ft",
      yearBuilt: 2020,
      features: ["Ocean View", "Pool", "Garden", "Garage"],
      status: "For Sale"
    },
    {
      id: 2,
      title: "Modern Downtown Apartment",
      price: "$350,000",
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Downtown, NY",
      type: "Apartment",
      size: "1,200 sq ft",
      yearBuilt: 2019,
      features: ["City View", "Gym", "Concierge", "Parking"],
      status: "For Sale"
    },
    {
      id: 3,
      title: "Luxury Mountain Retreat",
      price: "$750,000",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Aspen, CO",
      type: "Mansion",
      size: "4,500 sq ft",
      yearBuilt: 2021,
      features: ["Mountain View", "Fireplace", "Hot Tub", "Ski Access"],
      status: "For Sale"
    },
    {
      id: 4,
      title: "Coastal Beach House",
      price: "$650,000",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Malibu, CA",
      type: "House",
      size: "2,800 sq ft",
      yearBuilt: 2018,
      features: ["Beach Access", "Deck", "Ocean View", "Fire Pit"],
      status: "For Sale"
    },
    {
      id: 5,
      title: "Urban Penthouse Suite",
      price: "$1,200,000",
      bedrooms: 3,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Manhattan, NY",
      type: "Penthouse",
      size: "3,200 sq ft",
      yearBuilt: 2022,
      features: ["City View", "Terrace", "Elevator", "Doorman"],
      status: "For Sale"
    },
    {
      id: 6,
      title: "Rustic Country Farmhouse",
      price: "$450,000",
      bedrooms: 4,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Napa Valley, CA",
      type: "Farmhouse",
      size: "3,500 sq ft",
      yearBuilt: 2015,
      features: ["Vineyard View", "Barn", "Garden", "Fireplace"],
      status: "For Sale"
    },
    {
      id: 7,
      title: "Contemporary City Condo",
      price: "$280,000",
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Chicago, IL",
      type: "Condominium",
      size: "850 sq ft",
      yearBuilt: 2020,
      features: ["City View", "Gym", "Pool", "Parking"],
      status: "For Sale"
    },
    {
      id: 8,
      title: "Desert Oasis Villa",
      price: "$850,000",
      bedrooms: 5,
      bathrooms: 4,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Scottsdale, AZ",
      type: "Villa",
      size: "5,200 sq ft",
      yearBuilt: 2021,
      features: ["Desert View", "Pool", "Golf Course", "Spa"],
      status: "For Sale"
    },
    {
      id: 9,
      title: "Historic Townhouse",
      price: "$420,000",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Boston, MA",
      type: "Townhouse",
      size: "2,100 sq ft",
      yearBuilt: 1920,
      features: ["Historic", "Garden", "Fireplace", "Hardwood Floors"],
      status: "For Sale"
    },
    {
      id: 10,
      title: "Lakeside Cabin Retreat",
      price: "$380,000",
      bedrooms: 2,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Lake Tahoe, CA",
      type: "Cabin",
      size: "1,800 sq ft",
      yearBuilt: 2017,
      features: ["Lake View", "Deck", "Fireplace", "Boat Dock"],
      status: "For Sale"
    },
    {
      id: 11,
      title: "Modern Duplex Home",
      price: "$520,000",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Austin, TX",
      type: "Duplex",
      size: "3,000 sq ft",
      yearBuilt: 2019,
      features: ["Modern Design", "Garden", "Garage", "Smart Home"],
      status: "For Sale"
    },
    {
      id: 12,
      title: "Oceanfront Luxury Estate",
      price: "$2,500,000",
      bedrooms: 6,
      bathrooms: 5,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Newport Beach, CA",
      type: "Mansion",
      size: "8,500 sq ft",
      yearBuilt: 2023,
      features: ["Ocean View", "Pool", "Tennis Court", "Wine Cellar"],
      status: "For Sale"
    },
    {
      id: 13,
      title: "Downtown Loft Space",
      price: "$320,000",
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Seattle, WA",
      type: "Loft",
      size: "1,100 sq ft",
      yearBuilt: 2018,
      features: ["Industrial Design", "High Ceilings", "Exposed Brick", "City View"],
      status: "For Sale"
    },
    {
      id: 14,
      title: "Suburban Family Home",
      price: "$480,000",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Denver, CO",
      type: "House",
      size: "2,800 sq ft",
      yearBuilt: 2016,
      features: ["Family Room", "Garden", "Garage", "Basement"],
      status: "For Sale"
    },
    {
      id: 15,
      title: "Mountain View Condo",
      price: "$290,000",
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Boulder, CO",
      type: "Condominium",
      size: "1,400 sq ft",
      yearBuilt: 2020,
      features: ["Mountain View", "Balcony", "Gym", "Pool"],
      status: "For Sale"
    }
  ];

  // Array of objects for section content
  const sectionContent = {
    hero: {
      title: "Discover Your Dream Property with Estatein",
      description: "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.",
      image: "https://wallpapers.com/images/hd/dark-luxury-house-and-tall-glass-windows-cll7wwtf2mmy19zu.jpg"
    },
    featured: {
      title: "Top Featured Properties",
      description: "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click \"View Details\" for more information."
    }
  };

  // Array of objects for statistics
  const statistics = [
    {
      id: 1,
      number: "500+",
      label: "Properties Sold",
      description: "Successfully closed transactions"
    },
    {
      id: 2,
      number: "1000+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide"
    },
    {
      id: 3,
      number: "15+",
      label: "Years Experience",
      description: "Industry expertise and knowledge"
    },
    {
      id: 4,
      number: "50+",
      label: "Team Members",
      description: "Dedicated professionals"
    }
  ];

  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="disply_flex bg-gray-900 border border-gray-600 phone">
        <div className="text_cont">
          <div className="mx-10 my-10">
            <h1 className="text-2xl md:text-4xl">
              {sectionContent.hero.title}
            </h1>
            <p className="text-gray-500">
              {sectionContent.hero.description}
            </p>
          </div>
          <div className="flex gap-6 mx-10 my-10">
            {heroButtons.map((button) => (
              <button 
                key={button.id}
                className={button.className}
                onClick={button.action}
              >
                {button.text}
              </button>
            ))}
          </div>
          <Expirence/>
        </div>
        <div className="w-full md:w-1/2 mx-10 flex max-[432px]:w-full max-[432px]:my-10 bg-contain">
          <img 
            className="rounded"
            src={sectionContent.hero.image} 
            alt="Luxury home showcase"
          />
        </div>
      </div>

      {/* Home Features Section */}
      <HomeFeatures features={homeFeaturesData} />

      {/* Statistics Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <div key={stat.id} className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">
                  {stat.number}
                </h2>
                <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div>
        <div className="flex my-10 mt-30 mx-10">
          <div>
            <h1>{sectionContent.featured.title}</h1>
            <p className="text-gray-500 my-5">
              {sectionContent.featured.description}
            </p>
          </div>
        </div>

        {/* Desktop Properties */}
        <div className="flex justify-around items-center phone gap-1 max-[432px]:hidden">
          {featuredProperties.slice(0, 3).map((property) => (
            <Properties 
              key={property.id}
              propertyData={property}
            />
          ))}
        </div>

        {/* Mobile Properties */}
        <div className="min-[432px]:hidden flex justify-around items-center phone gap-1">
          <Properties propertyData={featuredProperties[0]} />
        </div>

        <div className="flex justify-center items-center my-10">
          <button className="border_stl cursor-pointer p-3 w-50 max-[432px]:w-40 max-[432px]:text-xs hover:bg-gray-800 transition-colors">
            View All Properties
          </button>
        </div>

        <div className="my-10 mx-10">
          <Explore/>
        </div>
      </div>
    </div>
  );
};

export default Home;
