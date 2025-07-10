import React from "react";
import Explore from "../Explore/Explore";
import Footer from "../Footer/Footer";
import Expirence from "../Expirence/Expirence";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Feature from "./Feature";
const About = () => {
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
  return (
    <div className="text-white  ">
      <div className="flex flex-col md:flex-row bg-gray-900 mx-2">
        <div className="w-full md:w-1/2">
          <div className=" mx-10 my-10 max-[432px]:mx-1 px-10 ">
            <h1 className="text-5xl my-10 max-[432px]:text-4xl ">
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
        <div className="w-full md:w-1/2 p-4 md:p-10">
          <img
            className="rounded w-full h-auto max-w-xs md:max-w-full"
            src="https://www.rismedia.com/wp-content/uploads/2021/03/luxury_real_estate_1150278000-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between items-center mx-10 my-10 max-[432px]:flex-wrap ">
        <div className="w-160 ">
          <div>
            <h1>Our Values</h1>
            <p className="text-gray-600 my-10">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
        </div>
        <div className="w-full  flex justify-center  my-10 shadow-amber-300 flex-wrap">
        <Feature features={featuresData}/>
          </div>
      </div>
      <div className="main">
        <div className=" w-full mx-10 my-10 ">
          <h1 className="my-10">Navigating the Estatein Experience</h1>
          <p className="w-250 max-[432px]:w-80 max-[432px]:text-[16px]">
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
        <div className="mx-10 my-10 flex justify-center items-center flex-wrap gap-2">
          <div className="w-115 h-1/4">
            <div className=" border-l-1 border-purple-900">
              <h1 className="text-3xl mx-2 mt-10 ">Step 01</h1>
            </div>
            <div className="steps">
              <h1 className="text-3xl max-[432px]:text-2xl">
                Discover a World of Possibilities
              </h1>
              <p className="text-gray-500 my-10 max-[432px]:text-[16px]">
                Your journey begins with exploring our carefully curated
                property listings. Use our intuitive search tools to filter
                properties based on your preferences, including location.
              </p>
            </div>
          </div>
          <div className="w-115 h-1/4">
            <div className=" border-l-1 border-purple-900">
              <h1 className="text-3xl mx-2 mt-10 ">Step 02</h1>
            </div>
            <div className="steps">
              <h1 className="text-3xl max-[432px]:text-2xl">
                Narrowing Down Your Choices
              </h1>
              <p className="text-gray-500 my-10 max-[432px]:text-[16px]">
                Once you've found properties that catch your eye, save them to
                your account or make a shortlist. This allows you to compare and
                revisit your favorites as you make your decision.
              </p>
            </div>
          </div>
          <div className="w-115 h-1/4">
            <div className=" border-l-1 border-purple-900">
              <h1 className="text-3xl mx-2 mt-10 ">Step 03</h1>
            </div>
            <div className="steps">
              <h1 className="text-3xl max-[432px]:text-2xl">
                Personalized Guidance
              </h1>
              <p className="text-gray-500 my-10 max-[432px]:text-[16px]">
                Have questions about a property or need more information? Our
                dedicated team of real estate experts is just a call or message
                away.
              </p>
            </div>
          </div>
          <div className="w-115 h-1/4">
            <div className=" border-l-1 border-purple-900">
              <h1 className="text-3xl mx-2 mt-10 ">Step 04</h1>
            </div>
            <div className="steps">
              <h1 className="text-3xl max-[432px]:text-2xl">
                See It for Yourself
              </h1>
              <p className="text-gray-500 my-10 max-[432px]:text-[16px]">
                Arrange viewings of the properties you're interested in. We'll
                coordinate with the property owners and accompany you to ensure
                you get a firsthand look at your potential new home.
              </p>
            </div>
          </div>
          <div className="w-115 h-1/4">
            <div className=" border-l-1 border-purple-900">
              <h1 className="text-3xl mx-2 mt-10 ">Step 05</h1>
            </div>
            <div className="steps">
              <h1 className="text-3xl max-[432px]:text-2xl">
                Making Informed Decisions
              </h1>
              <p className="text-gray-500 my-10 max-[432px]:text-[16px]">
                Before making an offer, our team will assist you with due
                diligence, including property inspections, legal checks, and
                market analysis. We want you to be fully informed.
              </p>
            </div>
          </div>
          <div className="w-115 h-1/4">
            <div className=" border-l-1 border-purple-900">
              <h1 className="text-3xl mx-2 mt-10 ">Step 06</h1>
            </div>
            <div className="steps">
              <h1 className="text-3xl max-[432px]:text-2xl">
                Getting the Best Deal
              </h1>
              <p className="text-gray-500 my-10 max-[432px]:text-[16px]">
                We'll help you negotiate the best terms and prepare your offer.
                Our goal is to secure the property at the right price and on
                favorable terms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="w-full mx-10 my-10">
          <h1 className="my-10">Meet the Estatein Team</h1>
          <p className="w-250 max-[432px]:w-80 max-[432px]:text-[16px]">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>
        </div>
        <div className="profile flex gap-4 justify-center items-center  flex-wrap">
          <div className="border_stl w-80 ">
            <div className=" flex justify-center items-center ">
              <img
                className="w-90 h-80 p-5 max-[432px]:h-70 "
                src="https://ik.imagekit.io/iyp2cf0jo/Image%20(3).png?updatedAt=1747469176135"
                alt=""
              />
            </div>
            <div className="  mx-10 mt-10   ">
              <div className="text-center">
                <h2 className="text-white  ">Max Mitchell</h2>
                <p className="">Founder</p>
              </div>
            </div>
            <div className=" flex items-center mx-5">
              <input
                type="text"
                className="border border-gray-600 rounded-3xl my-5 py-2 px-10 w-full  block"
                placeholder="Say Hello"
              />
              <div className=" mx-[-40px] cursor-pointer rounded-r-xl">
                <FontAwesomeIcon className="text-2xl text-purple-600" icon={faPaperPlane} />
              </div>
            </div>
          </div>
          <div className="border_stl w-80">
            <div className=" flex justify-center items-center ">
              <img
                className="w-90 h-80 p-5 max-[432px]:h-70"
                src="https://ik.imagekit.io/iyp2cf0jo/Image%20(6).png?updatedAt=1747469146296"
                alt=""
              />
            </div>
            <div className="  mx-10 mt-10   ">
              <div className="text-center">
                <h2 className="text-white  ">Sarah Johnson</h2>
                <p className="">Chief Real Estate Officer</p>
              </div>
            </div>
            <div className=" flex items-center mx-5">
              <input
                type="text"
                className="border border-gray-600 rounded-3xl my-5 py-2 px-10 w-full  block"
                placeholder="Say Hello"
              />
              <div className=" mx-[-40px] cursor-pointer rounded-r-xl">
                <FontAwesomeIcon className="text-2xl text-purple-600" icon={faPaperPlane} />
              </div>
            </div>
          </div>
          <div className="border_stl w-80">
            <div className=" flex justify-center items-center ">
              <img
                className="w-90 h-80 p-5 max-[432px]:h-70"
                src="https://ik.imagekit.io/iyp2cf0jo/Image%20(5).png?updatedAt=1747469060851"
                alt=""
              />
            </div>
            <div className="  mx-10 mt-10   ">
              <div className="text-center w-full">
                <h2 className="text-white  ">David Brown</h2>
                <p className="">Head of Property Managment</p>
              </div>
            </div>
            <div className=" flex items-center mx-5">
              <input
                type="text"
                className="border border-gray-600 rounded-3xl my-5 py-2 px-10 w-full  block"
                placeholder="Say Hello"
              />
              <div className=" mx-[-40px] cursor-pointer rounded-r-xl">
                <FontAwesomeIcon className="text-2xl text-purple-600" icon={faPaperPlane} />
              </div>
            </div>
          </div>
          <div className="border_stl w-80">
            <div className=" flex justify-center items-center ">
              <img
                className="w-90 h-80 p-5 max-[432px]:h-70"
                src="https://ik.imagekit.io/iyp2cf0jo/Image%20(7).png?updatedAt=1747469245145"
                alt=""
              />
            </div>
            <div className="  mx-10 mt-10   ">
              <div className="text-center">
                <h2 className="text-white  ">Michael Turner</h2>
                <p className="">Legal Counsel</p>
              </div>
            </div>
            <div className=" flex items-center mx-5">
              <input
                type="text"
                className="border border-gray-600 rounded-3xl my-5 py-2 px-10 w-full  block"
                placeholder="Say Hello"
              />
              <div className=" mx-[-40px] cursor-pointer rounded-r-xl">
                <FontAwesomeIcon className="text-2xl text-purple-600" icon={faPaperPlane} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 mx-10 max-[432px]:mx-10 max-[432px]:my-20 ">
        <Explore />
      </div>
    </div>
  );
};

export default About;
