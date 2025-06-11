import React from "react";
import DrBurzinKhan from "../assets/DrBurzinKhan.webp";

const DoctorProfile = () => {
  return (
    <section className="bg-themeGreen py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md px-6 sm:px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-darkGray">
            Meet Your <span className="text-themeGreen">Cosmetic</span> Dentist
          </h2>

          <div>
            <h3 className="text-xl font-semibold text-darkGray">
              Dr. Burzin Khan, MDS
            </h3>
            <p className="text-themeGreen font-semibold">
              Cosmetic Dentistry Expert
            </p>
          </div>

          <ul className="text-base space-y-3 text-left text-gray-700">
            <li>
              • <span className="text-themeGreen font-semibold">Over 30 years</span> of experience transforming smiles
            </li>
            <li>• Pioneer of digital smile design in India</li>
            <li>• Member of Indian Dental Association</li>
            <li>• Passionate about giving patients confidence in their smiles</li>
          </ul>

          <button
            className="bg-themeGreen text-black font-bold py-3 px-6 rounded  "
            onClick={() => {
              const el = document.getElementById("appointment-form");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            BOOK AN APPOINTMENT
          </button>
        </div>

        {/* Doctor Image */}
        <div className="flex-1 relative flex justify-center items-center lg:mt-0">
          <img
            src={DrBurzinKhan}
            alt="Dr. Burzin Khan"
            className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[340px] xl:w-[360px] bordeer-4 border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
