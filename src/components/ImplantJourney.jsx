import React from "react";
import {
  Stethoscope,
  SmilePlus,
  Landmark,
  Timer,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    title: "Initial Consultation & 3D Scan",
    description:
      "Visit our clinic in Bandra or Fort for a thorough check-up and 3D jaw scan. We discuss your needs and create a tailored plan.",
    icon: <Stethoscope className="w-8 h-8 text-themeLight" />,
    duration: "Visit 1",
  },
  {
    title: "Treatment Planning",
    description:
      "Our experts design your new smile using advanced software – you’ll see the expected results upfront.",
    icon: <SmilePlus className="w-8 h-8 text-themeLight" />,
    duration: "1-2 Days",
  },
  {
    title: "Implant Placement",
    description:
      "A quick, comfortable procedure under anesthesia. Our precision techniques ensure minimal pain and a quick recovery.",
    icon: <Landmark className="w-8 h-8 text-themeLight" />,
    duration: "Day of Procedure (1–2 hrs)",
  },
  {
    title: "Healing & Follow-up",
    description:
      "Implant fuses with bone over a few months. We provide temporary teeth if needed and check healing progress regularly.",
    icon: <Timer className="w-8 h-8 text-themeLight" />,
    duration: "Healing (3–4 months)",
  },
  {
    title: "Final Crown Placement",
    description:
      "Your custom-made tooth is attached, and you leave with a fully restored smile. Ongoing care instructions provided.",
    icon: <BadgeCheck className="w-8 h-8 text-themeLight" />,
    duration: "Final Visit",
  },
];

const ImplantJourney = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-12">
          Your Implant Journey at OPUS: 
          <br />
          <span className="text-themeLight">What Happens Next</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-md font-bold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{step.description}</p>
              <span className="text-xs text-themeLight font-semibold bg-themeLight/10 px-3 py-1 rounded-full">
                {step.duration}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-lg font-medium text-gray-700 pb-4">
            Ready to take the first step?
            {/* <span className="text-themeLight font-semibold ml-1 underline cursor-pointer"> */}
            </p>

<button
 type="submit"
                className="bg-themeLight text-black px-4 py-2 rounded font-semibold "
              >
                Book Appointment Now!
              </button>
            {/* </span> */}
        </div>
      </div>
    </section>
  );
};

export default ImplantJourney;
