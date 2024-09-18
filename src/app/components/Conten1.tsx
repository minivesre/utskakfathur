"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const Conten1: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen px-8 lg:px-16">
      {/* Left Section: Text */}
      <section className="flex-1 flex flex-col justify-center lg:order-1 order-2">
        <div className="max-w-lg lg:pr-20">
          <h1 className="text-4xl font-bold text-white leading-snug">
            Choose how you want to work
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            In Team, you’ve got all the flexibility to work when, where, and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="flex items-center text-blue-600 font-semibold text-lg hover:underline"
            >
              Learn more <FiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Right Section: Image */}
      <section className="flex-1 flex justify-center items-center lg:order-2 order-1 mb-8 lg:mb-0">
        <div className="relative w-full max-w-lg h-auto">
          <Image
            src="/af.png" // Pastikan gambar ada di folder 'public'
            alt="Chats UI"
            width={600} // Ubah width sesuai kebutuhan
            height={400} // Ubah height sesuai kebutuhan
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Conten1;
