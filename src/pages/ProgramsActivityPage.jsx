import React from "react";
import MainLayout from "../pages/MainLayout";
import PageHeader from "../sections/PageHeader";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Image } from "@heroui/react";
import { programs } from "../utils/Helper";
export default function ProgramsActivityPage() {
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
        title="Programs & Activity"
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Programs & Activity" },
        ]}
      />
      <section className="my-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {programs?.map((item, index) => (
            <div
              className="flex justify-between items-center gap-4 md:gap-16 flex-col md:flex-row"
              key={index}
            >
              <motion.div {...fadeInLeft}>
                <Image
                  src={item?.url}
                  alt="Community meeting"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div {...fadeInRight}>
                <h2 className="text-xl font-bold mb-2 text-gray-900">
                  {item?.title}
                </h2>
                {item?.description?.map((sub_item, sub_index) => (
                  <p
                    className="text-gray-600 my-1 text-sm leading-relaxed"
                    key={sub_index}
                  >
                    {sub_item}
                  </p>
                ))}
                <h6 className="text-base font-semibold text-gray-900">Key Components</h6>
                {item?.components?.map((list, list_index) => (
                  <motion.div
                    key={list_index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    
                    <p className="text-gray-600 text-base leading-relaxed">
                      {list}
                    </p>
                  </motion.div>
                ))}
                <h6  className="text-base font-semibold mb-2 text-gray-900">Impact Highlights</h6>
                {item?.impact?.map((impact, impact_index) => (
                <motion.div
                    key={impact_index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
             className="flex items-start gap-3"
                  >
                    
                    <p className="text-gray-600 text-base leading-relaxed">
                      {impact}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
