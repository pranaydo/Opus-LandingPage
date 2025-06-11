// import React from 'react'
// import { Layers, UserCheck, ScanLine, MapPin } from "lucide-react";
// const KeyValue = () => {
//   return (
//     <section className="w-full bg-darkGray px-4 sm:px-6 md:px-12 py-12">
//   <div className="max-w-8xl mx-auto">
    

//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//       {/* Point 1 */}
//       <div className="flex items-start gap-4 bg-white border-4 border-gray-200 p-4 rounded-lg shadow-sm max-w-md w-full mx-auto">
//   <Layers className="w-6 h-6 text-themeGreen mt-1" />
//   <p className="text-gray-700 font-medium">
//     <strong>Multispecialty Dentistry:</strong> All Services Under One Roof – General, Cosmetic, Implants, Kids & more.
//   </p>
// </div>

//       {/* Point 2 */}
//       {/* <div className="flex items-start gap-4 bg-white border-4 border-gray-200 p-4 rounded-lg shadow-sm">
//         <UserCheck className="w-6 h-6 text-themeGreen mt-1" />
//         <p className="text-gray-700 font-medium">
//           <strong>30+ Years Experience:</strong> Trusted by thousands of patients in Mumbai.
//         </p>
//       </div> */}

// <div className="flex items-start gap-4 bg-white border-4 border-gray-200 p-4 rounded-lg shadow-sm max-w-md w-full mx-auto">
//   <Layers className="w-6 h-6 text-themeGreen mt-1" />
//   <p className="text-gray-700 font-medium">
//           <strong>30+ Years Experience:</strong> Trusted by thousands of patients in Mumbai.
//         </p>
// </div>

//       {/* Point 3 */}
//       <div className="flex items-start gap-4 bg-white border-4 border-gray-200 p-4 rounded-lg shadow-sm max-w-md w-full mx-auto">
//         <ScanLine className="w-6 h-6 text-themeGreen mt-1" />
//         <p className="text-gray-700 font-medium">
//           <strong>Advanced Technology:</strong> 3D Scans, Lasers & Painless Treatments for superior care.
//         </p>
//       </div>

//       {/* Point 4 */}
//       <div className="flex items-start gap-4 bg-white border-4 border-gray-200 p-4 rounded-lg shadow-sm max-w-md w-full mx-auto">
//         <MapPin className="w-6 h-6 text-themeGreen mt-1" />
//         <p className="text-gray-700 font-medium">
//           <strong>Convenient Locations:</strong> Clinics in Bandra & Fort for your ease.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>
//   )
// }

// export default KeyValue


// import React from 'react';
// import { Layers, UserCheck, ScanLine, MapPin } from "lucide-react";

// const KeyValue = () => {
//   return (
//     <section className="w-full bg-darkGray px-4 sm:px-6 md:px-12 py-12">
//       <div className="max-w-8xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {/* Card 1 */}
//           <div className="flex items-start gap-4 bg-white text-gray-800 border-4 border-gray-200 p-4 rounded-lg shadow-sm transition duration-300 transform hover:scale-105 hover:bg-themeGreen hover:text-white">
//             <Layers className="w-8 h-8 mt-1.5 transition-colors duration-300" />
//             <p className="font-medium">
//               <strong>Multispecialty Dentistry:</strong> All Services Under One Roof – General, Cosmetic, Implants, Kids & more.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="flex items-start gap-4 bg-white text-gray-800 border-4 border-gray-200 p-4 rounded-lg shadow-sm transition duration-300 transform hover:scale-105 hover:bg-themeGreen hover:text-white">
//             <UserCheck className="w-8 h-8 mt-1.5 transition-colors duration-300" />
//             <p className="font-medium">
//               <strong>30+ Years Experience:</strong> Trusted by thousands of patients in Mumbai.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="flex items-start gap-4 bg-white text-gray-800 border-4 border-gray-200 p-4 rounded-lg shadow-sm transition duration-300 transform hover:scale-105 hover:bg-themeGreen hover:text-white">
//             <ScanLine className="w-8 h-8 mt-1.5 transition-colors duration-300" />
//             <p className="font-medium">
//               <strong>Advanced Technology:</strong> 3D Scans, Lasers & Painless Treatments for superior care.
//             </p>
//           </div>

//           {/* Card 4 */}
//           <div className="flex items-start gap-4 bg-white text-gray-800 border-4 border-gray-200 p-4 rounded-lg shadow-sm transition duration-300 transform hover:scale-105 hover:bg-themeGreen hover:text-white">
//             <MapPin className="w-8 h-8 mt-1.5 transition-colors duration-300" />
//             <p className="font-medium">
//               <strong>Convenient Locations:</strong> Clinics in Bandra & Fort for your ease.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KeyValue;


import React from 'react';
import { UserCheck, Activity, ScanLine, ShieldCheck } from "lucide-react";

const KeyValue = () => {
  return (
    <section className="w-full bg-darkGray px-4 sm:px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-themeGreen mb-10">
          Experience the OPUS Dental Advantage
        </h2>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1 - Experience */}
          <div className="flex items-start gap-4 bg-white text-gray-800 border-4 border-gray-200 p-4 rounded-lg shadow-sm transition duration-300 transform hover:scale-105 hover:bg-themeGreen hover:text-white">
            <UserCheck className="w-8 h-8 mt-1.5 transition-colors duration-300" />
            <p className="font-medium text-sm">
              <strong>Experienced Specialists:</strong><br />
              30+ years of expertise led by Dr. Burzin Khan.
            </p>
          </div>

          {/* Card 2 - Success Rate */}
          <div className="flex items-start gap-4 bg-white text-gray-800 border-4 border-gray-200 p-4 rounded-lg shadow-sm transition duration-300 transform hover:scale-105 hover:bg-themeGreen hover:text-white">
            <Activity className="w-8 h-8 mt-1.5 transition-colors duration-300" />
            <p className="font-medium text-sm">
              <strong>High Success Rate:</strong><br />
              Over 1,000 implants placed with 99% success.
            </p>
          </div>

          {/* Card 3 - Technology */}
          <div className="flex items-start gap-4 bg-white text-gray-800 border-4 border-gray-200 p-4 rounded-lg shadow-sm transition duration-300 transform hover:scale-105 hover:bg-themeGreen hover:text-white">
            <ScanLine className="w-8 h-8 mt-1.5 transition-colors duration-300" />
            <p className="font-medium text-sm">
              <strong>Advanced Technology:</strong><br />
              3D Guided Implant Surgery & modern tools.
            </p>
          </div>

          {/* Card 4 - Safety */}
          <div className="flex items-start gap-4 bg-white text-gray-800 border-4 border-gray-200 p-4 rounded-lg shadow-sm transition duration-300 transform hover:scale-105 hover:bg-themeGreen hover:text-white">
            <ShieldCheck className="w-8 h-8 mt-1.5 transition-colors duration-300" />
            <p className="font-medium text-sm">
              <strong>Painless & Safe:</strong><br />
              Sedation available + OSHA-grade sterilization.
            </p>
          </div>
        </div>

        {/* Supporting Microcopy */}
        {/* <p className="text-center text-gray-600 mt-10 text-sm md:text-base">
          Committed to world-class care and patient comfort, right here in Mumbai.
        </p> */}
        <p className="text-center text-themeGreen font-semibold mt-10 text-base md:text-lg">
  Committed to world-class care and className="text-themeGreen font-bold" patient comfort, right here in Mumbai.
</p>

      </div>
    </section>
  );
};

export default KeyValue;
