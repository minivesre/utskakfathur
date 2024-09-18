import React from 'react';
import Image from 'next/image'; // Import untuk gambar avatar
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Ikon navigasi

const testimonials = [
  {
    name: "Rhino",
    position: "CEO of Subway",
    image: "/pic3.jpg", // Path gambar di folder public
    feedback: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
  },
  {
    name: "Ray",
    position: "CMO of Samsung",
    image: "/pic1.jpg", // Path gambar di folder public
    feedback: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultricies lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
  },
  {
    name: "Zayne",
    position: "Senior VP of Pinterest",
    image: "/pic2.jpg", // Path gambar di folder public
    feedback: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
  }
];

const Review: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">What people say about Team</h2>
      <div className="flex flex-row space-x-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-72">
            <div className="flex justify-between items-center">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 1.75l2.832 8.705h9.168l-7.416 5.39 2.832 8.705L12 19.16l-7.416 5.39 2.832-8.705-7.416-5.39h9.168L12 1.75z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
            <div className="flex items-center space-x-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50} // Ukuran gambar kecil
                height={50} // Ukuran gambar kecil
                className="rounded-full object-cover" // Gambar bulat penuh
                layout="fixed" // Ukuran tetap untuk memastikan gambar tidak berubah
              />
              <div>
                <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigasi panah */}
      <div className="flex space-x-4 mt-8">
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FiChevronLeft size={24} />
        </button>
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Review;
