import React from "react";
import Explore from "../Explore/Explore";
import Footer from "../Footer/Footer";
import Expirence from "../Expirence/Expirence";
const About = () => {
  return (
    <div className="text-white ">
      <div className="disply_flex bg-gray-900 mx-10 ">
        <div className="w-1/2">
          <div className=" mx-10 my-10">
            <h1 className="text-5xl my-10">Our Journey</h1>
            <p className="text-gray-500">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
          </div>
          <div>
            <Expirence />
          </div>
        </div>
        <div className="w-1/2 p-10">
          <img
            className="rounded"
            src="https://www.rismedia.com/wp-content/uploads/2021/03/luxury_real_estate_1150278000-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between items-center mx-10 ">
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
        <div className="w-full  flex p-20 my-10 shadow-amber-300 flex-wrap">
          <div className="border border-gray-800 rounded w-1/2 p-10">
            <div className="flex justify-start items-center gap-3">
              <img
                src="https://i.imghippo.com/files/Crm7545Y.png"
                alt="Trust"
              />
              <h3>Trust</h3>
            </div>
            <div>
              <p className="text-gray-600">
                Trust is the cornerstone of every successful real estate
                transaction.
              </p>
            </div>
          </div>
          <div className="border border-gray-800 rounded w-1/2 p-10">
            <div className="flex justify-start items-center gap-3">
              <img
                src="https://i.imghippo.com/files/xQL4950fY.png"
                alt="Excellence"
              />
              <h3>Excellence</h3>
            </div>
            <div>
              <p className="text-gray-600">
                We set the bar high for ourselves. From the properties we list
                to the services we provide.
              </p>
            </div>
          </div>
          <div className="border border-gray-800 rounded w-1/2 p-10">
            <div className="flex justify-start items-center gap-3">
              <img
                src="https://i.imghippo.com/files/Qx9726Jw.png"
                alt="Client-Centric"
              />
              <h3>Client-Centric</h3>
            </div>
            <div>
              <p className="text-gray-600">
                Your dreams and needs are at the center of our universe. We
                listen, understand..
              </p>
            </div>
          </div>
          <div className="border border-gray-800 rounded w-1/2 p-10">
            <div className="flex justify-start items-center gap-3">
              <img
                src="https://i.imghippo.com/files/Crm7545Y.png"
                alt="Our Commitment"
              />
              <h3>Our Commitment</h3>
            </div>
            <div>
              <p className="text-gray-600">
                Trust is the cornerstone of every successful real estate
                transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className=" w-full mx-10 my-10">
          <h1 className="my-10">Navigating the Estatein Experience</h1>
          <p className="w-250">
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
            <div className="inset-shadow-sm inset-shadow-purple-500  border border-purple-900 rounded-b-md rounded-r-md p-5">
              <h1 className="text-3xl">Discover a World of Possibilities</h1>
              <p className="text-gray-500 my-10">
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
            <div className="inset-shadow-sm inset-shadow-purple-500  border border-purple-900 rounded-b-md rounded-r-md p-5">
              <h1 className="text-3xl">Narrowing Down Your Choices</h1>
              <p className="text-gray-500 my-10">
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
            <div className="inset-shadow-sm inset-shadow-purple-500  border border-purple-900 rounded-b-md rounded-r-md p-5">
              <h1 className="text-3xl">Personalized Guidance</h1>
              <p className="text-gray-500 my-10">
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
            <div className="inset-shadow-sm inset-shadow-purple-500  border border-purple-900 rounded-b-md rounded-r-md p-5">
              <h1 className="text-3xl">See It for Yourself</h1>
              <p className="text-gray-500 my-10">
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
            <div className="inset-shadow-sm inset-shadow-purple-500  border border-purple-900 rounded-b-md rounded-r-md p-5">
              <h1 className="text-3xl">Making Informed Decisions</h1>
              <p className="text-gray-500 my-10">
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
            <div className="inset-shadow-sm inset-shadow-purple-500  border border-purple-900 rounded-b-md rounded-r-md p-5">
              <h1 className="text-3xl">Getting the Best Deal</h1>
              <p className="text-gray-500 my-10">
                We'll help you negotiate the best terms and prepare your offer.
                Our goal is to secure the property at the right price and on
                favorable terms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-10 max-[432px]:mx-10">
        <Explore />
      </div>
      <div className="mx-10 max-[432px]:mx-10">
        <Footer />
      </div>
    </div>
  );
};

export default About;
