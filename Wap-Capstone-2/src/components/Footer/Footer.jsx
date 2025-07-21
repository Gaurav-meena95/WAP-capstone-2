import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // Array of objects for footer navigation links
  const footerLinks = [
    {
      id: 1,
      title: "Home",
      links: [
        { id: 1, name: "Features", url: "#features" },
        { id: 2, name: "Properties", url: "#properties" },
        { id: 3, name: "Testimonials", url: "#testimonials" },
        { id: 4, name: "FAQs", url: "#faqs" }
      ]
    },
    {
      id: 2,
      title: "About Us",
      links: [
        { id: 1, name: "Our Story", url: "#story" },
        { id: 2, name: "Our Team", url: "#team" },
        { id: 3, name: "Careers", url: "#careers" },
        { id: 4, name: "Press", url: "#press" }
      ]
    },
    {
      id: 3,
      title: "Properties",
      links: [
        { id: 1, name: "Portfolio", url: "#portfolio" },
        { id: 2, name: "Categories", url: "#categories" },
        { id: 3, name: "Featured Listings", url: "#featured" },
        { id: 4, name: "Recently Sold", url: "#sold" }
      ]
    },
    {
      id: 4,
      title: "Services",
      links: [
        { id: 1, name: "Valuation Mastery", url: "#valuation" },
        { id: 2, name: "Strategic Marketing", url: "#marketing" },
        { id: 3, name: "Closing Success", url: "#closing" },
        { id: 4, name: "Property Management", url: "#management" }
      ]
    },
    {
      id: 5,
      title: "Contact Us",
      links: [
        { id: 1, name: "Contact Form", url: "#contact" },
        { id: 2, name: "Our Offices", url: "#offices" },
        { id: 3, name: "Support", url: "#support" },
        { id: 4, name: "Live Chat", url: "#chat" }
      ]
    }
  ];

  // Array of objects for social media links
  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com",
      color: "hover:text-gray-400"
    },
    {
      id: 2,
      name: "Instagram",
      icon: faInstagram,
      url: "https://instagram.com",
      color: "hover:text-pink-400"
    },
    {
      id: 3,
      name: "Facebook",
      icon: faFacebook,
      url: "https://facebook.com",
      color: "hover:text-blue-400"
    },
    {
      id: 4,
      name: "Twitter",
      icon: faTwitter,
      url: "https://twitter.com",
      color: "hover:text-blue-300"
    },
    {
      id: 5,
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://linkedin.com",
      color: "hover:text-blue-500"
    },
    {
      id: 6,
      name: "YouTube",
      icon: faYoutube,
      url: "https://youtube.com",
      color: "hover:text-red-400"
    }
  ];

  // Array of objects for company info
  const companyInfo = {
    name: "AuctionHub",
    description: "Your trusted partner in real estate. We help you find, buy, sell, and manage properties with excellence and integrity.",
    email: "info@AuctionHub.com",
    phone: "+1 (555) 123-4567",
    address: "123 Real Estate Ave, Property City, PC 12345"
  };

  // Array of objects for quick links
  const quickLinks = [
    { id: 1, name: "Privacy Policy", url: "#privacy" },
    { id: 2, name: "Terms of Service", url: "#terms" },
    { id: 3, name: "Cookie Policy", url: "#cookies" },
    { id: 4, name: "Sitemap", url: "#sitemap" }
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-16 ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 ">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-4 text-center lg:text-left">{companyInfo.name}</h1>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center lg:text-left">
                {companyInfo.description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6 text-center lg:text-left">
              <div className="flex items-center text-gray-400 text-sm justify-center lg:justify-start">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-3 text-purple-400" />
                <span>{companyInfo.email}</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm justify-center lg:justify-start">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-3 text-purple-400" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-start text-gray-400 text-sm justify-center lg:justify-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-3 mt-1 text-purple-400" />
                <span>{companyInfo.address}</span>
              </div>
            </div>

          
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
              {footerLinks.map((section) => (
                <div key={section.id} className="space-y-4 text-center">
                  <h3 className="text-white font-semibold text-lg border-b border-gray-700 pb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.id}>
                        <a 
                          href={link.url}
                          className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-center">
            
            {/* Copyright and Legal Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 justify-center text-center">
              <span className="text-gray-400 text-sm">
                © 2023 {companyInfo.name}. All Rights Reserved.
              </span>
              <div className="flex space-x-4 justify-center">
                {quickLinks.map((link) => (
                  <a 
                    key={link.id} 
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 justify-center">
              {socialLinks.map((social) => (
                <a 
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 rounded-full hover:bg-gray-800`}
                  title={social.name}
                >
                  <FontAwesomeIcon className="text-xl" icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;