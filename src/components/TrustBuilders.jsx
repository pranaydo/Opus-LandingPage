
import React from "react";
import DrBurzinKhan from "../assets/DrBurzinKhan.webp";

const DoctorProfile = () => {
  return (
    <section className="bg-[#2b2b2b] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left: Doctor Image with small green background and circular image */}
        <div className="flex-1 relative flex justify-center items-center lg:mt-0">
          {/* Small Green Background */}
          <div className=" w-[160px] h-[200px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[240px] rounded-xl" />

          {/* Circular Image Overlapping */}
          <img
            src={DrBurzinKhan}
            alt="Dr. Burzin Khan"
            className="absolute  w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] border-4 border-gray-200 rounded-full object-cover shadow-lg transition-transform transform hover:scale-105 z-10"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet Your <span className="text-themeLight">Cosmetic</span> Dentist
          </h2>

          <div>
            <h3 className="text-2xl	 font-semibold">Dr. Burzin Khan, MDS</h3>
            <p className="text-themeLight font-semibold">
              Cosmetic Dentistry Expert
            </p>
          </div>

          <ul className="text-base space-y-3 text-left max-w-md mx-auto lg:mx-0 text-gray-200">
            <li>
              • <span className="text-themeLight font-semibold">Over 30 years</span> of experience transforming smiles
            </li>
            <li>• Pioneer of digital smile design in India</li>
            <li>• Member of Indian Dental Association</li>
            <li>• Passionate about giving patients confidence in their smiles</li>
          </ul>

          <button
            className="bg-themeLight text-black border-2 border-white  font-bold py-2 px-3 rounded "
            onClick={() => {
              const el = document.getElementById("appointment-form");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
