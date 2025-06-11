
// import React from "react";
// import DrBurzinKhan from "../assets/DrBurzinKhan.webp";

// const DoctorProfile = () => {
//   return (
//     <section className="bg-[#2b2b2b] text-white px-6 py-16">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
//         {/* Left: Doctor Image with small green background and circular image */}
//         <div className="flex-1 relative flex justify-center items-center lg:mt-0">
//           {/* Small Green Background */}
//           <div className=" w-[160px] h-[200px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[240px] rounded-xl" />

//           {/* Circular Image Overlapping */}
//           <img
//             src={DrBurzinKhan}
//             alt="Dr. Burzin Khan"
//             className="absolute  w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] border-4 border-gray-200 rounded-full object-cover shadow-lg transition-transform transform hover:scale-105 z-10"
//           />
//         </div>

//         {/* Right: Text Content */}
//         <div className="flex-1 text-center lg:text-left space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Meet Your <span className="text-themeLight">Cosmetic</span> Dentist
//           </h2>

//           <div>
//             <h3 className="text-2xl	 font-semibold">Dr. Burzin Khan, MDS</h3>
//             <p className="text-themeLight font-semibold">
//               Cosmetic Dentistry Expert
//             </p>
//           </div>

//           <ul className="text-base space-y-3 text-left max-w-md mx-auto lg:mx-0 text-gray-200">
//             <li>
//               • <span className="text-themeLight font-semibold">Over 30 years</span> of experience transforming smiles
//             </li>
//             <li>• Pioneer of digital smile design in India</li>
//             <li>• Member of Indian Dental Association</li>
//             <li>• Passionate about giving patients confidence in their smiles</li>
//           </ul>

//           <button
//             className="bg-themeLight text-black border-2 border-white  font-bold py-2 px-3 rounded "
//             onClick={() => {
//               const el = document.getElementById("appointment-form");
//               el?.scrollIntoView({ behavior: "smooth" });
//             }}
//           >
//             BOOK AN APPOINTMENT
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DoctorProfile;


import React from "react";
import DrBurzinKhan from "../assets/DrBurzinKhan.webp";

const DoctorProfile = () => {
  return (
    <section className="bg-[#2b2b2b] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Meet Your <span className="text-themeLight">Cosmetic</span>Dentist
          </h2>

          <div>
            <h3 className="text-2xl font-semibold">Dr. Burzin Khan, MDS</h3>
            <p className="text-themeLight font-semibold">
              Cosmetic Dentistry Expert
            </p>
          </div>

          <ul className="text-base space-y-3 text-left max-w-md mx-auto lg:mx-0 text-gray-200">
            <li>• <span className="text-themeLight font-semibold">Over 30 years</span> of experience transforming smiles</li>
            <li>• Pioneer of digital smile design in India</li>
            <li>• Member of Indian Dental Association</li>
            <li>• Passionate about giving patients confidence in their smiles</li>
          </ul>

          <button
            className="bg-themeLight text-black border-2 border-white font-bold py-3 px-6 rounded mt-4 hover:bg-white hover:text-black transition"
            onClick={() => {
              const el = document.getElementById("appointment-form");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            BOOK AN APPOINTMENT
          </button>
        </div>

        {/* Right: Doctor Image with background and quote */}
        <div className="flex-1 relative flex justify-center lg:justify-end items-center">
          {/* Green background box */}
          <div className="bg-themeLight w-[220px] h-[300px] sm:w-[260px] sm:h-[340px] md:w-[300px] md:h-[380px] rounded-xl" />

          {/* Doctor image overlapping background */}
          <img
            src={DrBurzinKhan}
            alt="Dr. Burzin Khan"
            className="absolute bottom-0 w-[240px] sm:w-[260px] md:w-[280px] object-contain z-10"
          />

          {/* Quote bubble overlapping */}
          <div className="absolute left-[-30px] bottom-6 w-72 bg-white text-black text-sm p-4 rounded-xl shadow-md z-20 max-w-[280px]">
            <p className="font-medium leading-relaxed">
              “I believe every patient deserves a smile they love. My goal is to
              provide veneers that look natural and help you smile confidently,
              in a stress-free experience.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
