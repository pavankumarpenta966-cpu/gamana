import MainLayout from "../pages/MainLayout";
import PageHeader from "../sections/PageHeader";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
export default function GovernancePage() {
  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };
  return (
    <MainLayout>
      {/* Hero Section */}
      <PageHeader
        title="Governance"
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Governance" }]}
      />
      <section className="my-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-4 md:gap-16 flex-col md:flex-row">
            <motion.div {...fadeInRight} className="relative top-0">
              <h2 className="text-xl font-bold mb-2 text-gray-900">
                Structure
              </h2>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                GAMANA functions under a democratically elected Executive
                Committee (EC) that governs the organization’s overall
                direction, policy decisions and accountability mechanisms.
              </p>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                GAMANA focuses its efforts here to address the growing
                challenges faced by children and adolescents, particularly those
                related to education, early and forced child marriages,
                gender-based discrimination and child protection. Through close
                engagement with schools, local institutions and community
                structures, GAMANA ensures that interventions are
                community-driven, inclusive and sustainable, creating safer and
                more supportive environments for children and young people to
                thrive.
              </p>
            </motion.div>
          </div>
          <div className="my-4 grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInRight}>
              <h2 className="text-xl font-bold mb-2 text-gray-900">
                Executive Committee Composition :
              </h2>

              {[
                {
                  label: "President/Chairperson",
                  value: "Provides overall guidance and ensures policy compliance.",
                },
                {
                  label: "Secretary/Director (Chief Functionary)",
                  value: "Oversees daily operations, partnerships and implementation.",
                },
                {
                  label: "Treasurer",
                  value: "Manages financial oversight, donor compliance and reporting.",
                },
                {
                  label: "Members (General Body)",
                  value: "Offer advisory support and sectoral expertise.",
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
                  &nbsp;  - {point?.value}
                  </p>
                </motion.div>
              ))}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed mt-2">
                The Executive Committee meets quarterly to review progress,
                approve plans and evaluate program outcomes.
              </p>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Annual General Body Meetings (AGMs) are held to ratify financial
                statements, strategic plans and statutory compliances
              </p>
            </motion.div>
            <motion.div {...fadeInRight} className="space-y-4 mt-2">
              <h2 className="text-xl font-bold mb-2 text-gray-900">
                Practices
              </h2>
              {[
                "Annual audits conducted by a certified Chartered Accountant",
                "Transparency in all financial and programmatic reporting",
                "Compliance with FCRA, 12A, and 80G provisions of the Income Tax Act.",
                "Adherence to safeguarding, gender and child protection policies.",
                "Regular monitoring and evaluation for accountability and learning.",
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
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
