import { useState } from "react";
import { email, phoneNumber } from "../utils/Helper";
import { HiMail } from "react-icons/hi";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes
} from "react-icons/fa";
import CustomButton from "../components/CustomButton";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { OrgLogo } from "./Footer";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="hidden md:flex bg-forest text-white py-2">
        <div className="md:w-4/5 mx-auto xs:px-2 md:px-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <p className="flex items-center gap-1.5 sub-para">
                <FaPhoneAlt className="w-3 h-3" />
                {phoneNumber}
              </p>
              <span className="flex items-center gap-1.5 sub-para">
                <HiMail className="w-3 h-3 text-white" />
                {email}
              </span>
            </div>
            <div className="flex gap-4">
              <FaFacebookF className="w-3 h-3 cursor-pointer hover:scale-110 transition" />
              <FaTwitter className="w-3 h-3 cursor-pointer hover:scale-110 transition" />
              <FaInstagram className="w-3 h-3 cursor-pointer hover:scale-110 transition" />
              <FaLinkedinIn className="w-3 h-3 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </header>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="md:w-4/5 xs:px-2 px-0 mx-auto py-4 flex justify-between items-center">
           <OrgLogo />
          <div className="hidden md:flex gap-8 items-center">
            <a href="#" className="nav-list">
              HOME
            </a>
            <a href="#" className="nav-list">
              ABOUT
            </a>
            <a href="#" className="nav-list">
              WHAT WE DO
            </a>
            <a href="#" className="nav-list">
              MEDIA
            </a>
            <a href="#" className="nav-list">
              CONTACT
            </a>
          </div>
          <CustomButton className="hidden md:block rounded">DONATE NOW</CustomButton>
          <CustomButton
            className="md:hidden p-3 rounded-lg mr-2"
            handleClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="w-3 h-3" />
            ) : (
              <FaBars className="w-3 h-3" />
            )}
          </CustomButton>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#" className="nav-list">
              HOME
            </a>
            <a href="#" className="nav-list">
              ABOUT
            </a>
            <a href="#" className="nav-list">
              WHAT WE DO
            </a>
            <a href="#" className="nav-list">
              MEDIA
            </a>
            <a href="#" className="nav-list">
              CONTACT
            </a>
            <CustomButton className="">
              DONATE NOW
            </CustomButton>
          </div>
        </motion.div>
      )}{" "}
    </>
  );
}
