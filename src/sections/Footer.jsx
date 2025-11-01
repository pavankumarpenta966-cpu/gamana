import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Info,FooterLinks } from "../utils/Helper";
export const OrgLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/gamana/192.png" alt="Gamana" className="w-10 h-10" />
      <div className="flex flex-col">
        <span className="h-text">Gamana</span>
        <span className="!text-xs sub-para">The Way for a Better Tomorrow</span>
      </div>
    </div>
  );
};
export default function Footer() {
  return (
    <footer>
      <div className="w-4/5 mx-auto py-14">
        <div className="grid md:grid-cols-4 gap-8 pb-3">
          <div>
            <OrgLogo />
            <p className="my-3 sub-para line-clamp-6">
             {Info}
            </p>
            <div className="flex gap-4 mt-3">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
          {FooterLinks.map((section, i) => (
        <div key={i}>
          <h4 className="nav-list !text-lg mb-3">{section.title}</h4>
          <ul className="space-y-2">
            {section.links.map((link, j) => (
              <li key={j}>
                <a
                  href={link.href}
                  className="sub-para"
                >
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
        <p>&copy; 2024 Samaara. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
