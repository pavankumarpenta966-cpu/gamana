import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { stats } from "../utils/Helper";
import CustomScroll from "../components/CustomScroll";
export default function InfoCount() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-cover bg-center bg-no-repeat shadow-sm rounded"
      style={{
        backgroundImage: 'url("/gamana/Counter.svg")',
      }}
    >
      <div className="mx-auto px-2">
        <div className="py-8 md:py-8 gap-6">
          <CustomScroll
            slidesToShow={4}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <h3 className="text-xl md:text-xl font-bold text-forest">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-semibold text-xs leading-[16px] tracking-[0] text-center align-middle">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </CustomScroll>
        </div>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <h3 className="text-xl md:text-xl font-bold text-forest">{stat.number}</h3>
                <p className="text-gray-600 font-semibold text-xs leading-[16px] tracking-[0] text-center align-middle">{stat.label}</p>
              </motion.div>
            ))}
          </div> */}
      </div>
    </motion.section>
  );
}
