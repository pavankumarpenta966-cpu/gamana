import { Info, FooterLinks } from "../utils/Helper";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CustomButton from "../components/CustomButton";
import { Divider } from "@heroui/react";
import SocialIcons from "../components/SocialIcons";
import { useNavigate, Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { phoneNumber, email } from "../utils/Helper";
import { HiMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { DonateButton } from "./Header";
export const OrgLogo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src="/gamana/192.png" alt="Gamana" className="w-10 h-10" />
      <div className="flex flex-col">
        <span className="h-text capitalize">GAMANA</span>
        <span className="!text-xs sub-para">The Way for a Better Tomorrow</span>
      </div>
    </div>
  );
};
export const BottomBorder = ({ className }) => {
  return <div className={`w-20 h-1 bg-emerald-600 ${className}`}></div>;
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
        <div className="px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white md:flex justify-around md:w-4/5 mx-auto"
          >
            <div className="text-start">
              <p className="mb-2 font-bold text-2xl tracking-normal leading-relaxed capitalize">
              Together we change mindsets, together we change lives.
              </p>
              <p className="text-sm md:text-base font-semibold tracking-normal leading-relaxed mb-2">
                Inspires collective community action the heart of GAMANA’s work.
              </p>
              <Divider className="w-1/4 bg-white mt-3 mb-4" />
            </div>
            <div className="flex md:justify-center gap-4 flex-wrap my-auto">
              <CustomButton
                variant="bordered"
                className="rounded !bg-white !text-forest"
              >
                Be Volunteer
              </CustomButton>
              <DonateButton />
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
                      <Link
                        to={link.href}
                        className="sub-para flex item-center align-middle hover:text-forest hover:font-bold hover:underline hover:transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="nav-list !text-lg mb-3">Contacts Info</h4>
              <ul className="space-y-2">
                <li className="sub-para flex item-center">
                  <div className="flex  gap-2">
                    <span className="bg-forest text-white rounded-full p-2">
                      <FaPhoneAlt className="w-3 h-3" />
                    </span>
                    <a href={`tel:+91${phoneNumber}`} className="my-auto">
                      {phoneNumber}
                    </a>
                  </div>
                </li>
                <li className="sub-para flex item-center">
                  <div className="flex  gap-2">
                    <span className="bg-forest text-white rounded-full p-2">
                      <HiMail className="w-3 h-3" />
                    </span>
                    <a href={`tel:+91${phoneNumber}`} className="my-auto">
                      {email}
                    </a>
                  </div>
                </li>
                <li className="sub-para flex item-center">
                  <div className="flex gap-2">
                    <span className="bg-forest text-white rounded-full p-2 h-7">
                      <FaLocationDot className="w-3 h-3" />
                    </span>
                    <p className="my-auto">
                      GAMANA (The Way) 2-76. Ananthavaram Village, Thullur
                      Mandal, Guntur District, Andhra Pradesh – 522 236, India
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-forest text-white text-center py-2">
          <p>&copy; 2025 GAMANA. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
