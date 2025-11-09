import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { HiMail, HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import SocialIcons from "../components/SocialIcons";
import { phoneNumber, email } from "../utils/Helper";
import { OrgLogo } from "./Footer";
import CustomButton from "../components/CustomButton";
import { ApiBaseUrl } from "../utils/Helper";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Inside your component, add at the top:
export const DonateButton = () => {
  const navigate = useNavigate();
  return(
     <CustomButton className="hidden md:block rounded" handleClick={() => {
            navigate("/donate")
          }}>
            Donate Now
          </CustomButton>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const navigationItems = [
    { name: "HOME", path: "/", hasSubmenu: false },
    {
      name: "WHAT WE ARE",
      path: "#",
      hasSubmenu: true,
      submenu: [
        { name: "About Us", path: `/about` },
        {
          name: "Vision & Mission",
          path: "/vision&mission",
        },
        { name: "Target Area", path: `/target-area` },
        { name: "Governance", path: `/governance` },
        { name: "Team", path: `/team` },
      ],
    },
    {
      name: "WHAT WE DO",
      path: "#",
      hasSubmenu: true,
      submenu: [
        { name: "Our Approach", path: `/our-approach` },
        { name: "Philosophy", path: `/philosophy` },
        { name: "Programs & Activity", path: `/programs&activity` },
      ],
    },
    { name: "CONTACT", path: "/contact", hasSubmenu: false },
  ];

  const toggleSubmenu = (itemName) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  return (
    <>
      {/* Top Bar - Desktop Only */}
      <header className="hidden md:flex bg-forest text-white py-2">
        <div className="md:w-4/5 mx-auto xs:px-2 md:px-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <p className="flex items-center gap-1.5 text-sm">
                <FaPhoneAlt className="w-3 h-3" />
                <a href={`tel:+91${phoneNumber}`}>{phoneNumber}</a>

                
              </p>
              <span className="flex items-center gap-1.5 text-sm">
                <HiMail className="w-4 h-4 text-white" />
                <a href={`mailto:${email}?subject=Inquiry%20from%20Website&body=Hello%20GAMANA%20Team,`}>
  {email}
</a>

                
              </span>
            </div>
            <div className="flex gap-4">
              <SocialIcons />
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="md:w-4/5 xs:px-2 px-0 mx-auto py-4 flex justify-between items-center">
          <OrgLogo />
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2 items-center">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasSubmenu ? (
                  <div className="relative">
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-green-700 transition cursor-pointer rounded hover:bg-gray-50">
                      {item.name}
                      <HiChevronDown className="w-4 h-4" />
                    </button>

                    {/* Desktop Dropdown */}
                    <div className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <span className="absolute top-0 left-0 w-3 h-3 bg-white border-t border-l border-gray-200 transform rotate-45 -mt-1.5 ml-6"></span>
                      <div className="relative z-10 py-1">
                        {item.submenu.map((subItem) => (
                          <div
                            key={subItem.name}
                            className="relative group/sub"
                          >
                            <Link
                              to={subItem.path}
                              className="flex items-center justify-between transition nav-list px-4 py-2 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-200 hover:text-forest"
                            >
                              {subItem.name}
                              {subItem.nested && (
                                <HiChevronDown className="w-4 h-4 -rotate-90" />
                              )}
                            </Link>

                            {/* Nested Dropdown - Shows on hover of parent item */}
                            {subItem.nested && (
                              <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                                <span className="absolute top-0 left-0 w-3 h-3 bg-white border-t border-l border-gray-200 transform rotate-45 -ml-1.5 mt-2"></span>
                                <div className="relative z-10 py-1">
                                  {subItem.nested.map((nestedItem) => (
                                    <Link
                                      to={nestedItem.path}
                                      className="block px-4 py-2 font-medium text-sm text-gray-700 hover:bg-gray-200 hover:text-forest transition first:rounded-t-lg last:rounded-b-lg"
                                    >
                                      {nestedItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="transition nav-list block px-4 hover:text-forest"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <DonateButton/>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              if (!isMenuOpen) {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setTimeout(() => setIsMenuOpen(true), 300);
              } else {
                setIsMenuOpen(false);
              }
            }}
            className="md:hidden p-2 text-green-700"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasSubmenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="w-full flex items-center justify-between py-2 text-sm font-semibold text-gray-700 hover:text-forest transition"
                      >
                        {item.name}
                        <motion.div
                          animate={{
                            rotate: openSubmenu === item.name ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <HiChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.submenu.map((subItem) => (
                              <div key={subItem.name}>
                                <a
                                  href={subItem.path}
                                  className="block py-2 text-sm text-gray-600 hover:text-forest transition"
                                >
                                  {subItem.name}
                                </a>
                                {subItem.nested && (
                                  <div className="pl-4">
                                    {subItem.nested.map((nestedItem) => (
                                      <Link
                                        key={nestedItem.name}
                                        to={nestedItem.path}
                                        className="block py-2 text-sm text-gray-500 hover:text-forest transition"
                                      >
                                        • {nestedItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-2 text-sm font-semibold text-gray-700 hover:text-forest transition"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

             <DonateButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
