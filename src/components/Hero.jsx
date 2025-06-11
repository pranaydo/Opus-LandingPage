// import React from "react";
// import { ShieldCheck, Medal } from "lucide-react"; // Use lucide for icons or swap as needed

// const Hero = () => {
//   return (
//     <section className="w-full  bg-[url('/images/hero.png')] bg-cover bg-center   text-white">
//       {/* Optional overlay for readability */}
//       <div className="bg-black bg-opacity-60 p-6 md:p-10 rounded-lg">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//           {/* Left Half - Text Content */}
//           <div className="w-full md:w-1/2 text-center md:text-left">
//             <h1 className="text-3xl md:text-4xl font-bold mb-4">
//               Expert Dental Care in Bandra & Fort – 30+ Years of Smiles
//             </h1>
//             <p className="text-lg text-gray-200 mb-6">
//               From routine checkups to smile makeovers, get all your dental
//               needs met under one roof with painless, advanced treatments.
//             </p>

//             {/* Trust Badges */}
//             <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
//               <div className="flex items-center gap-2 text-themeGreen font-medium">
//                 <ShieldCheck className="w-5 h-5" />
//                 30+ Years Experience
//               </div>
//               <div className="flex items-center gap-2 text-themeGreen font-medium">
//                 <Medal className="w-5 h-5" />
//                 Certified Safety Protocols
//               </div>
//             </div>
//           </div>

//           {/* Right Half - Form */}
//           <div className="w-full md:w-1/2">
//             <form className="bg-white p-6 rounded shadow-md w-full">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">
//                 Book Your Appointment
//               </h2>
//               <label
//                 htmlFor="fname"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen"
//               />
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Email
//               </label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen"
//               />
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 placeholder="Enter your phone"
//                 className="mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen"
//               />
//               <button
//                 type="submit"
//                 className="bg-themeGreen text-white w-   px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition"
//               >
//                 Book Appointment
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// //
// 

import React from "react";
import { ShieldCheck, Star } from "lucide-react"; // Swap icons if needed

const Hero = () => {
  return (
    <section className="w-full bg-[url('/images/hero.png')] bg-cover bg-center text-white">
      {/* Overlay for text readability */}
      <div className="bg-black bg-opacity-60 p-6 md:p-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Reclaim Your Smile with Trusted Dental Implants in Bandra & Fort
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Restore confidence with advanced, painless dental implant treatments. Led by experts with 30+ years of experience.
            </p>

            {/* Trust Badge Teaser */}
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <div className="flex items-center gap-2 text-themeGreen font-medium">
                <Star className="w-5 h-5" />
                Rated 4.9★ by 200+ patients
              </div>
              <div className="flex items-center gap-2 text-themeGreen font-medium">
                <ShieldCheck className="w-5 h-5" />
                Certified Implant Center
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-full md:w-1/2">
            <form className="bg-white p-6 rounded shadow-md w-full">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Book Your Appointment
              </h2>

              {/* First Name */}
              <label htmlFor="fname" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                id="fname"
                type="text"
                placeholder="Enter your first name"
                className="mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen"
              />

              {/* Last Name */}
              <label htmlFor="lname" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                id="lname"
                type="text"
                placeholder="Enter your last name"
                className="mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen"
              />

              {/* Email */}
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen"
              />

              {/* Phone */}
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="mb-4 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeGreen"
              />

              {/* CTA Button */}
              <button
                type="submit"
                className="bg-themeGreen text-white w-full px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition"
              >
                Book Appointment Now!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
