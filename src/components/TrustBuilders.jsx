import React from "react";
import DrBurzinKhan from "../assets/DrBurzinKhan.webp"

const DoctorProfile = () => {
  return (
    <section className="bg-[#2b2b2b] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet Your <span className="text-white">Cosmetic</span>Dentist
          </h2>
          <div>
            <h3 className="text-xl font-semibold">Dr. Burzin Khan, MDS</h3>
            <p className="text-themeGreen font-medium">
              Cosmetic Dentistry Expert
            </p>
          </div>

          <ul className="text-base space-y-2">
            <li>• <span className="text-themeGreen font-semibold">Over 30 years</span> of experience transforming smiles</li>
            <li>• Pioneer of digital smile design in India</li>
            <li>• Member of Indian Dental Association</li>
            <li>• Passionate about giving patients confidence in their smiles</li>
          </ul>

          <button className="bg-themeGreen text-black font-bold py-3 px-6 rounded mt-4 hover:bg-lime-300 transition">
            BOOK AN APPOINTMENT
          </button>
        </div>

        {/* Right: Image and Quote */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="bg-themeGreen rounded-lg w-[300px] h-[400px] sm:w-[320px] sm:h-[420px] md:w-[350px] md:h-[450px]" />
          <img
            src={DrBurzinKhan}// Make sure this path matches your actual image
            alt="Dr. Burzin Khan"
            className="absolute bottom-0  w-[250px] sm:w-[280px] md:w-[320px] object-contain"
          />
          <div className="absolute left-[-20px] bottom-6 w-72 bg-white text-black text-sm p-4 rounded-xl shadow-md">
            <p className="font-medium leading-relaxed">
              “I believe every patient deserves a smile they love. My goal is to provide veneers that look natural and help you smile confidently, in a stress-free experience.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
