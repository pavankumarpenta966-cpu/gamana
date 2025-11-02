import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // 👈 if using React Router

export default function PageHeader({ title, breadcrumb = [], bgImage }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-64 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImage}')`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm flex-wrap justify-center">
          {breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;
            return (
              <React.Fragment key={index}>
                {isLast ? (
                  <span className="text-white">{item.name}</span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-green-400 cursor-pointer transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && <span className="text-white">›</span>}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
