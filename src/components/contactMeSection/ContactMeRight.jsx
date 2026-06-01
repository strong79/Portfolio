import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import ContactInfo from "./ContactInfo";

const ContactMeRight = () => {
  const connectTopics = [
    "Full Stack Engineering",
    "AI Agent Development",
    "Generative AI Solutions",
    "SaaS Product Development",
    "Cloud Infrastructure Engineering",
  ];

  const socialLinks = [
    {
      icon: FaEnvelope,
      href: "mailto:shiriekoichi99@gmail.com",
      label: "Email",
      color: "hover:text-green",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center gap-8 relative z-10"
    >
      {/* Email illustration with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-cyan/20 rounded-full blur-xl"></div>
        <motion.img
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src="/images/email-image.png"
          alt="email illustration"
          className="max-w-[280px] relative z-10 drop-shadow-lg"
        />
        
        {/* Floating particles around image */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -right-4 w-8 h-8 border-2 border-green/30 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-cyan/30 rounded-full"
        ></motion.div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full"
      >
        <ContactInfo />
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full"
      >
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Connect With Me</h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-green to-cyan mx-auto rounded-full"></div>
          <p className="text-gray-400 text-sm mt-3 mb-4">
            You can also connect with me regarding:
          </p>
        </div>

        <ul className="space-y-2 mb-6 text-center">
          {connectTopics.map((topic) => (
            <li key={topic} className="text-gray-300 text-sm">
              {topic}
            </li>
          ))}
        </ul>
        
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:border-green/50 hover:shadow-lg hover:shadow-green/20 group`}
              title={social.label}
            >
              <social.icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green/10 to-cyan/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Status */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-green/10 to-cyan/10 backdrop-blur-sm border border-green/20 rounded-xl p-4 text-center"
      >
        <p className="text-gray-400 text-xs mb-2 font-semibold uppercase tracking-wide">Status</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg" aria-hidden="true">🟢</span>
          <span className="text-green font-semibold text-sm">Available for New Opportunities</span>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 text-cyan/20 font-mono text-xs pointer-events-none">
        &lt;connect/&gt;
      </div>
    </motion.div>
  );
};

export default ContactMeRight;
