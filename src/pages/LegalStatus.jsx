import MainLayout from './MainLayout'
import PageHeader from '../sections/PageHeader'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Card, CardBody  } from "@heroui/card";
import { FaUniversity, FaBalanceScale, FaIdCard, FaRegIdCard, FaGlobe } from "react-icons/fa";
const registrations = [
  {
    title: "Societies Registration",
    details:
      "Registered under the Andhra Pradesh Public Societies Registration Act 35 of 2001, vide Registration Number 467/2007 dated 01.11.2007.",
    icon: FaUniversity,
  },
  {
    title: "FCRA Registration",
    details:
      "Registered and renewed with Ministry of Home Affairs, Government of India, under Foreign Contribution Regulation Act, vide No. 010190503 valid from 17.06.2025 to 16.06.2030.",
    icon: FaGlobe,
  },
  {
    title: "Income Tax 12AA",
    details:
      "Registered under Section 12AA of the Income Tax Act 1961, Unique Registration No. AAAAG5306LE20214 from AY 2022-23 to AY 2026-2027 dated 28-03-2022.",
    icon: FaBalanceScale,
  },
  {
    title: "Income Tax 80G",
    details:
      "Registered under Section 80G (5)(VI) of the Income Tax Act, 1961, Unique Registration No. AAAAG5306LF20212 from AY 2022-23 to AY 2026-2027 dated 04-04-2022.",
    icon: FaBalanceScale,
  },
  {
    title: "PAN Number",
    details: "Income Tax PAN Number: AAAAG5306L.",
    icon: FaIdCard,
  },
  {
    title: "NGO Darpan ID",
    details: "NGO Darpan ID: AP/2017/0165226.",
    icon: FaRegIdCard,
  },
]
export default function LegalStatus() {
  return (
    <MainLayout>
        {/* Hero Section */}
        <PageHeader
          title="Legal Status"
          bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
          breadcrumb={[{ name: "Home", path: "/" }, { name: "Legal Status" }]}
        />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">        
      <div className="grid gap-6 md:grid-cols-2">
        {registrations.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardBody>
                <div className="flex items-center gap-3">
                  <Icon className="text-gray-900 text-xl" />
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.details}
                  </p>
                </div>
                </CardBody>
              </Card>
            </motion.div>
          );
        })}
      </div>
      </div>
    </MainLayout>
  )
}
