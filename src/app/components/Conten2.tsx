"use client";

import React from "react";
import Image from "next/image"; // Using Image component from Next.js for optimization
import { FiArrowRight } from "react-icons/fi";

const Conten2: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section: Image */}
      <section className="lg:w-1/2 w-full h-full relative">
        <Image
          src="/bc.png" // Path to the uploaded image (place it in the 'public' folder)
          alt="Person using a laptop"
          layout="fill"
          objectFit="cover"
          priority
        />
      </section>

      {/* Right Section: Text Content */}
      <section className="flex-1 bg-gray-50 flex items-center justify-center px-8">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            Move Faster with your Team Tools
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            With your other work apps connected to Team, you 
            can work faster by switching tabs less. And with 
            poweful tools like Workflow Builder, you can 
            automate away routine tasks.
          </p>
          <div className="mt-8">
            <a href="#" className="flex items-center text-blue-600 font-semibold text-lg">
              Learn more <FiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div> // Close the main container div
  );
};

export default Conten2;
