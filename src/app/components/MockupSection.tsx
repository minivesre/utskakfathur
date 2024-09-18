"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const Mockup: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Bagian Kiri: Konten Teks */}
      <section className="flex-1 bg-gray-50 flex items-center justify-center px-8">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            Chats for your distributed teams
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Team combines the immediacy of real-time chat with an email
            threading model. With Team, you can catch up on important
            conversations while ignoring irrelevant ones.
          </p>
          <div className="mt-8">
            <a href="#" className="flex items-center text-blue-600 font-semibold text-lg">
              Learn more <FiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Bagian Kanan: Mockup Aplikasi */}
      <section className="flex-1  bg-gray-50  flex items-center justify-center px-8">
        <div className="relative w-full h-full">
          <Image
            src="/ab.png" // Path gambar yang ada di folder public
            alt="Chats UI"
            layout="fill" // Menggunakan layout fill agar gambar memenuhi seluruh area
            objectFit="contain" // Menghindari gambar terpotong, tetap menjaga rasio
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Mockup;
