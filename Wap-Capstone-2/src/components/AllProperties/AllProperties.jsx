import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Properties from "../Properties/Properties";

const AllProperties = () => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Array of objects for filter options - UPDATED to match actual property locations
  const filterOptions = {
    locations: [
      { id: 1, value: "miami beach", label: "Miami Beach, FL" },
      { id: 2, value: "downtown", label: "Downtown, NY" },
      { id: 3, value: "aspen", label: "Aspen, CO" },
      { id: 4, value: "malibu", label: "Malibu, CA" },
      { id: 5, value: "manhattan", label: "Manhattan, NY" },
      { id: 6, value: "napa valley", label: "Napa Valley, CA" },
      { id: 7, value: "chicago", label: "Chicago, IL" },
      { id: 8, value: "scottsdale", label: "Scottsdale, AZ" },
      { id: 9, value: "boston", label: "Boston, MA" },
      { id: 10, value: "lake tahoe", label: "Lake Tahoe, CA" },
      { id: 11, value: "austin", label: "Austin, TX" },
      { id: 12, value: "newport beach", label: "Newport Beach, CA" },
      { id: 13, value: "seattle", label: "Seattle, WA" },
      { id: 14, value: "denver", label: "Denver, CO" },
      { id: 15, value: "boulder", label: "Boulder, CO" }
    ],
    propertyTypes: [
      { id: 1, value: "apartment", label: "Apartment" },
      { id: 2, value: "house", label: "House" },
      { id: 3, value: "villa", label: "Villa" },
      { id: 4, value: "condo", label: "Condominium" },
      { id: 5, value: "townhouse", label: "Townhouse" },
      { id: 6, value: "penthouse", label: "Penthouse" },
      { id: 7, value: "mansion", label: "Mansion" },
      { id: 8, value: "cabin", label: "Cabin" },
      { id: 9, value: "farmhouse", label: "Farmhouse" },
      { id: 10, value: "duplex", label: "Duplex" },
      { id: 11, value: "loft", label: "Loft" }
    ],
    priceRanges: [
      { id: 1, value: "0-200000", label: "$0 - $200,000" },
      { id: 2, value: "200000-400000", label: "$200,000 - $400,000" },
      { id: 3, value: "400000-600000", label: "$400,000 - $600,000" },
      { id: 4, value: "600000-800000", label: "$600,000 - $800,000" },
      { id: 5, value: "800000-1000000", label: "$800,000 - $1,000,000" },
      { id: 6, value: "1000000+", label: "$1,000,000+" }
    ],
    propertySizes: [
      { id: 1, value: "0-1000", label: "0 - 1,000 sq ft" },
      { id: 2, value: "1000-2000", label: "1,000 - 2,000 sq ft" },
      { id: 3, value: "2000-3000", label: "2,000 - 3,000 sq ft" },
      { id: 4, value: "3000-4000", label: "3,000 - 4,000 sq ft" },
      { id: 5, value: "4000+", label: "4,000+ sq ft" }
    ],
    buildYears: [
      { id: 1, value: "2020+", label: "2020 and newer" },
      { id: 2, value: "2010-2019", label: "2010 - 2019" },
      { id: 3, value: "2000-2009", label: "2000 - 2009" },
      { id: 4, value: "1990-1999", label: "1990 - 1999" },
      { id: 5, value: "1980-1989", label: "1980 - 1989" },
      { id: 6, value: "pre-1980", label: "Pre-1980" }
    ]
  };

  // Array of objects for all properties (15+ items)
  const allProperties = [
    {
      id: 1,
      title: "Seaside Serenity Villa",
      price: "$550,000",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Miami Beach, FL",
      type: "villa",
      size: "2,500 sq ft",
      yearBuilt: 2020
    },
    {
      id: 2,
      title: "Modern Downtown Apartment",
      price: "$350,000",
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Downtown, NY",
      type: "apartment",
      size: "1,200 sq ft",
      yearBuilt: 2019
    },
    {
      id: 3,
      title: "Luxury Mountain Retreat",
      price: "$750,000",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Aspen, CO",
      type: "mansion",
      size: "4,500 sq ft",
      yearBuilt: 2021
    },
    {
      id: 4,
      title: "Coastal Beach House",
      price: "$650,000",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Malibu, CA",
      type: "house",
      size: "2,800 sq ft",
      yearBuilt: 2018
    },
    {
      id: 5,
      title: "Urban Penthouse Suite",
      price: "$1,200,000",
      bedrooms: 3,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Manhattan, NY",
      type: "penthouse",
      size: "3,200 sq ft",
      yearBuilt: 2022
    },
    {
      id: 6,
      title: "Rustic Country Farmhouse",
      price: "$450,000",
      bedrooms: 4,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Napa Valley, CA",
      type: "farmhouse",
      size: "3,500 sq ft",
      yearBuilt: 2015
    },
    {
      id: 7,
      title: "Contemporary City Condo",
      price: "$280,000",
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Chicago, IL",
      type: "condo",
      size: "850 sq ft",
      yearBuilt: 2020
    },
    {
      id: 8,
      title: "Desert Oasis Villa",
      price: "$850,000",
      bedrooms: 5,
      bathrooms: 4,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Scottsdale, AZ",
      type: "villa",
      size: "5,200 sq ft",
      yearBuilt: 2021
    },
    {
      id: 9,
      title: "Historic Townhouse",
      price: "$420,000",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Boston, MA",
      type: "townhouse",
      size: "2,100 sq ft",
      yearBuilt: 1920
    },
    {
      id: 10,
      title: "Lakeside Cabin Retreat",
      price: "$380,000",
      bedrooms: 2,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Lake Tahoe, CA",
      type: "cabin",
      size: "1,800 sq ft",
      yearBuilt: 2017
    },
    {
      id: 11,
      title: "Modern Duplex Home",
      price: "$520,000",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Austin, TX",
      type: "duplex",
      size: "3,000 sq ft",
      yearBuilt: 2019
    },
    {
      id: 12,
      title: "Oceanfront Luxury Estate",
      price: "$2,500,000",
      bedrooms: 6,
      bathrooms: 5,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Newport Beach, CA",
      type: "mansion",
      size: "8,500 sq ft",
      yearBuilt: 2023
    },
    {
      id: 13,
      title: "Downtown Loft Space",
      price: "$320,000",
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Seattle, WA",
      type: "loft",
      size: "1,100 sq ft",
      yearBuilt: 2018
    },
    {
      id: 14,
      title: "Suburban Family Home",
      price: "$480,000",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Denver, CO",
      type: "house",
      size: "2,800 sq ft",
      yearBuilt: 2016
    },
    {
      id: 15,
      title: "Mountain View Condo",
      price: "$290,000",
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      location: "Boulder, CO",
      type: "condo",
      size: "1,400 sq ft",
      yearBuilt: 2020
    }
  ];

  // Array of objects for FAQ section
  const faqData = [
    {
      id: 1,
      question: "How do I schedule a property viewing?",
      answer: "You can schedule a viewing by contacting our team through the contact form or calling our office directly."
    },
    {
      id: 2,
      question: "What documents do I need to buy a property?",
      answer: "You'll need proof of income, bank statements, identification documents, and pre-approval from a lender."
    },
    {
      id: 3,
      question: "How long does the buying process take?",
      answer: "The typical buying process takes 30-45 days from offer acceptance to closing."
    },
    {
      id: 4,
      question: "Do you offer financing options?",
      answer: "We work with multiple lenders and can help you find the best financing options for your situation."
    },
    {
      id: 5,
      question: "What are the closing costs?",
      answer: "Closing costs typically range from 2-5% of the purchase price and include various fees and taxes."
    }
  ];

  // Array of objects for clients_Data
  const clients_Data = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Home Buyer",
      image: "https://ik.imagekit.io/iyp2cf0jo/Image%20(6).png?updatedAt=1747469146296",
      text: "Estatein made buying my first home incredibly smooth. Their team was professional and guided me through every step."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "I've worked with many real estate companies, but Estatein's attention to detail and market knowledge is unmatched."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Home Seller",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "They sold my property above asking price in just two weeks. Highly recommend their services!"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    propertySize: "",
    buildYear: ""
  });

  const propertiesPerPage = 6;

  const filteredProperties = allProperties.filter(property => {
    if (filters.location) {
      const propertyLocation = property.location.toLowerCase();
      const filterLocation = filters.location.toLowerCase();
      
      if (!propertyLocation.includes(filterLocation)) {
        return false;
      }
    }
    
    if (filters.propertyType && property.type.toLowerCase() !== filters.propertyType.toLowerCase()) {
      return false;
    }
    
    // Price range filter
    if (filters.priceRange) {
      const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, ''));
      
      if (filters.priceRange === "1000000+") {
        if (propertyPrice < 1000000) return false;
      } else {
        const [min, max] = filters.priceRange.split('-').map(p => parseInt(p));
        if (propertyPrice < min || propertyPrice > max) return false;
      }
    }
    
    // Property size filter
    if (filters.propertySize) {
      const propertySize = parseInt(property.size.replace(/[^0-9]/g, ''));
      
      if (filters.propertySize === "4000+") {
        if (propertySize < 4000) return false;
      } else {
        const [min, max] = filters.propertySize.split('-').map(p => parseInt(p));
        if (propertySize < min || propertySize > max) return false;
      }
    }
    
    // Build year filter
    if (filters.buildYear) {
      const propertyYear = property.yearBuilt;
      
      if (filters.buildYear === "2020+") {
        if (propertyYear < 2020) return false;
      } else if (filters.buildYear === "2010-2019") {
        if (propertyYear < 2010 || propertyYear > 2019) return false;
      } else if (filters.buildYear === "2000-2009") {
        if (propertyYear < 2000 || propertyYear > 2009) return false;
      } else if (filters.buildYear === "1990-1999") {
        if (propertyYear < 1990 || propertyYear > 1999) return false;
      } else if (filters.buildYear === "1980-1989") {
        if (propertyYear < 1980 || propertyYear > 1989) return false;
      } else if (filters.buildYear === "pre-1980") {
        if (propertyYear >= 1980) return false;
      }
    }
    
    return true;
  });

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  // Fixed getCurrentProperties to use filteredProperties
  const getCurrentProperties = () => {
    const startIndex = (currentPage - 1) * propertiesPerPage;
    const endIndex = startIndex + propertiesPerPage;
    return filteredProperties.slice(startIndex, endIndex);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      location: "",
      propertyType: "",
      priceRange: "",
      propertySize: "",
      buildYear: ""
    });
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="px-10 my-10 py-10 max-[432px]:px-5 max-[432px]:py-10 mx-10 bg-gray-900">
        <h1 className="text-4xl font-bold mb-4 max-[432px]:text-2xl">All Properties</h1>
        <p className="text-gray-400 mb-8 max-[432px]:text-sm">
          Discover our comprehensive collection of properties available for purchase, rent, or investment.
        </p>
      </div>

      {/* Filter Section */}
      <div className="px-10 mb-8 max-[432px]:px-5">
        <div className="bg-gray-900 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Filter Properties</h2>
            <button 
              onClick={clearFilters}
              className="text-purple-400 hover:text-purple-300 text-sm underline cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <select 
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">All Locations</option>
                {filterOptions.locations.map(location => (
                  <option key={location.id} value={location.value}>{location.label}</option>
                ))}
              </select>
            </div>

            {/* Property Type Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Property Type</label>
              <select 
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                value={filters.propertyType}
                onChange={(e) => handleFilterChange('propertyType', e.target.value)}
              >
                <option value="">All Types</option>
                {filterOptions.propertyTypes.map(type => (
                  <option key={type.id} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <select 
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">All Prices</option>
                {filterOptions.priceRanges.map(range => (
                  <option key={range.id} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>

            {/* Property Size Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Property Size</label>
              <select 
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                value={filters.propertySize}
                onChange={(e) => handleFilterChange('propertySize', e.target.value)}
              >
                <option value="">All Sizes</option>
                {filterOptions.propertySizes.map(size => (
                  <option key={size.id} value={size.value}>{size.label}</option>
                ))}
              </select>
            </div>

            {/* Build Year Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Build Year</label>
              <select 
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                value={filters.buildYear}
                onChange={(e) => handleFilterChange('buildYear', e.target.value)}
              >
                <option value="">All Years</option>
                {filterOptions.buildYears.map(year => (
                  <option key={year.id} value={year.value}>{year.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-400">
            Showing {filteredProperties.length} of {allProperties.length} properties
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="mx-10 rounded-sm py-8 mb-8 max-[432px]:px-5 bg-gray-900">
        {filteredProperties.length > 0 ? (
          <div className="mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-[432px]:hidden px-10">
            {getCurrentProperties().map((property) => (
              <Properties key={property.id} propertyData={property} />
            ))}
            </div>
            </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No properties found</h3>
            <p className="text-gray-400 mb-4">Try adjusting your filters or clear all filters to see all properties.</p>
            <button 
              onClick={clearFilters}
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredProperties.length > 0 && (
        <div className="px-10 mb-8 max-[432px]:px-5">
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 hover:bg-gray-700 transition-colors"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded transition-colors ${
                  currentPage === page 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 hover:bg-gray-700 transition-colors"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="px-10 mb-8 max-[432px]:px-5">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map(faq => (
              <div key={faq.id} className="border-b border-gray-700 pb-4">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* clients_Data Section */}
      <div className="px-10 mb-8 max-[432px]:px-5">
        <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients_Data.map(testimonial => (
            <div key={testimonial.id} className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AllProperties;
