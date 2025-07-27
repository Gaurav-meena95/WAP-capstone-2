import React, { useEffect } from "react";
import Explore from "../Explore/Explore";
import Expirence from "../Expirence/Expirence";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Feature from "./Feature";

const About = () => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Array of objects for features
  const featuresData = [
    {
      icon: "https://ik.imagekit.io/iyp2cf0jo/Icon%20Container.png?updatedAt=1752113697693",
      alt: "Trust",
      title: "Trust",
      description: "Trust is the cornerstone of every successful real estate transaction."
    },
    {
      icon: "https://ik.imagekit.io/iyp2cf0jo/Icon%20Container%20(1).png?updatedAt=1747466440350",
      alt: "Excellence",
      title: "Excellence",
      description: "We set the bar high for ourselves. From the properties we list to the services we provide."
    },
    {
      icon: "https://ik.imagekit.io/iyp2cf0jo/Icon%20Container%20(3).png?updatedAt=1747466595306",
      alt: "Client-Centric",
      title: "Client-Centric",
      description: "Your dreams and needs are at the center of our universe. We listen, understand.."
    },
    {
      icon: "https://ik.imagekit.io/iyp2cf0jo/Icon%20Container.png?updatedAt=1752113697693",
      alt: "Our Commitment",
      title: "Our Commitment",
      description: "Trust is the cornerstone of every successful real estate transaction."
    }
  ];

  // Array of objects for process steps
  const processSteps = [
    {
      id: 1,
      step: "Step 01",
      title: "Discover a World of Possibilities",
      description: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location."
    },
    {
      id: 2,
      step: "Step 02",
      title: "Narrowing Down Your Choices",
      description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
    },
    {
      id: 3,
      step: "Step 03",
      title: "Personalized Guidance",
      description: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
    },
    {
      id: 4,
      step: "Step 04",
      title: "See It for Yourself",
      description: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."
    },
    {
      id: 5,
      step: "Step 05",
      title: "Making Informed Decisions",
      description: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed."
    },
    {
      id: 6,
      step: "Step 06",
      title: "Getting the Best Deal",
      description: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."
    }
  ];

  // Array of objects for team members
  const teamMembers = [
    {
      id: 1,
      name: "Max Mitchell",
      position: "Founder",
      image: "https://ik.imagekit.io/iyp2cf0jo/Image%20(3).png?updatedAt=1747469176135",
      email: "max@estatein.com"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Chief Real Estate Officer",
      image: "https://ik.imagekit.io/iyp2cf0jo/Image%20(6).png?updatedAt=1747469146296",
      email: "sarah@estatein.com"
    },
    {
      id: 3,
      name: "David Brown",
      position: "Head of Property Management",
      image: "https://ik.imagekit.io/iyp2cf0jo/Image%20(5).png?updatedAt=1747469060851",
      email: "david@estatein.com"
    },
    {
      id: 4,
      name: "Lisa Anderson",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      email: "lisa@estatein.com"
    }
  ];

  // Array of objects for company stats
  const companyStats = [
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
      <div className="flex flex-col md:flex-row bg-gray-900 mx-10">
        <div className="w-full md:w-1/2">
          <div className="mx-10 my-10 max-[432px]:mx-1 px-10">
            <h1 className="text-5xl my-10 max-[432px]:text-4xl">
              Our Journey
            </h1>
            <p className="text-gray-500">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
          </div>
          <Expirence />
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-10 image-container">
          <img
            className="responsive-image mobile-image rounded"
            src="https://www.rismedia.com/wp-content/uploads/2021/03/luxury_real_estate_1150278000-1.jpg"
            alt="Estatein office"
          />
        </div>
      </div>
      
      <div className="flex justify-between items-center bg-gray-950 mx-10 p-10 my-10 max-[432px]:flex-wrap">
        <div className="w-160">
          <div>
            <h1>Our Values</h1>
            <p className="text-gray-600 my-10">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center my-10 flex-wrap">
          <Feature features={featuresData} />
        </div>
      </div>
      
      <div className="bg-gray-950 rounded-sm py-10 mx-10">
        <div className="w-full mx-10 my-10">
          <h1 className="my-10">Navigating the Estatein Experience</h1>
          <p className="w-250 max-[432px]:w-80 max-[432px]:text-[16px]">
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
        <div className=" my-10 flex justify-center items-center flex-wrap gap-2">
          {processSteps.map((step) => (
            <div key={step.id} className="w-115 h-1/4">
              <div className="border-l-1 border-purple-900">
                <h1 className="text-3xl mx-2 mt-10">{step.step}</h1>
              </div>
              <div className="steps">
                <h1 className="text-3xl max-[432px]:text-2xl">
                  {step.title}
                </h1>
                <p className="text-gray-500 my-10 max-[432px]:text-[16px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-950 py-10 my-5 rounded-sm mx-10">
        <div className="w-full mx-10 my-10">
          <h1 className="my-10">Meet the Estatein Team</h1>
          <p className="w-250 max-[432px]:w-80 max-[432px]:text-[16px]">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>
        </div>
        <div className="profile flex gap-4 justify-center items-center flex-wrap">
          {teamMembers.map((member) => (
            <div key={member.id} className="border_stl w-80">
              <div className="image-container">
                <img
                  className="team-image mobile-image"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="mx-10 mt-10">
                <div className="text-center">
                  <h2 className="text-white">{member.name}</h2>
                  <p className="">{member.position}</p>
                </div>
              </div>
              <div className="flex items-center mx-5">
                <input
                  type="text"
                  className="border border-gray-600 rounded-3xl my-5 py-2 px-10 w-full block"
                  placeholder="Say Hello"
                />
                <div className="mx-[-40px] cursor-pointer rounded-r-xl">
                  <FontAwesomeIcon className="text-2xl text-purple-600" icon={faPaperPlane} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="stats-section bg-gray-950 py-20 my-10 mx-10 rounded-sm">
        <div className="mx-10">
          <h1 className="text-center mb-10">Our Achievements</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat) => (
              <div key={stat.id} className="text-center">
                <h2 className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</h2>
                <p className="text-xl font-semibold mb-1">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Explore />
    </div>
  );
};

export default About;
