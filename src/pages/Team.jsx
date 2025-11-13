import MainLayout from "./MainLayout";
import PageHeader from "../sections/PageHeader";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Image } from "@heroui/react";
export default function Team() {
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
        title="Team"
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Team" }]}
      />
      <section className="my-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInRight} className="relative top-0">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Our Team</h2>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Behind every initiative at GAMANA stands a dedicated team of
              professionals, educators, community mobilisers and volunteers
              united by a shared belief in “The Way” of empowerment and
              equality. Our strength lies in the passion of our people and the
              trust of the communities we serve.
            </p>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              GAMANA operates through a multi-level team structure; combining
              professional expertise with grassroots experience, ensuring that
              every program is people-centered, accountable and impactful.
            </p>
          </motion.div>
          <motion.div {...fadeInLeft} className="space-y-4">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Core Team Structure:
            </h2>
            {[
              {
                label: "Director & Chief Functionary",
                value:
                  "Overall leadership, strategic planning, partnerships and donor coordination",
              },
              {
                label: "Program Management Unit (PMU)",
                value: "Program planning, execution and monitoring.",
              },
              {
                label: "Finance & Administration Team",
                value: " Budgeting, compliance and donor reporting",
              },
              {
                label: "Field Implementation Team",
                value:
                  "Community facilitators, study centre tutors and village animators implementing activities on the ground",
              },
              {
                label: "Volunteers & Interns",
                value:
                  " Supporting field activities, data collection and digital engagement.",
              },
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-semibold">{point.label}</span>
                  &nbsp; : {point?.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...fadeInRight} className="mt-4">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Advisory & Volunteer Engagement
            </h2>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              GAMANA benefits from a diverse network of advisors, educators,
              social workers and youth mentors who contribute expertise across
              education, gender, law and health.
            </p>
          </motion.div>
          <motion.div {...fadeInLeft} className="space-y-4">
            {[
              "Volunteers from India and abroad (through partners like Chezuba) support digital campaigns, training and impact documentation.",
              "Local youth volunteers contribute to Study Centres, awareness drives and child protection monitoring.",
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
                <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </motion.div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Organogram</h2>
        <Image src="/organogram.jpg" alt="organogram"/>
      </div>
        </div>
      </section>
    </MainLayout>
  );
}
