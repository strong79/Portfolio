import { motion } from "framer-motion";
import { FaHandshake } from "react-icons/fa";

const services = [
  "🚀 AI Agent Development",
  "⚡ Full Stack Development",
  "☁️ Cloud & AWS Architecture",
  "🔗 API & System Integration",
  "💡 SaaS Platform Development",
  "📊 Data Analytics Solutions",
];

const ContactText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      {/* Header with animated icon */}
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-green text-3xl"
        >
          <FaHandshake />
        </motion.div>
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green via-cyan to-green bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 text-sm mt-1 font-mono">&lt;ready-to-collaborate/&gt;</p>
        </div>
      </div>

      {/* Animated decorative line */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ duration: 1, delay: 0.3 }}
        className="h-1 bg-gradient-to-r from-green to-cyan rounded-full mb-8"
      />

      {/* Main content */}
      <div className="space-y-6">
        {/* Primary message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Ready to build innovative{" "}
            <span className="text-green font-semibold">web applications</span>,{" "}
            <span className="text-cyan font-semibold">SaaS platforms</span>, and{" "}
            <span className="text-green font-semibold">AI-powered solutions</span>?
            I&apos;d be glad to discuss your project and explore how my experience can
            contribute to your team&apos;s success.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-black/30 to-gray-900/30 rounded-xl p-6 border border-green/20 backdrop-blur-sm"
        >
          <span className="text-gray-300 font-semibold block mb-4">What I Can Help With</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/20 transition-all duration-300"
              >
                <span className="text-gray-300 text-sm">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick response */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-green/5 border border-green/20 rounded-lg p-4"
        >
          <p className="text-gray-300 text-sm leading-relaxed">
            <span className="text-green font-semibold block mb-1">Quick Response</span>
            <span className="text-green font-semibold">✨ Quick response guaranteed!</span>
            <br />
            I typically reply within 24 hours. Feel free to reach out regarding AI, SaaS,
            Web, or Cloud development opportunities.
          </p>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute -top-4 -right-4 text-green/10 font-mono text-xs pointer-events-none">
        &lt;/contact&gt;
      </div>
    </motion.div>
  );
};

export default ContactText;
