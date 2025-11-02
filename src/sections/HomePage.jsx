import MainLayout from "../pages/MainLayout";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CustomButton from "../components/CustomButton";
import InfoCount from "./InfoCount";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomScroll from "../components/CustomScroll";
export default function HomePage() {
  const causes = [
    {
      title: "Mission",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      description:
        "GAMANA envisions communities where girls stay in school, marriages are based on choice and maturity and children grow up in safe and nurturing environments that encourage learning, participation and leadership.",
    },
    {
      title: "Vision",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      description:
        "GAMANA envisions communities where girls stay in school, marriages are based on choice and maturity and children grow up in safe and nurturing environments that encourage learning, participation and leadership.",
    },
    {
      title: "Overall Objectives",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      description:
        "GAMANA envisions communities where girls stay in school, marriages are based on choice and maturity and children grow up in safe and nurturing environments that encourage learning, participation and leadership.",
    },
    {
      title: "Overall Objectives",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      description:
        "GAMANA envisions communities where girls stay in school, marriages are based on choice and maturity and children grow up in safe and nurturing environments that encourage learning, participation and leadership.",
    },
  ];

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
  return (
    <MainLayout>
      <div className="flex flex-col gap-20">
        <section className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[90vh]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(95, 95, 95, 0.5), rgba(121, 117, 117, 0.5)), url("/gamana/hero.svg")',
            }}
          />
          <div className="relative md:w-3/4 mx-auto px-4 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-2xl"
            >
              <p className="text-emerald-400 mb-4 text-lg">
                HELPING EACH OTHER
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Let's Make Move and Do Great Thing for Each
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Luctus feugiat eget tristique gravida cursus mollis.
                Pellentesque ornare amet, vel nulla id integer
              </p>
              <CustomButton className="bg-emerald-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-emerald-700 transition">
                DISCOVER MORE
              </CustomButton>
            </motion.div>
          </div>
          <div className="absolute w-3/4 mx-auto bottom-9 left-1/2 -translate-x-1/2 z-40 cursor-pointer">
            <InfoCount />
          </div>
        </section>

        <section className="w-3/4 mx-auto bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative flex items-start">
                  {/* First image (base image) */}
                  <img
                    src="/gamana/About1.svg"
                    alt="Community gathering"
                    className="rounded-lg shadow-lg  object-cover"
                  />

                  {/* Second image (overlayed, right aligned) */}

                  <img
                    src="/gamana/About2.svg"
                    alt="Group discussion"
                    className="rounded-lg shadow-lg w-64 object-cover absolute -bottom-8 -right-8 "
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-emerald-600 mb-3 font-semibold text-sm">
                  About Us
                </p>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                  Only by Helping Each Other
                  <br />
                  We Can Make World Better
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  GAMANA (meaning "The Village Wing") is a volunteer non-profit
                  organization rooted in the Amaravati region of Andhra Pradesh,
                  India. Founded in 2007, GAMANA is dedicated to promoting child
                  rights, gender equality and community empowerment through
                  participatory rights-based approaches. We believe that
                  sustainable social change begins with informed and empowered
                  communities, especially children and adolescents who are
                  encouraged to voice their rights and shape their future.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-600 p-1.5 rounded-full mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Dignissim sodales ut eu sem integer vitae justo
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-600 p-1.5 rounded-full mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Lectus vestibulum mattis ullamcorper
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-600 p-1.5 rounded-full mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Neque laoreet suspendisse interdum congue porttitor
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-600 p-1.5 rounded-full mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Faucibus a pellentesque sit amet porttitor
                    </span>
                  </li>
                </ul>
                <button className="bg-emerald-600 text-white px-8 py-3 rounded font-semibold hover:bg-emerald-800 transition">
                  About More
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="lg:w-3/4 w-full mx-auto bg-white">
          {/* Section Header */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                You Can Help Lots of People by
                <br />
                Donating Little
              </h2>

              <div className="w-16 h-1 bg-emerald-600 mx-auto mt-4"></div>
            </div>
          </motion.div>
          {/* Carousel Container */}

          <div className="relative">
            {/* Cards Container */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <CustomScroll
                slidesToShow={3}
                dots={true}
                arrows={true}
                nextArrow={true}
                prevArrow={true}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                    },
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                ]}
              >
                {causes.map((cause, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                      >
                        <div className="h-full overflow-hidden">
                          <img
                            src={cause.image}
                            alt={cause.title}
                            className="w-full h-[20vh] object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">
                            {cause.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                            {cause.description}
                          </p>
                          <button className="w-full bg-emerald-700 text-white py-3 rounded font-semibold hover:bg-emerald-800 transition-colors">
                            View More
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </CustomScroll>
            </motion.div>
          </div>
        </section>

        <section className="w-3/4 mx-auto bg-white">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-emerald-700 font-semibold mb-3">
                Programs & Activities
              </p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Lorem ipsum sed mauris erat .
              </h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                GAMANA (meaning "The Way") is a voluntary, non-profit
                organization rooted in the Amaravati region of Andhra Pradesh,
                India. Founded in 2007, GAMANA is dedicated to promoting child
                rights, gender equality..
              </p>
              <CustomButton className="bg-emerald-700 text-white px-8 py-3 rounded hover:bg-emerald-800 transition font-semibold">
                View More
              </CustomButton>
            </motion.div>
            <div>
              <img
                src="/gamana/Programs.svg"
                alt="GAMANA community gathering"
                className="rounded-lg shadow-lg mb-8"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    01
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Child Protection
                    </h3>
                    <p className="text-gray-600 text-sm">
                      At the core of GAMANA's mission is the prevention of early
                      and forced child marriages.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    02
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Adolescent Empowerment
                    </h3>
                    <p className="text-gray-600 text-sm">
                      At the core of GAMANA's mission is the prevention of early
                      and forced child marriages.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    03
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Monitoring & Evaluation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      At the core of GAMANA's mission is the prevention of early
                      and forced child marriages.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

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
