import { Link } from "react-scroll";
import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import TypewriterEffect from "../ui/TypewriterEffect";
import name from "../../../json/name.json";
import { useTranslation } from "../../i18n/useTranslation";
import { SectionHeading } from "../ui/SectionHeading";

const AboutMeText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center space-y-6 relative">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-green font-mono text-sm">02.</span>
        <div className="w-16 h-[1px] bg-gradient-to-r from-green to-transparent"></div>
      </div>

      <SectionHeading
        motionProps={{
          variants: fadeIn("right", 0.1),
          initial: "hidden",
          whileInView: "show",
          viewport: { once: false, amount: 0.3 },
        }}
      >
        {t.about.title}
      </SectionHeading>

      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-center gap-2 mb-6"
      >
        <span className="text-green font-mono text-sm">$</span>
        <TypewriterEffect 
          texts={t.about.highlights}
          speed={40}
          deleteSpeed={20}
          delayBetween={1000}
          cursorColor="green"
          className="text-green/80 font-mono"
        />
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="space-y-4 text-white/80 leading-relaxed"
      >
        <p className="text-lg">
          {t.about.p1.suffix ? (
            <>
              {t.about.p1.beforeName}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-cyan font-semibold">
                {name.lastname} {name.firstname}
              </span>
              、
              <span className="text-green font-semibold px-2 py-1 bg-green/10 rounded border border-green/20">
                {t.about.p1.role1}
              </span>
              {t.about.p1.and}
              <span className="text-green font-semibold px-2 py-1 bg-green/10 rounded border border-green/20">
                {t.about.p1.role2}
              </span>
              {t.about.p1.with}{" "}
              <span className="text-cyan font-semibold">{t.about.p1.years}</span>
              {t.about.p1.of}{" "}
              <span className="text-cyan font-semibold">{t.about.p1.webApps}</span>、
              <span className="text-yellow font-semibold">{t.about.p1.saas}</span>、
              <span className="text-orange font-semibold">{t.about.p1.aiSystems}</span>
              {t.about.p1.suffix}
            </>
          ) : (
            <>
              {t.about.p1.beforeName}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-cyan font-semibold">
                {name.lastname} {name.firstname}
              </span>
              , a{" "}
              <span className="text-green font-semibold px-2 py-1 bg-green/10 rounded border border-green/20">
                {t.about.p1.role1}
              </span>{" "}
              {t.about.p1.and}{" "}
              <span className="text-green font-semibold px-2 py-1 bg-green/10 rounded border border-green/20">
                {t.about.p1.role2}
              </span>{" "}
              {t.about.p1.with}{" "}
              <span className="text-cyan font-semibold">{t.about.p1.years}</span> {t.about.p1.of} building{" "}
              <span className="text-cyan font-semibold">{t.about.p1.webApps}</span>,{" "}
              <span className="text-yellow font-semibold">{t.about.p1.saas}</span>, {t.about.p2.and}{" "}
              <span className="text-orange font-semibold">{t.about.p1.aiSystems}</span>.
            </>
          )}
        </p>

        <p className="text-lg">
          {t.about.p2.intro}{" "}
          <span className="text-cyan font-semibold">{t.about.p2.frontend}</span>,{" "}
          <span className="text-cyan font-semibold">{t.about.p2.backend}</span>, {t.about.p2.and}{" "}
          <span className="text-cyan font-semibold">{t.about.p2.cloud}</span>{" "}
          {t.about.p2.middle}{" "}
          <span className="text-yellow font-semibold px-2 py-1 bg-yellow/10 rounded border border-yellow/20">
            {t.about.p2.multiTenant}
          </span>
          ,{" "}
          <span className="text-green font-semibold">{t.about.p2.voiceAi}</span>,{" "}
          <span className="text-cyan font-semibold">{t.about.p2.edu}</span>, {t.about.p2.and}{" "}
          <span className="text-orange font-semibold">{t.about.p2.cloudNative}</span>
          {t.about.p2.suffix}
        </p>

        <p className="text-lg">
          {t.about.p3.intro}{" "}
          <span className="text-green font-mono text-sm">Python (FastAPI)</span>,{" "}
          <span className="text-cyan font-mono text-sm">Ruby on Rails</span>,{" "}
          <span className="text-green font-mono text-sm">Java (Spring Boot)</span>,{" "}
          <span className="text-cyan font-mono text-sm">Next.js</span>,{" "}
          <span className="text-green font-mono text-sm">Vue.js</span>,{" "}
          <span className="text-cyan font-mono text-sm">AWS</span>,{" "}
          <span className="text-green font-mono text-sm">Docker</span>, {t.about.p2.and}{" "}
          <span className="text-cyan font-mono text-sm">Kubernetes</span>. {t.about.p3.recent}{" "}
          <span className="text-yellow font-semibold px-2 py-1 bg-yellow/10 rounded border border-yellow/20">
            {t.about.p3.genAi}
          </span>
          {t.about.p3.developing}{" "}
          <span className="text-green font-semibold">{t.about.p3.aiAgents}</span>,{" "}
          <span className="text-cyan font-semibold">{t.about.p3.conversational}</span>, {t.about.p2.and}{" "}
          <span className="text-orange font-semibold">{t.about.p3.rag}</span>{" "}
          {t.about.p3.ragFull}{" "}
          <span className="text-green font-mono text-sm">OpenAI APIs</span> {t.about.p3.and}
        </p>

        <p className="text-lg">
          {t.about.p4.intro}{" "}
          <span className="text-cyan font-semibold">{t.about.p4.scalable}</span>{t.about.p4.middle}{" "}
          <span className="text-green font-semibold">{t.about.p4.intelligent}</span>,{" "}
          <span className="text-yellow font-semibold">{t.about.p4.robust}</span>, {t.about.p2.and}{" "}
          <span className="text-orange font-semibold">{t.about.p4.seamless}</span>,{" "}
          {t.about.p4.end}
        </p>

        <p className="text-lg">
          {t.about.p5.intro}{" "}
          <span className="text-cyan font-semibold">{t.about.p5.collaborate}</span>{" "}
          {t.about.p5.with}{" "}
          <span className="text-green font-semibold">{t.about.p5.innovative}</span>{" "}
          {t.about.p5.andCreate}{" "}
          <span className="text-yellow font-semibold">{t.about.p5.impactful}</span>
          {t.about.p5.suffix}
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-wrap gap-4 mt-8"
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-green/10 border border-green/20 rounded-lg hover:bg-green/20 transition-colors duration-300">
          <FaCode className="text-green text-sm" />
          <span className="text-green font-mono text-sm">{t.about.badges.cleanCode}</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-cyan/10 border border-cyan/20 rounded-lg hover:bg-cyan/20 transition-colors duration-300">
          <FaRocket className="text-cyan text-sm" />
          <span className="text-cyan font-mono text-sm">{t.about.badges.performance}</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-yellow/10 border border-yellow/20 rounded-lg hover:bg-yellow/20 transition-colors duration-300">
          <FaLightbulb className="text-yellow text-sm" />
          <span className="text-yellow font-mono text-sm">{t.about.badges.innovation}</span>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="mt-10"
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="group relative inline-flex items-center gap-3 px-6 py-3 border-2 border-green/50 rounded-xl font-mono text-sm uppercase tracking-wider text-green hover:bg-green/10 hover:border-green hover:shadow-neon transition-all duration-300 hover:scale-105 md:self-start sm:self-center cursor-pointer"
        >
          <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
          <span>{t.about.cta}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-cyan/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </Link>
      </motion.div>

      <div className="absolute -bottom-4 -left-4 text-green/20 font-mono text-xs opacity-50">
        &lt;/about&gt;
      </div>
    </div>
  );
};

export default AboutMeText;
