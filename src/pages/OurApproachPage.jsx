import MainLayout from "../pages/MainLayout";
import PageHeader from "../sections/PageHeader";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BottomBorder } from "../sections/Footer";
import { Image } from "@heroui/react";
export default function OurApproachPage() {
  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };
  return (
    <MainLayout>
      {/* Hero Section */}
      <PageHeader
        title="Our Approach"
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
        breadcrumb={[{ name: "Home", path: "/" }, { name: "OurApproach" }]}
      />
      <section className="my-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div {...fadeInLeft}>
              <Image
                src="/approach.jpg"
                alt="Community meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div {...fadeInRight} className="relative top-0">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                Our Approach
              </h2>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                GAMANA’s approach is grounded in participation, partnership and
                prevention, ensuring that children, families and communities
                become active agents of change rather than passive
                beneficiaries. We believe that sustainable transformation
                happens when knowledge, empowerment and accountability intersect
                at the local level.
              </p>
              <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                Our work integrates education, protection, gender equality and
                health within a single framework that strengthens both
                individuals and community systems. Through structured programs,
                trainings and advocacy, we help build a collective response to
                child rights violations, especially early child marriages and
                gender-based discrimination. Our work is guided by an
                integrated, participatory approach built around the following
                key pillars:
              </p>
              {[
                "Community Mobilisation & Empowerment",
                "Education & Learning Continuity",
                "Health & Wellbeing",
                "Advocacy & Systems Strengthening",
                "Evidence & Learning",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {index + 1}.&nbsp;{point}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
                 <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center my-6"
                >
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-2">
                    Key Pillars of Our Approach
                  </h2>
                  <BottomBorder className="my-2 mx-auto" />
                </motion.div>  
            <div
              className="relative shadow-lg rounded-lg"
              style={{
                backgroundImage: ` url("/bgPrograms.svg")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              
              <div className="max-w-7xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {[
                    {
                      title: "Community Mobilisation and Empowerment",
                      description:
                        "Establishing Bala Panchayats (children’s councils) and Village Child Protection Committees (VCPCs) that identify and act on child rights issues",
                      para: "Encouraging adolescent participation and leadership in decision-making processes.",
                    },
                    {
                      title: "Education and Learning Continuity",
                      description: "Operating Study Centres that provide remedial education, bridge learning gaps and help mainstream out-of-school children.",
                      para: "Collaborating with teachers and schools to promote inclusive and gender-sensitive education.",
                    },
                    {
                      title: "Health and Wellbeing",
                      description: "Conducting awareness and training programs on adolescent health, menstrual hygiene and reproductive rights.",
                      para: "Linking children and families with government health and social protection services.",
                    },
                    {
                      title: "Advocacy and Systems Strengthening",
                      description: "Engaging with Panchayati Raj Institutions, schools and district departments to enforce child protection laws and schemes.",
                      para: "Facilitating coordination among government, civil society and community actors for policy-level impact.",
                    },
                    {
                      title: "Evidence and Learning",
                      description: "Using participatory monitoring tools, data tracking and research to inform ongoing interventions.",
                      para: "Documenting success stories and best practices to scale up effective models.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <h3 className="text-base font-bold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                      <p className="text-gray-600 mb-4 text-xs leading-relaxed">
                        {feature.para}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
        
        </div>
      </section>
    </MainLayout>
  );
}
