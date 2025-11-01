import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { stats } from '../utils/Helper'
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
        className="bg-white"
      >
        <div className="mx-auto px-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <h3 className="text-2xl md:text-4xl font-bold text-emerald-600 my-2">{stat.number}</h3>
                <p className="text-gray-600 font-semibold text-[18px] leading-[26px] tracking-[0] text-center align-middle">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> 
  )
}
