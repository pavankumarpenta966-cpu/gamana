// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

const SocialIcons = ({ className = "" }) => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/gamana.in",
      color: "#1877F2",
      hoverColor: "#0C63D4",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://www.twitter.com/gamana_theway",
      color: "#1DA1F2",
      hoverColor: "#0C8BD9",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/gamana.in",
      color: "#E4405F",
      hoverColor: "#C13584",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/madhu-mekala-359724152",
      color: "#0A66C2",
      hoverColor: "#004182",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/@gamanatheway",
      color: "#FF0000",
      hoverColor: "#CC0000",
    },
  ];

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="group relative"
          aria-label={social.name}
        >
          <motion.div
            className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: social.color }}
            whileHover={{ backgroundColor: social.hoverColor }}
            transition={{ duration: 0.2 }}
          >
            <social.icon className="w-2 h-2 text-white" />
          </motion.div>

          {/* Tooltip */}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {social.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
