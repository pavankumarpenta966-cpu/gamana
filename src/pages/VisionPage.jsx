import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import MainLayout from "./MainLayout";
import PageHeader from "../sections/PageHeader";
import InfoCount from "../sections/InfoCount";
import { Image } from "@heroui/react";
import { BottomBorder } from "../sections/Footer";
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};
const VisionPage = () => {
  return (
    <MainLayout>
      <div className="bg-white">
        {/* Hero Section with Image */}
        <PageHeader
          title="Vision & Mission"
          bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
          breadcrumb={[
            { name: "Home", path: "/" },
            { name: "Vision & Mission" },
          ]}
        />

        {/* Vision Section */}
        <section className="my-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center gap-4 md:gap-16 flex-col md:flex-row">
              <motion.div {...fadeInLeft}>
                <Image
                  src="/gamana/vision.jpg"
                  alt="Community meeting"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div {...fadeInRight} className="relative top-0">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">
                  Vision
                </h2>
                <BottomBorder className="my-2" />
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  To build a self-reliant, equitable and child-friendly society
                  where every child and woman lives with dignity, equality and
                  opportunity, free from violence, discrimination and
                  exploitation.
                </p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  GAMANA envisions communities where girls stay in school,
                  marriages are based on choice and maturity and children grow
                  up in safe and nurturing environments that encourage learning,
                  participation and leadership.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Mission Section */}
        <section className="my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center gap-4 md:gap-16 flex-col md:flex-row">
              <motion.div {...fadeInRight} className="relative top-0">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">
                  Mission
                </h2>
                <BottomBorder className="my-2" />
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  To empower marginalized children, adolescents and women
                  through education, health and community-based protection
                  systems. GAMANA works to transform social norms that sustain
                  child marriage and gender inequality by.
                </p>
                <motion.div {...fadeInLeft} className="space-y-4">
                  {[
                    "Promoting access to quality education and life skills",
                    "Enhancing adolescent health, menstrual hygiene and reproductive rights.",
                    "Strengthening families, schools and local institutions to uphold child protection laws.",
                    "Fostering partnerships and policy advocacy to ensure every child’s right to a safe and fulfilling childhood.",
                  ].map((point, index) => (
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
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div {...fadeInLeft}>
                <Image
                  src="/gamana/mission.jpg"
                  alt="Community meeting"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Overall Objectives
              </h2>
              <BottomBorder className="my-2 mx-auto" />
            </motion.div>

            <motion.div {...fadeInRight} className="space-y-1">
              {[
                "Prevent early and forced child marriages through awareness, surveillance and community engagement.",
                "Empower adolescent girls and boys with life skills, education and leadership training to exercise their rights and make informed choices.",
                "Promote gender equality and inclusive education by addressing barriers that keep girls out of school.",
                "Enhance adolescent health and menstrual hygiene management (MHM) to support continued education and wellbeing.",
                "Strengthen community-based child protection systems like Bala Panchayats and Village Child Protection Committees (VCPCs).",
                "Build data-driven monitoring and advocacy mechanisms to inform government and civil society responses to child rights issues.",
                "Foster sustainable partnerships with institutions, civil society and donors to ensure long-term impact and replicability.",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <div className="">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm font-semibold group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Statistics Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border border-gray"
        >
          <div className="cursor-pointer">
            <InfoCount />
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default VisionPage;
