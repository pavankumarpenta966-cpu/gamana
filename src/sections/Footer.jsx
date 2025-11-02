import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Info, FooterLinks } from "../utils/Helper";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CustomButton from "../components/CustomButton";
import { Divider } from "@heroui/react";
import SocialIcons from "../components/SocialIcons";
import { useNavigate } from "react-router-dom";
export const OrgLogo = () => {
   const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
      <img src="/gamana/192.png" alt="Gamana" className="w-10 h-10" />
      <div className="flex flex-col">
        <span className="h-text capitalize">GAMANA</span>
        <span className="!text-xs sub-para">The Way for a Better Tomorrow</span>
      </div>
    </div>
  );
};
export default function Footer() {
  return (
    <>
      <section
        className="relative py-14"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20, 20, 20, 0.5), rgba(57, 57, 57, 0.5)), url("/gamana/overlay.svg")',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white md:flex justify-around md:w-4/5 mx-auto"
          >
            <div className="text-start">
              <p className="mb-2 font-semibold text-[20px] leading-[26px] tracking-[0]">
                Do Good
              </p>
              <p className="text-2xl md:text-4xl font-bold">
                Join Our Mission to Improve
              </p>
              <p className="text-2xl md:text-4xl font-bold">the World</p>
              <Divider className="w-1/3 bg-white mt-2 mb-8" />
            </div>
            <div className="flex md:justify-center gap-4 flex-wrap my-auto">
              <CustomButton
                variant="bordered"
                className="rounded !bg-white !text-forest"
              >
                Be Volunteer
              </CustomButton>
              <CustomButton className="rounded">Donate Now</CustomButton>
            </div>
          </motion.div>
        </div>
      </section>
      <footer>
        <div className="w-4/5 mx-auto py-14">
          <div className="grid md:grid-cols-4 gap-8 pb-3">
            <div>
              <OrgLogo />
              <p className="my-3 sub-para line-clamp-6">{Info}</p>
              <div className="flex gap-4 mt-3">
                <SocialIcons />
              </div>
            </div>
            {FooterLinks.map((section, i) => (
              <div key={i}>
                <h4 className="nav-list !text-lg mb-3">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} className="sub-para flex item-center">
                        <MdOutlineKeyboardArrowRight className="invisible group-hover:visible" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-forest text-white text-center py-2">
          <p>&copy; 2025 Gamana. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
