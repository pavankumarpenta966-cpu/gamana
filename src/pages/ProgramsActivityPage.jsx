import React from "react";
import MainLayout from "../pages/MainLayout";
import PageHeader from "../sections/PageHeader";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Image, Card, CardBody } from "@heroui/react";
import { programs } from "../utils/Helper";
import { FaCheckCircle } from "react-icons/fa";
export default function ProgramsActivityPage() {
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
          {programs?.map((item, index) => {
           const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <CardBody className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {isEven && (
                        <Image
                          src={item.url}
                          alt={item.title}
                          className="w-full h-[35vh] object-cover"
                          removeWrapper
                        />
                      )}
                      <motion.div
                        className="p-6 md:p-8 bg-white flex flex-col justify-center"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <h2 className="text-2xl md:text-3xl font-bold text-forest mb-4 leading-tight">
                          {item.title}
                        </h2>
                        <div className="space-y-3">
                          {item.description.map((desc, descIndex) => (
                            <p
                              key={descIndex}
                              className="text-gray-700 leading-relaxed text-sm"
                            >
                              {desc}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                      {!isEven && (
                        <Image
                          src={item.url}
                          alt={item.title}
                          className="w-full h-[35vh] object-cover"
                          removeWrapper
                        />
                      )}

                      {/* Box 3: Key Components */}
                      <motion.div
                        className="p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white border-t md:border-t-0 md:border-r border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-1 h-8 bg-stealOrange rounded-full"></div>
                          <h3 className="text-xl font-bold text-forest">
                            Key Components
                          </h3>
                        </div>
                        <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                          {item.components.map((component, compIndex) => (
                            <motion.div
                              key={compIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay: compIndex * 0.05,
                              }}
                              className="flex items-start gap-3 group"
                            >
                              <FaCheckCircle className="text-forest text-base mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {component}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Box 4: Impact Highlights */}
                      <motion.div
                        className="p-6 md:p-8 bg-gradient-to-br from-forest/5 to-stealOrange/5 border-t border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-1 h-8 bg-stealOrange rounded-full"></div>
                          <h3 className="text-xl font-bold text-forest">
                            Impact Highlights
                          </h3>
                        </div>
                        <div className="space-y-4">
                          {item.impact.map((impact, impactIndex) => (
                            <motion.div
                              key={impactIndex}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay: impactIndex * 0.1,
                              }}
                              whileHover={{ scale: 1.03, x: 5 }}
                              className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 "
                            >
                              <p className="text-gray-800 text-sm font-medium leading-relaxed">
                                {impact}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>
    </MainLayout>
  );
}
