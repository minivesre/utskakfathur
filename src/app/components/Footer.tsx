import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#20203A] text-white py-12">
      <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Section: Logo and Description */}
        <div className="md:col-span-1">
          <h1 className="text-3xl font-bold mb-2">team.</h1>
          <p className="text-gray-400">
            Collaboration platform for modern team
          </p>
        </div>

        {/* Middle Section: Links */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:underline">Product</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Support</a></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Features</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:underline">Screen Sharing</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">iOS & Android Apps</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">File Sharing</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">User Management</a></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">info@teamapp.com</li>
            <li className="text-gray-400">1-800-200-300</li>
            <li className="text-gray-400">1010 Sunset Blvd, Palo Alto, California</li>
          </ul>
        </div>

        {/* Right Section: Newsletter */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Stay up to date</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-gray-600 px-4 py-2 rounded-r-md hover:bg-gray-700">
              <FiArrowRight className="text-white" />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500">
        © Copyright Team Inc.
      </div>
    </footer>
  );
};

export default Footer;
