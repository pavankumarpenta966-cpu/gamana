// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HiHome, HiArrowLeft } from "react-icons/hi";
import CustomButton from "../components/CustomButton";

export default function NotFound() {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl relative z-10"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-gray-800 opacity-10">
            404
          </h1>
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 -mt-32 sm:-mt-40 md:-mt-48"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-700 bg-opacity-10">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-green-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 px-4 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <CustomButton
            handleClick={handleGoHome}
            icon={<HiHome className="w-5 h-5" />}
            className="w-full sm:w-auto bg-green-700"
          >
            Go Home
          </CustomButton>
          <CustomButton
            handleClick={handleGoBack}
            icon={<HiArrowLeft className="w-5 h-5" />}
            className="w-full sm:w-auto bg-gray-700"
          >
            Go Back
          </CustomButton>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1 }}
        className="absolute top-20 left-10 w-32 h-32 bg-green-700 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-green-700 rounded-full blur-3xl"
      />
    </div>
  );
}