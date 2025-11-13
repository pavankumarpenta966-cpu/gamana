import MainLayout from "../pages/MainLayout";
import { BottomBorder } from "../sections/Footer";
import PageHeader from "../sections/PageHeader";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import PartnershipPage from "./PartnershipPage";
import { GoDotFill } from "react-icons/go";
export default function PhilosophyPage() {
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
        title="Philosophy"
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Philosophy" }]}
      />{" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <motion.div {...fadeInRight} className="relative top-0">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Our Philosophy
          </h2>
          <p className="text-gray-600 mb-2 text-sm leading-relaxed">
            At the heart of GAMANA’s work lies a simple yet powerful belief that
            every child deserves to grow in an environment of safety, equality
            and opportunity.
          </p>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            We see development not as charity, but as a shared journey of
            empowerment, where communities take the lead in identifying their
            challenges and shaping sustainable solutions.
          </p>
        </motion.div>

        <div
          className="relative shadow-lg py-16 px-8 rounded-lg"
          style={{
            backgroundImage: ` url("/bgPrograms.svg")`,
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
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                Our philosophy is rooted in the following principles
              </h2>
              <BottomBorder className="my-2 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Rights-based approach",
                  description:
                    "Every intervention is designed to uphold the rights of children, adolescents and women as enshrined in the Constitution of India and the UN Convention on the Rights of the Child (UNCRC)",
                },
                {
                  title: "Participation and Inclusion",
                  description:
                    " Children and youth are not just beneficiaries, but change-makers who influence community and institutional systems",
                },
                {
                  title: "Gender Equality",
                  description:
                    "Promoting equal opportunities and challenging patriarchal norms that sustain child marriage and discrimination",
                },
                {
                  title: "Sustainability through Partnerships",
                  description:
                    "Strengthening local capacities and ensuring that programs continue beyond project timelines",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-lg shadow-lg  hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-base font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs">{feature.description}</p>
                </motion.div>
              ))}
             
            </div>
             
          </div>
          <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                Through this philosophy, GAMANA continues to “walk with
                communities” - not to deliver solutions, but to co-create a path
                towards justice, dignity and equality for all.
              </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-4">
          <motion.div {...fadeInLeft}>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Legal Status
            </h2>
            <p className="text-gray-600 mb-2 text-sm leading-relaxed">
              GAMANA is a registered voluntary organization under the Andhra
              Pradesh Societies Registration Act, 2001.
            </p>
            <p className="text-gray-600 mb-2 text-sm leading-relaxed">
              It is also recognized and authorized to receive both domestic and
              foreign contributions for social development purposes.
            </p>
            {[
              "Registered Name: GAMANA",
              "Registered under the Andhra Pradesh Public Societies Registration Act 35 of 2001, vide Registration Number 467/2007 dated 01.11.2007",
              "Registered and renewed with Ministry of Home Affairs, Government of India, under Foreign Contribution Regulation Act, vide No. 010190503 valid up to 16.06.2030",
              "Registered under Section 12AA of the Income Tax Act 1961, Unique Registration No. AAAAG5306LE20214 from AY 2022-23 to AY 2026-2027",
              "Registered under Section 80G (5) (VI) of the Income Tax Act, 1961, Unique Registration No. AAAAG5306LF20212 from AY 2022-23 to AY 2026-2027",
              "Income Tax PAN Number: AAAAG5306L",
              "NGO Darpan ID: AP/2017/0165226",
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex space-x-1 align-middle items-center">
                  <p className="font=-semibold text-gray-600 text-sm">
                   <GoDotFill />
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...fadeInRight} className="relative top-0">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Key Partners and Collaborations
            </h2>
            {[
              "WDP – Switzerland",
              "SLCW – Switzerland",
              "MIVA – Switzerland",
              "Manos Unidas – Spain",
              "Ministry of Textiles – New Delhi",
              "Department of Women Development & Child Welfare (DWDCW)",
              "Department of Education",
              "Department of Health and Family Welfare",
              "Panchayati Raj Institutions and local governance bodies",
              "Local Institutions: Schools, Anganwadi Centres, Adolescent Clubs and Village Child Protection Committees (VCPCs)",
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center align-middle gap-1"
              > <GoDotFill className="text-xs text-gray-600"/>
                <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...fadeInLeft} className="relative top-0">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Project Partners & Collaborations
            </h2>
            <p className="text-gray-600 mb-2 text-sm leading-relaxed">
              Over the years, GAMANA has partnered with national and
              international organizations, government departments and local
              networks to expand its impact. Each partnership is built on trust,
              shared learning and the collective goal of advancing children’s
              rights.
            </p>
          </motion.div>
          <motion.div {...fadeInRight} className="relative top-0">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Networks & Forums
            </h2>
            <p className="text-gray-600 mb-2 text-sm leading-relaxed">
              Collaboration with child rights alliances, youth networks and NGOs
              for collective advocacy and campaigns.
            </p>
          </motion.div>
        </div>
        <motion.p className="text-gray-600 mb-4 text-sm leading-relaxed mt-4">
          Together, these partnerships have strengthened GAMANA’s reach and
          impact, ensuring that every effort to end child marriage, empower
          adolescents and promote education is sustained through community
          ownership and institutional collaboration
        </motion.p>
      </div>
      <PartnershipPage />
    </MainLayout>
  );
}
