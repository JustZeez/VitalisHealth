import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeartbeat, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="bg-teal-600 text-white p-3 rounded-2xl shadow-lg">
            <FaHeartbeat />
          </div>

          <h1 className="text-2xl font-black text-gray-800">
            Vitalis<span className="text-teal-600">Health</span>
          </h1>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-semibold transition ${
                  isActive
                    ? "text-teal-600"
                    : "text-gray-700 hover:text-teal-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full shadow-lg transition">
            Appointment
          </button>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden bg-white px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="font-semibold text-gray-700 hover:text-teal-600"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
