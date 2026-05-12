import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-5 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <i className="fas fa-heartbeat text-teal-400 text-xl"></i>
            <span className="font-bold text-xl text-white">VitalisHealth</span>
          </div>
          <p className="text-sm">Your trusted partner in modern healthcare. Compassionate, innovative, and always by your side.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-teal-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-teal-400 transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-teal-400 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400 transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li><i className="fas fa-phone-alt mr-2 text-teal-400"></i> +1 (800) 123-4567</li>
            <li><i className="fas fa-envelope mr-2 text-teal-400"></i> hello@vitalishealth.com</li>
            <li><i className="fas fa-map-marker-alt mr-2 text-teal-400"></i> 123 Wellness Ave, Suite 100</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-teal-400 transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-teal-400 transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-teal-400 transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-teal-400 transition"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p className="text-xs mt-4">© 2025 VitalisHealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}