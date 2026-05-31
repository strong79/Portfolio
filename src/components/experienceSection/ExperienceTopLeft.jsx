import ExperienceInfo from "./ExperienceInfo";
import { motion } from "framer-motion";
import { FaRocket, FaCode } from "react-icons/fa";

const CORE_TECHNOLOGIES = [
  "Python",
  "Ruby on Rails",
  "FastAPI",
  "Spring Boot",
  "Next.js",
  "Vue.js",
  "AWS",
  "Docker",
  "Kubernetes",
];

const ExperienceTopLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-8 lg:flex-1 lg:max-w-[520px] sm:w-full p-6 bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm rounded-2xl border border-green/20 hover:border-green/40 transition-all duration-500"
    >
      <div className="text-center relative">
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-green text-2xl"
          >
            <FaRocket />
          </motion.div>
          <h3 className="text-green font-bold uppercase text-2xl font-special tracking-wider">
            Since 2016
          </h3>
        </div>

        <div className="w-16 h-1 bg-gradient-to-r from-green to-cyan mx-auto rounded-full mb-6"></div>
      </div>

      <div className="bg-black/20 rounded-xl p-6 border border-green/10">
        <div className="flex justify-center items-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="text-center">
            <ExperienceInfo number="9+" text="Years" />
          </motion.div>

          <div className="text-gray-500 font-bold text-xl">|</div>

          <motion.div whileHover={{ scale: 1.05 }} className="text-center">
            <ExperienceInfo number="15+" text="Projects" />
          </motion.div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-center gap-2">
          <FaCode className="text-cyan" />
          <span className="text-sm text-gray-400 uppercase tracking-wider">
            Experience Overview
          </span>
        </div>

        <p className="text-gray-300 leading-relaxed text-sm text-center">
          With <span className="text-green font-semibold">9+ years</span> of
          experience in Web, SaaS, and AI system development, I have delivered
          enterprise-grade platforms ranging from educational web services and
          multi-tenant SaaS applications to AI-powered voice agent solutions.
        </p>

        <p className="text-gray-300 leading-relaxed text-sm text-center">
          Experienced across the full software development lifecycle, including
          architecture design, backend development, frontend implementation,
          cloud infrastructure, deployment, and system operations.
        </p>

        <div>
          <p className="text-sm text-gray-400 uppercase tracking-wider text-center mb-3">
            Core Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {CORE_TECHNOLOGIES.map((tech) => (
              <span
                key={tech}
                className="bg-green/10 text-green px-3 py-1 rounded-full text-xs border border-green/20 hover:border-green/40 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green to-transparent rounded-full opacity-50"></div>
      </div>
    </motion.div>
  );
};

export default ExperienceTopLeft;
