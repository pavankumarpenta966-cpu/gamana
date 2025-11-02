import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaHandsHelping,
  FaHome,
  FaDonate,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainLayout from "../pages/MainLayout";
import InfoCount from "../sections/InfoCount";
import PartnershipPage from "./PartnershipPage";
import PageHeader from "../sections/PageHeader";

const AboutUsPage = () => {
 

  // Counter animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;



    let step = 0;
    const timer = setInterval(() => {
      step++;
   

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "We Educate",
      description: "We want to provide you quality content and news.",
    },
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: "We Help",
      description: "Missing children, absolute free work for people.",
    },
    {
      icon: <FaHome className="text-4xl" />,
      title: "We Build",
      description: "Famigliare and occasional programs around world.",
    },
    {
      icon: <FaDonate className="text-4xl" />,
      title: "We Donate",
      description: "Various ideas on conventional system, financial product.",
    },
  ];

  return (
    <MainLayout>
      {" "}
      <div className="bg-white">
        {/* Hero Section */}
        <PageHeader
          title="About Us"
          bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
          breadcrumb={[{ name: "Home", path: "/" }, { name: "About" }]}
        />

        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
                  alt="About Us"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full p-4 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
                    alt="Person"
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h2 className="text-6xl md:text-8xl font-bold text-gray-800">
                    ABOUT US
                  </h2>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-700 rounded-full opacity-20"></div>
            </motion.div>

            {/* Right: Content Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="sub-h-text">
                  Welcome to GAMANA
                </span>
                <h2 className="h-title mt-2 mb-4">
                  Helping Today
                  <br />
                  Helping Tommorow
                </h2>
                 <div className="w-24 h-1 bg-forest mt-4"></div>
              </div>

              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  GAMANA (meaning "The Way") is a voluntary, non-profit
                  organization rooted in the Anukurulu region of Andhra Pradesh,
                  India. Founded in 2007, GAMANA is dedicated to promoting child
                  rights, gender equality and community empowerment through
                  participatory, rights-based approaches. We believe that
                  sustainable social change begins with the active involvement
                  of all stakeholders, especially children and adolescents who
                  are encouraged to voice their rights and shape their own
                  futures.
                </p>

                <p>
                  Over the years, GAMANA has focused on preventing early child
                  marriages, ensuring access to quality education, enhancing
                  adolescent health and nutrition, and empowering women through
                  self-help groups. Working closely with grassroots
                  organizations, government agencies, CSR workers, local
                  governance bodies and international partners, we have
                  developed integrated programs that transform distressed into
                  collective action.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-green-700 text-white p-3 rounded-full">
                    <FaHandsHelping className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      You Can Help a Lot by Donating
                    </h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-700 text-white p-3 rounded-full">
                    <FaDonate className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Our Only Mission is to Fulfill Others Dreams
                    </h4>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-green-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-800 transition-colors"
              >
                Donate Now
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 py-16"
        >
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 leading-relaxed">
              "At the heart of our work lies a simple yet powerful belief that
              every child deserves to grow up in a safe, educated and nurturing
              environment where equality, dignity and opportunity are not
              privileges, but rights."
            </h3>
          </div>
        </motion.div>

        {/* What Makes Us Different */}
        <div
          className="relative shadow-lg py-16 px-8 rounded-lg"
          style={{
            backgroundImage: ` url("/gamana/bgPrograms.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wide">
                Help is Our Goal
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                What Make Us Different
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Statistics Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute w-3/4 mx-auto -bottom-0 left-1/2 -translate-x-1/2  cursor-pointer">
              <InfoCount />
            </div>
          </motion.div>
        </div>

        {/* Partnership Section */}
        <PartnershipPage />

        {/* Custom styles for slider dots */}
        <style jsx global>{`
          .slick-dots li button:before {
            color: #047857;
          }
          .slick-dots li.slick-active button:before {
            color: #047857;
          }
          .slick-prev:before,
          .slick-next:before {
            color: #047857;
          }
        `}</style>
      </div>
    </MainLayout>
  );
};

export default AboutUsPage;
