import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsMain = () => {
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
        <motion.div
          variants={fadeIn("right", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="企業向けマルチテナントSaaS分析プラットフォーム開発"
            year="2025年2月 ～ 2026年4月"
            align="right"
            image="/images/website-img-1.jpg"
            link="https://bullettrain.co/"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="Enterprise AI Voice Agent Platform"
            year="Apr 2022 – Nov 2024"
            align="left"
            image="/images/website-img-2.jpg"
            link="https://airudder.com/products/voice-ai/"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="Artemis Weddings Event Management Platform"
            year="Apr 2018 – Feb 2022"
            align="right"
            image="/images/website-img-3.jpg"
            link="https://www.artemisweddings.com.sg/"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleProject
            name="My Drum School Web Platform"
            year="Oct 2016 – Mar 2018"
            align="left"
            image="/images/website-img-4.jpg"
            link="https://mydrumschool.com/"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsMain;