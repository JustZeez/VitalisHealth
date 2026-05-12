import React, { useEffect, useState } from "react";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}+</span>;
};

export default function About() {
  return (
    <div className="container mx-auto px-5 lg:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
          About VitalisHealth
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8 animate-slide-up">
          Founded in 2018, VitalisHealth has grown into a leading healthcare
          network known for innovation, empathy, and excellent clinical
          outcomes. We combine the latest medical technology with a human touch
          to ensure every patient feels heard, respected, and healed.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img
            src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Medical team smiling"
            className="rounded-2xl shadow-lg object-cover h-80 w-full transition-transform duration-500 hover:scale-105"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 mt-2">
              To deliver accessible, high-quality healthcare that respects your
              dignity and empowers your well-being.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Our Values
            </h3>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Compassion above all</li>
              <li>Integrity & transparency</li>
              <li>Innovation without compromise</li>
              <li>Collaboration with patients & families</li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-50 p-8 rounded-2xl transition-all duration-500 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            By the numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-teal-600">
                <Counter target={150} />
              </div>
              <div className="text-gray-600">Expert Doctors</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-teal-600">
                <Counter target={50} />k
              </div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-teal-600">24/7</div>
              <div className="text-gray-600">Emergency Care</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-teal-600">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
