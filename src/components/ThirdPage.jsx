import React from 'react';

function ThirdPage() {
  return (
    <>
      <div className="flex items-center justify-between w-full p-6 h-96 bg-yellow-50">
        <div className="flex items-center justify-between w-full h-full">
          {/* Left Content */}
          <div className="w-1/2 px-6 text-left">
            <h1 className="mb-4 text-4xl font-bold text-green-800">Amrutam Home App</h1>
            <p className="mb-8 text-gray-700">
              The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.
            </p>
            <h2 className="mb-4 text-2xl font-bold text-black">
              Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
            </h2>
            <h3 className="mb-6 text-xl font-bold text-black">Get The App Now</h3>
            <div className="flex justify-start space-x-4">
              <button className="p-3 text-white bg-black rounded-md">Google Play</button>
              <button className="p-3 text-white bg-black rounded-md">App Store</button>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex justify-center w-1/2 h-full">
            <img
              src="/11img.png"
              alt="App Screenshot"
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#d0d2ce] py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-[#4a5a3f]">Information</h2>
          <ul className="mt-4 text-[#4a5a3f]">
            <li className="mt-2">About Us</li>
            <li className="mt-2">Terms and Conditions</li>
            <li className="mt-2">Privacy Policy</li>
            <li className="mt-2">Privacy Policy for Mobile Apps</li>
            <li className="mt-2">Shipping and Returns Policy</li>
            <li className="mt-2">International Delivery</li>
            <li className="mt-2">For Businesses, Hotels and Resorts</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ThirdPage;
