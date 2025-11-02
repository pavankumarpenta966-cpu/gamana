import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "David Griffith",
      role: "Volunteer",
      text: "Fringilla urna porttitor rhoncus dolor. Etiam dignissim diam quis enim lobortis. Lacus viverra vitae congue eu consequat ac felis donec. Tempus urna et pharetra pharetra. Odio eu feugiat pretium nibh. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Id leo in vitae turpis massa sed elementum.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "Community Member",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Donor",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="text-green-700 font-semibold text-sm uppercase tracking-wide mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What People Say about Our Organization
            </h2>
            <div className="w-20 h-1 bg-green-700 mb-8"></div>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  {testimonials[currentIndex].text}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-green-700 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-700 hover:text-green-700 transition-all"
                aria-label="Previous testimonial"
              >
                <HiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center hover:bg-green-800 transition-all shadow-md"
                aria-label="Next testimonial"
              >
                <HiChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-sm "
              >
                <img
                src="/gamana/Testimonials.svg"
                  alt="Community activity"
                  className=" h-[200px] md:h-[300px] lg:h-[430px] w-[450px] "
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
              </motion.div>
            </AnimatePresence>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-700 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-700 rounded-full opacity-10 blur-3xl"></div>
          </div>
      </div>
    </section>
  );
}