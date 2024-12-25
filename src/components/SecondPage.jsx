import React from "react";

function SecondPage() {
  return (
    <>
      <div>
        <header className="relative">
          <img
            src="/6img.png"
            alt="Ayurvedic products"
            className="object-cover w-full h-96"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h1 className="text-3xl text-center md:text-4xl">
              Ready to restore harmony in <br></br>your mind, body and spirit?
            </h1>
            <button className="px-6 py-3 mt-4 text-lg text-white bg-green-800 rounded-full">
              Book a consultation
            </button>
          </div>
        </header>

        <section className="p-5 py-16 text-center bg-gray-100">
          <h2 className="text-3xl font-bold text-green-800">
            Our Ayurvedic Approach
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-700">
            At Amrutam we follow a unique and personalized approach to healing.
            Our expert practitioners begin each treatment process by conducting
            a thorough analysis of the patient's body type, medical history, and
            current health conditions.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 rounded-lg shadow-md bg-yellow-50">
              <div className="text-4xl font-bold text-green-800">1</div>
              <h3 className="mt-4 text-xl font-semibold">Make Appointment</h3>
              <p className="mt-2 text-gray-600">
                You must make an appointment in advance, to choose the service
                and date.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-yellow-50">
              <div className="text-4xl font-bold text-green-800">2</div>
              <h3 className="mt-4 text-xl font-semibold">Consultations</h3>
              <p className="mt-2 text-gray-600">
                The next stage involves a thorough consultation with an Ayurveda
                practitioner.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-yellow-50">
              <div className="text-4xl font-bold text-green-800">3</div>
              <h3 className="mt-4 text-xl font-semibold">Treatment Planning</h3>
              <p className="mt-2 text-gray-600">
                The Ayurvedic practitioner creates a personalized treatment plan
                for you.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-yellow-50">
              <div className="text-4xl font-bold text-green-800">4</div>
              <h3 className="mt-4 text-xl font-semibold">Maintenance</h3>
              <p className="mt-2 text-gray-600">
                These visits allow for assessment of progress, adjustments to
                the treatment.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center py-10 bg-yellow-50">
          <h1 className="mb-8 text-2xl font-bold text-green-900 md:text-4xl">
            Stories from our valued customers!
          </h1>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="p-6 bg-white rounded-lg shadow-lg w-80">
              <div className="p-2 bg-purple-100 rounded-t-lg">
                <p className="text-sm font-semibold text-purple-700">
                  Consulted for Skin
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="/10img.png"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">Sophie Moore</p>
                  <p className="text-sm text-gray-500">Chennai</p>
                </div>
                <p className="ml-auto text-sm text-gray-500">17/02/24</p>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                </div>
                <p className="mt-2 text-lg font-semibold">
                  “One of a kind service”
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Ultrices eros in cursus turpis massa tincidunt sem nulla
                  pharetra diam sit amet nisl suscipit adipiscing.
                </p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg w-80">
              <div className="p-2 bg-green-100 rounded-t-lg">
                <p className="text-sm font-semibold text-green-700">
                  Consulted for hair
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="/7img.png"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">Sophie Moore</p>
                  <p className="text-sm text-gray-500">Mumbai</p>
                </div>
                <p className="ml-auto text-sm text-gray-500">17/02/24</p>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                </div>
                <p className="mt-2 text-lg font-semibold">
                  “One of a kind service”
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Ultrices eros in cursus turpis massa tincidunt sem nulla
                  pharetra diam sit amet nisl suscipit adipiscing.
                </p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg w-80">
              <div className="p-2 bg-green-100 rounded-t-lg">
                <p className="text-sm font-semibold text-green-700">
                  Consulted for hair
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="/9img.png"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">Sophie Moore</p>
                  <p className="text-sm text-gray-500">Chennai</p>
                </div>
                <p className="ml-auto text-sm text-gray-500">17/02/24</p>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                  <i className="text-yellow-500 fas fa-star"></i>
                </div>
                <p className="mt-2 text-lg font-semibold">
                  “One of a kind service”
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Ultrices eros in cursus turpis massa tincidunt sem nulla
                  pharetra diam sit amet nisl suscipit adipiscing.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-6 space-x-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          </div>
        </div>

        <div className="flex flex-col items-center py-10">
          <h1 className="mb-2 text-3xl font-bold text-green-800">
            Meet Our Ayurveda Experts
          </h1>
          <div className="w-16 h-1 mb-8 bg-gray-300"></div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full">
              <i className="text-gray-500 fas fa-chevron-left"></i>
            </button>
            <div className="flex space-x-4 rounded-lg">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="w-64 p-6 rounded-lg shadow-lg bg-yellow-50"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src="/8img.png"
                      alt="Profile of Dr. Vaishali Sharma"
                      className="mb-4 rounded-full"
                    />
                    <div className="flex items-center mb-2">
                      <span className="text-lg font-bold">
                        Dr. Vaishali Sharma
                      </span>
                      <div className="flex items-center px-2 py-1 ml-2 text-xs text-white bg-black rounded-full">
                        <span>4.5</span>
                        <i className="ml-1 fas fa-star"></i>
                      </div>
                    </div>
                    <p className="mb-2 text-gray-600">
                      Ayurveda Practitioner (BAMS, MD)
                    </p>
                    <div className="flex items-center mb-2 text-gray-600">
                      <i className="mr-2 fas fa-calendar-alt"></i>
                      <span>25 years of experience</span>
                    </div>
                    <div className="px-3 py-1 mb-4 text-sm text-green-800 bg-green-100 rounded-full">
                      <i className="mr-1 fas fa-link"></i>
                      <span>Skin Specialist</span>
                    </div>
                    <div>
                    <h3 className="px-4 py-2 text-white bg-green-800 rounded-full">
                      Book a session
                    </h3>
                        
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
            <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full">
              <i className="text-gray-500 fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="flex mt-4 space-x-2 ">
            <div className="w-2 h-2 bg-green-800 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          <button className="px-6 py-2 mt-8 text-green-800 border border-black rounded-lg bg-green-50">
            Find more experts <i className="ml-2 fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      
    </>
  );
}

export default SecondPage;
