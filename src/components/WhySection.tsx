import React from "react";
import { motion } from "motion/react";
import curbAppealImage from "../assets/backgrounds/pexels-vladvictoria-1623214.jpg";
import taxesImage from "../assets/backgrounds/pexels-karolina-grabowska-4386373.jpg";
import safetyImage from "../assets/backgrounds/Every legal case has applicable standards that….jpg";
const WhySection: React.FC = () => {
  const reasons = [
    {
      title: "Enhanced Curb Appeal",
      image: curbAppealImage,
      description:
        "Make a lasting first impression. Our professional sweeping services keep your property looking pristine and welcoming.",
      delay: 0.2,
    },
    {
      title: "Cost-Effective Maintenance",
      image: taxesImage,
      description:
        "Prevent expensive repairs and maintain property value with regular professional cleaning services.",
      delay: 0.4,
    },
    {
      title: "Safety Assurance",
      image: safetyImage,
      description:
        "Create a safer environment for everyone by eliminating hazardous debris and maintaining clean surfaces.",
      delay: 0.6,
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-blue-600 font-medium tracking-wider text-sm sm:text-base mb-4 block">
            PROFESSIONAL SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 drop-shadow-lg">
            Why Choose Our Services?
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full origin-left"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: reason.delay }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div> */}
              </div>

              <div className="relative p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  {reason.description}
                </p>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-6 inline-flex items-center text-blue-600 group-hover:text-blue-700 cursor-pointer"
                >
                  <a href="" className="font-medium">Learn more</a>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
