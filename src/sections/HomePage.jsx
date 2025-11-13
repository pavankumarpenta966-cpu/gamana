import MainLayout from "../pages/MainLayout";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CustomButton from "../components/CustomButton";
import InfoCount from "./InfoCount";
import CustomScroll from "../components/CustomScroll";
import { Causes } from "../utils/Helper";
import { useBreakpoints } from "../utils/Helper";
import PartnershipPage from "../pages/PartnershipPage";
import Testimonials from "../pages/Testimonials";
import {
  FaChild,
  FaBookOpen,
  FaUserFriends,
  FaTint,
  FaUsers,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";
import { DonateButton } from "./Header";
import { useNavigate } from "react-router-dom";
import { BottomBorder } from "../sections/Footer";
export default function HomePage() {
  const { lg, md, sm, xs } = useBreakpoints();
  const navigate = useNavigate();
  const slidesToShow = xs ? 1 : sm ? 2 : md ? 2 : lg ? 3 : 3;
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const programs = [
    {
      num: "01",
      title: "Child Protection and Child Marriage Prevention",
      icon: <FaChild />,
    },
    {
      num: "02",
      title: "Education and Learning Continuity",
      icon: <FaBookOpen />,
    },
    {
      num: "03",
      title: "Adolescent Empowerment and Life Skills",
      icon: <FaUserFriends />,
    },
    {
      num: "04",
      title: "Menstrual Health and Hygiene (MHH) Education",
      icon: <FaTint />,
    },
    {
      num: "05",
      title: "Community Mobilisation and Governance",
      icon: <FaUsers />,
    },
    {
      num: "06",
      title: "Monitoring, Evaluation & Data Systems",
      icon: <FaChartLine />,
    },
  ];

  return (
    <MainLayout>
      <div className="flex flex-col gap-20">
        <section className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[90vh]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.4), rgba(38, 38, 38, 0.6)), url("/approach.jpg")',
            }}
          />
          <div className="relative md:w-3/4 mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* <h1 className="text-base md:text-3xl font-bold mb-6 leading-relaxed capitalize text-[#fafafa]">
                At the heart of our work lies a simple yet powerful belief that
                every child deserves to grow up in a safe, educated and
                nurturing environment where equality, dignity and opportunity
                are not privileges, but rights
              </h1> */}
              <p className="text-sm md:text-xl mb-8 text-gray-100 border-l-4 border-stealOrange px-2 leading-normal">
                Over the years, GAMANA has focused on preventing early child
                marriages, ensuring access to quality education, enhancing
                adolescent health and menstrual hygiene and strengthening family
                and community systems to protect every child
              </p>
              <DonateButton />
            </motion.div>
          </div>
          <div className="absolute w-3/4 mx-auto bottom-9 left-1/2 -translate-x-1/2 cursor-pointer">
            <InfoCount />
          </div>
        </section>

        <section className="md:w-3/4 mx-auto  bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative flex items-start">
                  <img
                    src="/about.jpg"
                    alt="Community gathering"
                    className="rounded-lg shadow-lg  object-cover h-[65vh]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-forest mb-3 font-semibold text-sm">
                  About Us
                </p>
                <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-900 leading-tight capitalize">
                  Say yes to education, 
                  <br />
                  say no to child marriage.
                </h2>
                <BottomBorder className="mr-auto mb-2" />
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  GAMANA is a volunteer non-profit organization rooted in the
                  Amaravati region of Andhra Pradesh, India. Founded in 2007,
                  GAMANA is dedicated to promoting child rights, gender equality
                  and community empowerment through participatory rights-based
                  approaches. We believe that sustainable social change begins
                  with informed and empowered communities, especially children
                  and adolescents who are encouraged to voice their rights and
                  shape their future.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "🌍 Individuals Reached (2,428+)",
                    "👧👦 Empowered Adolescents (1,446)",
                    "💍 Child Marriages Prevented (37)",
                    "🎓 Out-of-School Children Mainstreamed (162)",
                    "💧 Girls Educated on Menstrual Health (832)",
                    "🩺 ASHA & Anganwadi Workers Trained (270)",
                  ]?.map((item, index) => (
                    <li className="text-gray-600 text-sm" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
                <CustomButton
                  handleClick={() => {
                    navigate("/about");
                  }}
                  className="bg-emerald-600 text-white px-8 py-3 rounded font-semibold hover:bg-emerald-800 transition"
                >
                  About More
                </CustomButton>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="lg:w-3/4 w-full mx-auto bg-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-center mb-12">
              <p className="text-emerald-600 text-sm font-semibold tracking-wide mb-3">
                Causes
              </p>
              <h2 className="text-xl md:text-4xl font-bold text-gray-900">
            Educate a girl, Empower generations.
              </h2>

              <BottomBorder className="mx-auto my-3" />
            </div>
          </motion.div>
          <div className="mb-3">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <CustomScroll
                slidesToShow={slidesToShow}
                arrows={true}
                nextArrow={true}
                prevArrow={true}
              >
                {Causes.map((cause, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border py-4"
                      >
                        <div className="text-center py-2">
                          <div className="bg-green-700 text-white w-12 h-12 rounded-2xl mx-auto flex justify-center items-center">
                          {cause.icon}
                        </div>
                         <h3 className="text-xl font-bold text-gray-900">
                            {cause.title}
                          </h3>
                        </div>
                        <div className="px-6 py-2 flex-grow flex flex-col">
                          {/* <h3 className="text-xl font-bold text-gray-900 mb-4">
                            {cause.title}
                          </h3> */}
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-6">
                            {cause.description}
                          </p>
                          <CustomButton
                          size="sm"
                            handleClick={() =>
                              navigate(
                                index === 3 ? "/target-area" : "/vision&mission"
                              )
                            }
                          >
                            View More
                          </CustomButton>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </CustomScroll>
            </motion.div>
          </div>
        </section>

        <div
          className="shadow-lg md:py-16 md:px-8 rounded-lg"
          style={{
            backgroundImage: ` url("/bgPrograms.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <section className="md:w-3/4 mx-auto  bg-opacity-80 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-forest font-semibold mb-3">
                  Programs & Activities
                </p>
                <h2 className="text-2xl font-bold mb-2 text-gray-900">
                  GAMANA’s Journey to Build Safe, Educated and Empowered
                  Children
                </h2>
                <BottomBorder className="my-2" />
                <p className="text-gray-600 mb-3 leading-relaxed">
                  GAMANA is a voluntary, non-profit
                  organization rooted in the Amaravati region of Andhra Pradesh,
                  India. Founded in 2007, GAMANA is dedicated to promoting child
                  rights, gender equality..
                </p>
                <CustomButton
                  handleClick={() => {
                    navigate("/programs&activity");
                  }}
                  className="bg-emerald-700 text-white px-8 py-3 rounded hover:bg-emerald-800 transition font-semibold"
                >
                  View More
                </CustomButton>
              </motion.div>

              <div>
                <img
                  src="/Programs.svg"
                  alt="GAMANA community gathering"
                  className="rounded-lg shadow-xl mb-8 border border-emerald-100"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="">
                  {programs.map((item) => (
                    <div
                      key={item.num}
                      className="flex items-center gap-4 mt-6 first:mt-0"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-forest text-white rounded-full flex items-center justify-center font-bold text-md shadow-md">
                        {item.icon}
                      </div>
                      <div className="flex text-sm items-center gap-3 font-semibold text-gray-800 ">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        <PartnershipPage />

        {/* <section className="w-3/4 mx-auto bg-gray-70">
          <Testimonials />
        </section> */}

        {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-emerald-600 mb-4 font-semibold">OUR TEAM</p>
            <h2 className="text-4xl font-bold text-gray-800">Meet Our Volunteers</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {volunteers.map((volunteer, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="relative mb-4 group">
                  <img
                    src="/api/placeholder/300/300"
                    alt={volunteer.name}
                    className="w-full rounded-full shadow-lg group-hover:scale-105 transition"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{volunteer.name}</h3>
                <p className="text-gray-600 mb-2">{volunteer.role}</p>
                <div className="flex justify-center gap-1">
                  {[...Array(volunteer.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <CustomButton className="bg-emerald-600 text-white px-8 py-3 rounded hover:bg-emerald-700 transition">
              VIEW ALL TEAM
            </CustomButton>
          </div>
        </div>
      </section> */}
        {/*<section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-emerald-600 mb-4 font-semibold">FROM OUR BLOG</p>
            <h2 className="text-4xl font-bold text-gray-800">Latest News</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {news.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <img src="/api/placeholder/400/250" alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-emerald-600 text-sm mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <a href="#" className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Read More
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <CustomButton className="bg-emerald-600 text-white px-8 py-3 rounded hover:bg-emerald-700 transition">
              VIEW ALL POSTS
            </CustomButton>
          </div>
        </div>
      </section> */}
      </div>
    </MainLayout>
  );
}
