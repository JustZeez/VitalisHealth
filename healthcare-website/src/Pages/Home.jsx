import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd />,
    title: "Expert Doctors",
    desc: "Certified specialists delivering world-class medical expertise.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
  },

  {
    icon: <FaClock />,
    title: "24/7 Support",
    desc: "Round-the-clock emergency and telemedicine services.",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80",
  },

  {
    icon: <FaShieldAlt />,
    title: "Trusted Care",
    desc: "Safe, compassionate, and patient-first healthcare solutions.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
];

const stats = [
  { number: "150+", label: "Medical Experts" },
  { number: "50K+", label: "Recovered Patients" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "24/7", label: "Emergency Service" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "VitalisHealth completely changed my healthcare experience. The doctors were caring, professional, and incredibly supportive.",
  },

  {
    name: "Michael Brown",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Modern facilities, excellent staff, and very fast appointments. Highly recommended healthcare center.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}

      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-30"></div>

        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-5 py-2 rounded-full mb-6">
                <FaHeartbeat />
                <span className="font-semibold text-sm">
                  Trusted Healthcare Platform
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                Modern Healthcare
                <span className="block text-teal-600">For Modern Lives</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                Experience compassionate healthcare powered by modern medical
                technology, highly experienced doctors, and patient-centered
                care designed for your well-being.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <Link
                  to="/contact"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition duration-300 flex items-center gap-2"
                >
                  Book Appointment
                  <FaArrowRight />
                </Link>

                <Link
                  to="/services"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-full font-semibold transition duration-300"
                >
                  Explore Services
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                {stats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-black text-teal-600">
                      {item.number}
                    </h3>

                    <p className="text-gray-600 text-sm mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT HERO IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80"
                alt="Doctor"
                className="rounded-[40px] shadow-2xl hero-shadow"
              />

              {/* FLOAT CARD */}

              <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-2xl p-6 w-64 animate-float">
                <div className="flex items-center gap-4">
                  <div className="bg-teal-100 text-teal-600 p-4 rounded-2xl text-2xl">
                    <FaHeartbeat />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800">Emergency Care</h4>

                    <p className="text-gray-500 text-sm">
                      24/7 Medical Support
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Why Patients Trust Us
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Combining advanced healthcare innovation with compassionate
              patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-3xl text-teal-600 mb-6">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTHCARE SECTION */}

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631815588090-d1bcbe9a4e89?auto=format&fit=crop&w=1000&q=80"
                alt="Healthcare"
                className="rounded-[35px] shadow-2xl"
              />

              <div className="absolute top-8 right-8 bg-white p-5 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="text-yellow-400 flex">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <span className="font-bold">4.9 Rating</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Healthcare Designed Around You
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                From preventive care to advanced diagnostics, VitalisHealth
                focuses on personalized treatment, comfort, innovation, and
                faster recovery.
              </p>

              <div className="space-y-6 mt-10">
                {[
                  "Advanced medical technology",
                  "Compassionate patient support",
                  "Highly trained specialists",
                  "Secure digital health systems",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                      ✓
                    </div>

                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              What Our Patients Say
            </h2>

            <p className="text-gray-600 mt-5 text-lg">
              Trusted by thousands of patients and families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-16">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-[30px] p-10 shadow-lg"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-bold text-xl text-gray-900">
                      {item.name}
                    </h4>

                    <p className="text-gray-500">{item.role}</p>
                  </div>
                </div>

                <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-teal-700 to-cyan-700 text-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-black">
            Ready To Prioritize Your Health?
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-teal-100">
            Join thousands of patients who trust VitalisHealth for quality
            healthcare and exceptional medical support.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-white text-teal-700 hover:bg-gray-100 px-10 py-4 rounded-full font-bold shadow-2xl transition duration-300 hover:scale-105"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
