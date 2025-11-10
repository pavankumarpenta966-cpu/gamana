import MainLayout from "../pages/MainLayout";
import PageHeader from "../sections/PageHeader";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BottomBorder } from "../sections/Footer";
import PartnershipPage from "./PartnershipPage";
import { Image } from "@heroui/react";

 const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
  delay: 0.3,
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
  delay: 0.3,
};

export default function TargetAreaPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <PageHeader
        title="Target Area"
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Target Area" }]}
      />
      <section className="my-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-4 md:gap-16 flex-col md:flex-row">
            <motion.div {...fadeInRight} className="relative top-0">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Target  Area</h2>
              <BottomBorder className="my-2" />
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                GAMANA’s programs are implemented across 40 villages in the
                Thullur, Mangalagiri and Tadepalli Mandals of Guntur District,
                Andhra Pradesh, India. These villages form part of the Amaravati
                Capital Region, an area undergoing rapid socio-economic
                transformation.
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
         <motion.div {...fadeInUp} className="flex justify-center mt-4">
                <Image
                  src="/gamana/target.jpg"
                  alt="Community meeting"
                  className="w-[100vw] h-[55vh] object-cover"
                />
              </motion.div>
        </div>
      </section>
      <PartnershipPage />
    </MainLayout>
  );
}
