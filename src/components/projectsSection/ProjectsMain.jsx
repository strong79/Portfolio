import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "../../i18n/useTranslation";

const projectLinks = [
  "https://bullettrain.co/",
  "https://airudder.com/products/voice-ai/",
  "https://www.artemisweddings.com.sg/",
  "https://mydrumschool.com/",
];

const projectImages = [
  "/images/website-img-1.jpg",
  "/images/website-img-2.jpg",
  "/images/website-img-3.jpg",
  "/images/website-img-4.jpg",
];

const projectAlign = ["right", "left", "right", "left"];

const ProjectsMain = () => {
  const { t } = useTranslation();

  return (
    <div
      id="projects"
      className="w-full max-w-screen-xl mx-auto px-2 sm:px-4 py-10 sm:py-20"
    >
      <motion.div
        variants={fadeIn("top", 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 sm:gap-32 w-full max-w-6xl mx-auto mt-16">
        {t.projects.items.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn(projectAlign[index] === "right" ? "right" : "left", 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <SingleProject
              name={project.name}
              year={project.year}
              align={projectAlign[index]}
              image={projectImages[index]}
              link={projectLinks[index]}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
