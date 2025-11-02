import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import MainLayout from "../pages/MainLayout";
import PageHeader from "../sections/PageHeader";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async() => {
    try{
      await fetch('https://script.google.com/macros/s/AKfycbwuxRx12oRoRLIDjjs9ls2fo3nDNjvmlBx4beC_mLemOXXiKcup1It5cVRjBS5tt_d1_Q/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
    })
    alert('Form submitted successfully!');
     
  }catch(error){
      console.error('Error submitting form:', error);
    }
    setFormData({
      name: '',
      email: '',
      number: '',
      message: ''
    });

  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <MainLayout>

    <div className="bg-white">
        {/* Hero Section with Image */}    
       <PageHeader
          title="Contact Us"
          bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
          breadcrumb={[{ name: "Home", path: "/" }, { name: "Contact Us" }]}
        />
      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <motion.div
              {...fadeInLeft}
              className="space-y-8"
            >
              <div>
                <p className="text-green-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                  Contact Us
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Nibh sit amet commodo nulla facilisi.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contacts Info
                </h3>
                
                <div className="space-y-5">
                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <FaPhone className="text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <a href="tel:+919849078450" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                        +91 98490 78450
                      </a>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <FaEnvelope className="text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <a href="mailto:gamanatheway@gmail.com" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                        gamanatheway@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <FaMapMarkerAlt className="text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-gray-700">
                      <p className="font-medium mb-1">GAMANA (The Way)</p>
                      <p className="text-sm leading-relaxed">
                        2-78, Ananthavaram Village,<br />
                        Thullur Mandal,<br />
                        Guntur District, Andhra Pradesh<br />
                        - 522 238, India
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              {...fadeInRight}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fill the Form Below
              </h3>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="gap-6">
                 
                   {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>                 
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-600 text-white font-semibold py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        {...fadeInUp}
        className="h-[400px] md:h-[500px] bg-gray-100"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.5934746555395!2d80.56789131487398!3d16.45077938863513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a7d81943%3A0x8ba5d78f376e0e88!2sAnanthavaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1635789456789!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="GAMANA Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </motion.section>

      {/* Info Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaPhone />,
                title: "Call Us Anytime",
                content: "+91 98490 78450",
                delay: 0.1
              },
              {
                icon: <FaEnvelope />,
                title: "Send Us Email",
                content: "gamanatheway@gmail.com",
                delay: 0.2
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Visit Our Office",
                content: "Ananthavaram Village, Thullur Mandal, Guntur",
                delay: 0.3
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <div className="text-green-600 text-2xl group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">
                  {card.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
     </MainLayout>
  );
};

export default ContactPage;