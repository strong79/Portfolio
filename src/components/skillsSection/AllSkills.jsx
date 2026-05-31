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

const skills = [
  {
    skill: "Python",
    icon: SiPython,
    proficiency: "Expert",
    progress: 95,
  },
  {
    skill: "Ruby",
    icon: SiRuby,
    proficiency: "Expert",
    progress: 92,
  },
  {
    skill: "Java",
    icon: FaJava,
    proficiency: "Expert",
    progress: 90,
  },
  {
    skill: "PHP",
    icon: SiPhp,
    proficiency: "Advanced",
    progress: 85,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
    proficiency: "Advanced",
    progress: 88,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    proficiency: "Expert",
    progress: 95,
  },
  {
    skill: "SQL",
    icon: FaDatabase,
    proficiency: "Advanced",
    progress: 90,
  },
  {
    skill: "HTML5",
    icon: FaHtml5,
    proficiency: "Expert",
    progress: 99,
  },
  {
    skill: "CSS3",
    icon: FaCss3Alt,
    proficiency: "Expert",
    progress: 95,
  },
  {
    skill: "Next.js",
    icon: SiNextdotjs,
    proficiency: "Advanced",
    progress: 88,
  },
  {
    skill: "Vue.js",
    icon: SiVuedotjs,
    proficiency: "Advanced",
    progress: 85,
  },
  {
    skill: "Hotwire (Turbo / Stimulus)",
    icon: FaBolt,
    proficiency: "Advanced",
    progress: 82,
  },
  {
    skill: "Tailwind CSS",
    icon: SiTailwindcss,
    proficiency: "Expert",
    progress: 92,
  },
  {
    skill: "PostgreSQL",
    icon: SiPostgresql,
    proficiency: "Advanced",
    progress: 88,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
    proficiency: "Advanced",
    progress: 85,
  },
  {
    skill: "Redis",
    icon: SiRedis,
    proficiency: "Advanced",
    progress: 80,
  },
];

const AllSkills = () => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 my-12 px-4 max-w-6xl mx-auto">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
          >
            <SingleSkill
              key={index}
              text={item.skill}
              imgSvg={<item.icon />}
              proficiency={item.proficiency}
              progress={item.progress}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkills;
