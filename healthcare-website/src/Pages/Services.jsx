import React from 'react'

import {
  FaStethoscope,
  FaHeartbeat,
  FaBrain,
  FaBaby,
  FaFemale,
  FaBone,
  FaLaptopMedical,
  FaDna,
  FaArrowRight,
} from 'react-icons/fa'

const servicesList = [
  {
    icon: <FaStethoscope />,
    title: "General Medicine",
    desc: "Routine checkups, vaccinations, and chronic disease management.",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
  },

  {
    icon: <FaHeartbeat />,
    title: "Cardiology",
    desc: "Advanced heart health diagnostics and preventive cardiology.",
    img: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=900&q=80",
  },

  {
    icon: <FaBrain />,
    title: "Neurology",
    desc: "Treatment for migraines, epilepsy, stroke, and neurological disorders.",
    img: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=900&q=80",
  },

  {
    icon: <FaBaby />,
    title: "Pediatrics",
    desc: "Comprehensive healthcare for infants, children, and adolescents.",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
  },

  {
    icon: <FaFemale />,
    title: "Women's Health",
    desc: "Obstetrics, gynecology, reproductive health, and wellness programs.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
  },

  {
    icon: <FaBone />,
    title: "Orthopedics",
    desc: "Sports injury treatment, joint care, and physical rehabilitation.",
    img: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=900&q=80",
  },

  {
    icon: <FaLaptopMedical />,
    title: "Telehealth",
    desc: "Virtual consultations with secure and convenient online care.",
    img: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=900&q=80",
  },

  {
    icon: <FaDna />,
    title: "Lab & Diagnostics",
    desc: "Fast and reliable MRI, CT scan, blood testing, and diagnostics.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
  },
]

export default function Services() {
  return (
    <div className="bg-gray-50">

      {/* HERO */}

      <section className="relative py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 opacity-20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">

          <div className="text-center max-w-4xl mx-auto">

            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Advanced Healthcare
              <span className="block text-teal-600">
                Services For Everyone
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Personalized healthcare solutions powered by modern technology,
              compassionate doctors, and patient-centered treatment.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}

      <section className="py-24">

        <div className="container mx-auto px-6 lg:px-20">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 group border border-gray-100"
              >

                <div className="h-56 overflow-hidden">

                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">

                  <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center text-3xl mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>

                  <button className="mt-6 flex items-center gap-2 text-teal-600 font-semibold hover:gap-4 transition-all">
                    Learn More
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}

      <section className="pb-24">

        <div className="container mx-auto px-6 lg:px-20">

          <div className="bg-gradient-to-r from-teal-700 to-cyan-700 rounded-[40px] overflow-hidden">

            <div className="grid lg:grid-cols-2 items-center">

              <div className="p-12 lg:p-16 text-white">

                <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                  Need Help Choosing The Right Care?
                </h2>

                <p className="mt-6 text-lg text-teal-100 leading-relaxed">
                  Our healthcare coordinators are available to guide you
                  toward the right specialist and treatment plan.
                </p>

                <button className="mt-8 bg-white text-teal-700 hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition duration-300 hover:scale-105 shadow-2xl">
                  Talk To A Specialist
                </button>
              </div>

              <div className="h-full">

                <img
                  src="https://images.unsplash.com/photo-1631217868264-e6b90bb7e133?auto=format&fit=crop&w=1200&q=80"
                  alt="Healthcare"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}