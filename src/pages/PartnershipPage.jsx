import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PartnershipPage() {
      const partners = [
    { name: "NSDC", logo: "N.S.D.C" },
    { name: "NSDC", logo: "N.S.D.C" },
    { name: "NSDC", logo: "N.S.D.C" },
    { name: "NSDC", logo: "N.S.D.C" },
  ];

   const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <div>
         {/* Partnership Section */}
                <div className="max-w-7xl mx-auto px-4 py-16">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                  >
                    <span className="text-green-700 font-semibold text-sm uppercase tracking-wide">
                      Partnership
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                      Become Support Partner
                    </h2>
                    <div className="w-24 h-1 bg-yellow-400 mt-4"></div>
                  </motion.div>
        
                  <Slider {...sliderSettings} className="partner-slider">
                    {partners.map((partner, index) => (
                      <div key={index} className="px-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center h-32"
                        >
                          <div className="text-center">
                            <div className="flex justify-center items-center gap-2 mb-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">
                              {partner.logo}
                            </h3>
                            <p className="text-xs text-gray-500">
                              SKILL DEVELOPMENT CENTRE
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </Slider>
                </div>
    </div>
  )
}
