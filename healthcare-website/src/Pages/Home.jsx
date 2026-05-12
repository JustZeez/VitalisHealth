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
    
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <FaClock />,
    title: "24/7 Support",
    desc: "Round-the-clock emergency and telemedicine services.",
    
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Care",
    desc: "Safe, compassionate, and patient-first healthcare solutions.",
    // Fixed: Trust-building patient care image
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80",
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
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-5 py-2 rounded-full mb-6">
                <FaHeartbeat className="animate-pulse" />
                <span className="font-semibold text-sm uppercase tracking-wider">
                  Trusted Healthcare Platform
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                Modern Healthcare
                <span className="block text-teal-600">For Modern Lives</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl font-medium">
                Experience compassionate healthcare powered by modern medical
                technology, highly experienced doctors, and patient-centered
                care designed for your well-being.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <Link
                  to="/contact"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-teal-200 transition-all duration-300 flex items-center gap-2 active:scale-95"
                >
                  Book Appointment
                  <FaArrowRight />
                </Link>

                <Link
                  to="/services"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-full font-bold transition-all duration-300 active:scale-95"
                >
                  Explore Services
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                {stats.map((item, index) => (
                  <div key={index} className="border-l-2 border-teal-200 pl-4">
                    <h3 className="text-3xl font-black text-teal-600">
                      {item.number}
                    </h3>
                    <p className="text-gray-500 text-sm font-semibold uppercase tracking-tighter">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT HERO IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80"
                alt="Healthcare Professional"
                className="rounded-[40px] shadow-2xl border-[12px] border-white"
              />

              {/* FLOAT CARD */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-2xl p-6 w-64 border border-teal-50"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-teal-100 text-teal-600 p-4 rounded-2xl text-2xl">
                    <FaHeartbeat />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Emergency Care</h4>
                    <p className="text-gray-500 text-sm">24/7 Medical Support</p>
                  </div>
                </div>
              </motion.div>
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
              Combining advanced healthcare innovation with compassionate patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100 group"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-3xl text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
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

      {/* HEALTHCARE SECTION - FIXED IMAGE */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Healthcare"
                className="rounded-[35px] shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-8 right-8 bg-white p-5 rounded-2xl shadow-xl border-b-4 border-teal-500">
                <div className="flex items-center gap-3">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <span className="font-bold">4.9 Rating</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Healthcare Designed <br/> Around You
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                From preventive care to advanced diagnostics, VitalisHealth
                focuses on personalized treatment, comfort, innovation, and
                faster recovery.
              </p>
              <div className="space-y-4 mt-10">
                {[
                  "Advanced medical technology",
                  "Compassionate patient support",
                  "Highly trained specialists",
                  "Secure digital health systems",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <p className="text-lg text-gray-700 font-medium">{item}</p>
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
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-16">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-[30px] p-10 shadow-lg border border-gray-100 relative"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">{item.name}</h4>
                    <p className="text-teal-600 font-semibold">{item.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-600 italic leading-relaxed text-lg">
                  "{item.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-teal-800 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-20 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black">
            Ready To Prioritize Your Health?
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-xl text-teal-100 opacity-90">
            Join thousands of patients who trust VitalisHealth for quality healthcare and exceptional medical support.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-10 bg-white text-teal-800 hover:bg-teal-50 px-12 py-5 rounded-full font-black shadow-2xl transition duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}