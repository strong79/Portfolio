import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import experienceEn from "../../../json/experience.en.json";
import experienceJa from "../../../json/experience.ja.json";
import { useTranslation } from "../../i18n/useTranslation";

const AllExperiences = () => {
  const { t, lang } = useTranslation();
  const experiences = lang === "ja" ? experienceJa : experienceEn;

  return (
    <div className="mt-16">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-bold text-white mb-4">{t.experience.journeyTitle}</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-green to-cyan mx-auto rounded-full"></div> 
      </motion.div>

      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green via-cyan to-green rounded-full opacity-30" style={{ height: 'calc(100% - 40px)', top: '20px' }}></div>
        
        <div className="space-y-8 lg:space-y-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn(index % 2 === 0 ? "left" : "right", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="relative"
            >
              <div className="hidden lg:block absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 bg-green rounded-full border-4 border-gray-900 z-20 shadow-lg shadow-green/30">
                <div className="absolute inset-0 bg-green rounded-full animate-ping opacity-30"></div>
              </div>
              
              <div className={`lg:flex lg:items-start ${
                index % 2 === 0 
                  ? 'lg:flex-row lg:justify-start' 
                  : 'lg:flex-row-reverse lg:justify-start'
              }`}>
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <SingleExperience experience={experience} index={index} />
                </div>
                
                <div className="hidden lg:block lg:w-2/12"></div>
                
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-black/30 backdrop-blur-sm rounded-2xl border border-green/20"
      >
        <h3 className="text-xl font-bold text-white mb-4">{t.experience.cta.title}</h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {t.experience.cta.description}
        </p>
      </motion.div>
    </div>
  );
};

export default AllExperiences;
