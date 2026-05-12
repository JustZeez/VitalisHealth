import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - contact info */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-5">
              Get in Touch
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              We're here to answer your questions and schedule appointments.
              Reach out anytime.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contact@vitalishealth.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Wellness Avenue, Medical District, NYC 10001
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <iframe
                src="https://maps.google.com/maps?q=123%20Wellness%20Avenue%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="clinic location"
                className="w-full h-56 rounded-xl shadow border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right side - contact form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Send us a message
            </h2>
            {submitted && (
              <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center">
                Thank you! We'll get back soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">
                  Message / Inquiry
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition shadow-md"
              >
                Send Message
              </button>
            </form>
            <p className="text-center text-gray-500 text-sm mt-5">
              We reply within 24 hours, Mon-Fri.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
