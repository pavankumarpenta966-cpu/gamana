// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CustomScroll from "../components/CustomScroll";
import { useBreakpoints } from "../utils/Helper";
import { Image } from "@heroui/react";
import { BottomBorder } from "../sections/Footer";
export default function PartnershipPage() {
  const { lg, md, sm, xs } = useBreakpoints();
  const slidesToShow = xs ? 1 : sm ? 2 : md ? 3 : lg ? 4 : 4;
  const partners = [
    { name: "NSDC", logo: "/" },
    { name: "NSDC", logo: "/" },
    { name: "NSDC", logo: "/" },
    { name: "NSDC", logo: "/" },
    { name: "NSDC", logo: "/" },
    { name: "NSDC", logo: "/" },
    { name: "NSDC", logo: "/" },
    { name: "NSDC", logo: "/" },
  ];

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
          <h2 className="text-xl md:text-4xl font-bold text-gray-800 mt-2">
            Become Support Partner
          </h2>
        <div className="w-24 h-1 bg-forest mt-4"></div>
        </motion.div>
        <CustomScroll slidesToShow={slidesToShow} dots={true} speed={500}>
          {partners.map((partner, index) => (
            <div key={index} className="px-4 flex items-center justify-center border border-gray-200">
              <Image src={`${partner.logo}p${index+1}.png`} alt={index} width={"90%"} height={"20vh"} className="mx-auto"/>
              {/* <h3 className="text-sm font-medium text-forest leading-5 tracking-normal text-center">
                {partner.name}
              </h3> */}
            </div>
          ))}
          
        </CustomScroll>
      </div>
    </div>
  );
}
