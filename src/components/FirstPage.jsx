import React from "react";

function FirstPage() {
  return (
    <>
      <div>
        <div className="h-16 bg-yellow-50"> 
          
        </div>
        <header
          className="relative bg-center bg-cover h-96 "
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 text-left text-white md:pl-16">
            <h1 className="text-xl font-bold md:text-2xl">
              Namaste, Welcome to Amrutam
            </h1>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Step into Holistic Healing with{" "}
              <span className="text-yellow-400">Ayurveda</span>
            </h2>
            <h3 className="mt-2 text-2xl font-bold md:text-3xl">
              Book Consultation With Certified Experts.
            </h3>
            <p className="mt-4 text-lg md:text-xl">
              Dive into the world of ayurveda and experience personalized health
              solutions and <br></br>holistic guidance from trusted ayurvedic
              doctors anytime, anywhere.
            </p>
            <button className="px-6 py-3 mt-6 font-bold text-white bg-green-700 rounded-full">
              BOOK AN APPOINTMENT
            </button>
          </div>
        </header>

        <section className="py-12 bg-yellow-50">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-8 text-left">
              <div className="flex items-center w-full md:w-auto">
                <i className="mr-4 text-4xl text-green-500 fas fa-clinic-medical"></i>
                <h4 className="font-bold">
                  Convenient Online & In-Clinic Consultations
                </h4>
              </div>
              <div className="flex items-center w-full md:w-auto">
                <i className="mr-4 text-4xl text-green-500 fas fa-shield-alt"></i>
                <h4 className="font-bold">Safe And Effective Treatment</h4>
              </div>
              <div className="flex items-center w-full md:w-auto">
                <i className="mr-4 text-4xl text-green-500 fas fa-user-md"></i>
                <h4 className="font-bold">
                  Experienced Ayurvedic Practitioners
                </h4>
              </div>
              <div className="flex items-center w-full md:w-auto">
                <i className="mr-4 text-4xl text-green-500 fas fa-file-medical-alt"></i>
                <h4 className="font-bold">
                  Personalized Treatment Plans & Guidance
                </h4>
              </div>
            </div>
          </div>
        </section>

        <div className="container px-4 py-8 mx-auto">
          <h1 className="mb-4 text-3xl font-bold text-center text-green-700 md:text-4xl">
            Discover Ayurveda’s Magic With Us
          </h1>
          <div className="flex items-center justify-center">
            <div className="flex justify-center">
              <p className="max-w-xl px-8 mb-8 leading-snug text-center text-gray-600">
                Ayurvedic treatment aims to balance your body and mind, bringing
                harmony and vitality. It’s like a journey to better health using
                ancient wisdom, a totally effective approach for a better life.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="flex flex-col items-center mb-8 ml-5 space-y-8 md:items-start md:w-1/3 md:mb-0">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <i className="text-2xl text-blue-500 fas fa-user-md"></i>
                </div>
                <div>
                  <h2 className="text-lg font-bold">Personalized Wellness</h2>
                  <p className="text-gray-600">
                    Get treatments made just for you based on your <br></br>{" "}
                    individual doshas (body type).
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <i className="text-2xl text-green-500 fas fa-shield-alt"></i>
                </div>
                <div>
                  <h2 className="text-lg font-bold">Focus on prevention</h2>
                  <p className="text-gray-600">
                    Stop problems even before they start.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-red-100 rounded-full">
                  <i className="text-2xl text-red-500 fas fa-brain"></i>
                </div>
                <div>
                  <h2 className="text-lg font-bold">Mind-Body Connection</h2>
                  <p className="text-gray-600">
                    Keep your mind and body in sync for a happy life.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-8 md:w-1/3 md:mb-0">
              <img
                src="/yogagirl.jpg"
                alt="Person meditating with a decorative background"
                className="rounded-full shadow-lg"
              />
            </div>

            <div className="flex flex-col items-center ml-6 space-y-8 md:items-start md:w-1/3">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-purple-100 rounded-full">
                  <i className="text-2xl text-purple-500 fas fa-heartbeat"></i>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-bold">Holistic Healing</h2>
                  <p className="text-gray-600">
                    Fix the root problem for long-lasting health.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-yellow-100 rounded-full">
                  <i className="text-2xl text-yellow-500 fas fa-leaf"></i>
                </div>
                <div>
                  <h2 className="text-lg font-bold">Natural Remedies</h2>
                  <p className="text-gray-600">
                    Using herbs and natural therapies for healing.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <i className="text-2xl text-green-500 fas fa-apple-alt"></i>
                </div>
                <div>
                  <h2 className="text-lg font-bold">Boosting immunity</h2>
                  <p className="text-gray-600">
                    Stay strong and healthy for life, not just for today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center text-green-800 md:text-4xl">
            What sets Ayurvedic consultations apart?
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-bold text-center">
                स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।।
              </h2>
              <p className="text-center text-gray-600">
                [ Meaning: The Goal of Ayurveda is to maintain the health of a
                healthy person and to cure the disease of a diseased person. ]
              </p>
              <br />
              <img
                src="5img.png"
                alt="Ayurvedic herbs and medicines"
                className="rounded-lg"
              />
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <img
                src="/1img.png"
                alt="Two people discussing Ayurvedic treatment"
                className="mb-4 rounded-lg"
              />
              <h2 className="text-xl font-bold text-green-800">
                Precise Diagnosis
              </h2>
              <p className="text-gray-600">
                Ayurveda's core principles revolve around Vata, Pitta, and Kapha
                doshas, guiding you with precise diagnosis and treatment.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-green-800">
                Zero side-effects
              </h2>
              <p className="mb-4 text-gray-600">
                Ayurvedic treatments are devoid of chemicals, and are based
                completely on natural herbs.
              </p>
              <img
                src="2img.png"
                alt="Ayurvedic herbs and medicines"
                className="rounded-lg"
              />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img
                src="3img.png"
                alt="Person holding Ayurvedic product"
                className="mb-4 rounded-lg"
              />
              <h2 className="text-xl font-bold text-green-800">
                Individual Treatment
              </h2>
              <p className="text-gray-600">
                All treatments are personalized based on a person's unique
                constitution and health concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
