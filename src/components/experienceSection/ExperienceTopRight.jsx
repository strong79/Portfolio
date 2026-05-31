import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const FOCUS_AREAS = [
  "AI Agents & LLM Applications",
  "Multi-Tenant SaaS Systems",
  "Microservices Architecture",
  "Cloud & DevOps Engineering",
];

const KEY_ACHIEVEMENTS = [
  "Built Enterprise AI Voice Agent Platform using OpenAI API and RAG",
  "Developed Multi-Tenant SaaS Analytics Platform with Ruby on Rails",
  "Designed Microservices Architecture on AWS EKS & Kubernetes",
  "Improved Database Performance through SQL Optimization",
  "Delivered End-to-End Full Stack Solutions from Design to Production",
];

const ExperienceTopRight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="lg:flex-1 lg:max-w-[520px] sm:w-full bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm border border-green/20 p-6 rounded-2xl hover:border-green/40 transition-all duration-500 hover:shadow-xl hover:shadow-green/10"
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Technical Expertise</h3>
        <p className="text-sm text-cyan font-mono mb-3">
          AI Engineering • Full Stack Development • Cloud Architecture
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-green to-cyan mx-auto rounded-full"></div>
      </div>

      <p className="text-gray-300 leading-relaxed text-center text-sm mb-6">
        Specialized in designing and developing enterprise-grade applications
        using{" "}
        <span className="text-green font-semibold">
          Python, Ruby on Rails, FastAPI, Next.js, AWS, Docker, and Kubernetes
        </span>
        . Experienced in Generative AI, RAG systems, AI Voice Agents, and
        scalable SaaS platform development.
      </p>

      <div className="bg-black/20 rounded-lg p-4 border border-green/10 mb-6">
        <p className="text-sm text-gray-400 mb-3 text-center uppercase tracking-wider">
          Focus Areas
        </p>
        <ul className="space-y-2">
          {FOCUS_AREAS.map((area) => (
            <li
              key={area}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <FaCheckCircle className="text-green mt-0.5 shrink-0" />
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-sm text-gray-400 mb-3 text-center uppercase tracking-wider">
          Key Achievements
        </p>
        <ul className="space-y-2">
          {KEY_ACHIEVEMENTS.map((achievement, index) => (
            <motion.li
              key={achievement}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <span className="text-cyan font-mono shrink-0">›</span>
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent rounded-full opacity-50"></div>
      </div>
    </motion.div>
  );
};

export default ExperienceTopRight;
