import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import MainLayout from './MainLayout';
import PageHeader from "../sections/PageHeader";

const VisionPage = () => {
  const workPointsLeft = [
    "Dignissim sodales ut eu sem Integer vitae justo",
    "Lectus vestibulum mattis ullamcorper",
    "Neque laoreet suspendisse interdum consectetur",
    "Faucibus a pellentesque sit amet porttitor"
  ];

  const workPointsRight = [
    "Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis",
    "Semper dector neque vitae tempus quam",
    "Ornare suspendisse sed nisi lacus sed"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <MainLayout>

    <div className="bg-white">
      {/* Hero Section with Image */}    
           <PageHeader
              title="Vision & Mission"
              bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
              breadcrumb={[{ name: "Home", path: "/" }, { name: "Vision & Mission" }]}
            />

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Column */}
            <motion.div
              {...fadeInLeft}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
                  alt="Community meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-600 rounded-full opacity-10 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500 rounded-full opacity-10 blur-2xl"></div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              {...fadeInRight}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -mr-20 -mt-20"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative">
                Vision
              </h2>
              
              <div className="space-y-6 relative">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  To build a self-reliant, equitable and child-friendly society where every child and woman lives with dignity, equality and opportunity, free from violence, discrimination and exploitation.
                </p>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-green-700">GAMANA</span> envisions communities where girls stay in school, marriages are based on choice and maturity and children grow up in safe and nurturing environments that encourage learning, participation and leadership.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
          </motion.div>

          <motion.p
            {...fadeInUp}
            className="text-gray-600 text-center max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Consectetur a erat nam at lectus urna duis. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. 
            Interdum volutpat lorem dolor sit. Id amet volutpat consequat mauris. Dui accumsan sit amet nulla facilisi 
            morbi. Turpis in eu mi bibendum neque egestas congue. Iaculis nunc sed augue.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left Column */}
            <motion.div
              {...fadeInLeft}
              className="space-y-4"
            >
              {workPointsLeft.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <FaCheckCircle className="text-green-600 text-xl group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column */}
            <motion.div
              {...fadeInRight}
              className="space-y-4"
            >
              {workPointsRight.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-green-50 transition-colors group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm font-semibold group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Image */}
          {/* <motion.div
            {...fadeInUp}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba140b2b8?w=1400&h=500&fit=crop"
              alt="Community gathering"
              className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-2xl"
              >
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                  Building Stronger Communities Together
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Empowering lives through education, support, and sustainable development
                </p>
              </motion.div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years of Service" },
              { number: "50+", label: "Communities Served" },
              { number: "10K+", label: "Lives Impacted" },
              { number: "100+", label: "Active Volunteers" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Us in Making a Difference
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Together, we can create lasting change in communities and empower individuals to reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                Get Involved
              </button>
              <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl border-2 border-green-600">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
    </MainLayout>
  );
};

export default VisionPage;