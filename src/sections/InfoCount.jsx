import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { stats } from "../utils/Helper";
import CustomScroll from "../components/CustomScroll";
import { useBreakpoints } from "../utils/Helper";
export default function InfoCount() { 
  const {lg, md,sm,xs} = useBreakpoints();
   const slidesToShow = xs ? 1 : sm ? 2 : md ? 3 : lg ? 3 : 3;
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
      className="bg-cover bg-center bg-no-repeat rounded shadow-xl transition-shadow duration-500"
      style={{
        backgroundImage: 'url("/Counter.svg")',
      }}
    >
      <div className="mx-auto px-2">
        <div className="py-4 gap-6 ">
          <CustomScroll
            slidesToShow={slidesToShow}           
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <h3 className="text-xl md:text-3xl font-bold text-forest">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-semibold text-sm leading-[16px] tracking-[0] text-center align-middle">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </CustomScroll>
        </div>
        
      </div>
    </motion.section>
  );
}
