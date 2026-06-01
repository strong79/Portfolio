import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaJava, FaDatabase, FaBolt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiPython,
  SiRuby,
  SiPhp,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiRedis,
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "../../i18n/useTranslation";

const skillData = [
  { skill: "Python", icon: SiPython, level: "expert", progress: 95 },
  { skill: "Ruby", icon: SiRuby, level: "expert", progress: 92 },
  { skill: "Java", icon: FaJava, level: "expert", progress: 90 },
  { skill: "PHP", icon: SiPhp, level: "advanced", progress: 85 },
  { skill: "TypeScript", icon: SiTypescript, level: "advanced", progress: 88 },
  { skill: "JavaScript", icon: IoLogoJavascript, level: "expert", progress: 95 },
  { skill: "SQL", icon: FaDatabase, level: "advanced", progress: 90 },
  { skill: "HTML5", icon: FaHtml5, level: "expert", progress: 99 },
  { skill: "CSS3", icon: FaCss3Alt, level: "expert", progress: 95 },
  { skill: "Next.js", icon: SiNextdotjs, level: "advanced", progress: 88 },
  { skill: "Vue.js", icon: SiVuedotjs, level: "advanced", progress: 85 },
  { skill: "Hotwire (Turbo / Stimulus)", icon: FaBolt, level: "advanced", progress: 82 },
  { skill: "Tailwind CSS", icon: SiTailwindcss, level: "expert", progress: 92 },
  { skill: "PostgreSQL", icon: SiPostgresql, level: "advanced", progress: 88 },
  { skill: "MySQL", icon: SiMysql, level: "advanced", progress: 85 },
  { skill: "Redis", icon: SiRedis, level: "advanced", progress: 80 },
];

const AllSkills = () => {
  const { t } = useTranslation();

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 my-12 px-4 max-w-6xl mx-auto">
      {skillData.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
          >
            <SingleSkill
              text={item.skill}
              imgSvg={<item.icon />}
              proficiency={t.skills.proficiency[item.level]}
              progress={item.progress}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkills;
