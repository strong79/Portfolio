import TypewriterEffect from "../ui/TypewriterEffect";
import { useTranslation } from "../../i18n/useTranslation";
import { SectionHeading } from "../ui/SectionHeading";

const ProjectsText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mt-[100px] relative">
      <div className="absolute -top-10 left-10 text-green/20 font-mono text-xs">
        &lt;projects&gt;
      </div>
      <div className="absolute -top-10 right-10 text-cyan/20 font-mono text-xs">
        portfolio.showcase()
      </div>

      <div className="flex items-center gap-4 mb-6">
        <span className="text-green font-mono text-sm">03.</span>
        <div className="w-16 h-[1px] bg-gradient-to-r from-green to-transparent"></div>
      </div>

      <SectionHeading>{t.projects.title}</SectionHeading>

      <div className="max-w-3xl text-center space-y-6">
        <p className="text-lg text-white/80 leading-relaxed">
          {t.projects.intro.before}{" "}
          <span className="text-cyan font-semibold">{t.projects.intro.webAi}</span>,{" "}
          {t.projects.intro.ranging}{" "}
          <span className="text-green font-semibold">{t.projects.intro.fullStack}</span>,{" "}
          <span className="text-yellow font-semibold">{t.projects.intro.saas}</span>, {t.about.p2.and}{" "}
          <span className="text-cyan font-semibold">{t.projects.intro.aiSystems}</span>.
        </p>

        <div className="flex items-center justify-center gap-2 text-green/80 font-mono text-sm">
          <span className="text-green">$</span>
          <TypewriterEffect 
            texts={t.projects.typewriter}
            speed={60}
            deleteSpeed={30}
            delayBetween={2500}
            cursorColor="green"
            className="text-green/80"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {['React', 'Node.js', 'Next.js', 'MongoDB', 'TypeScript', 'AI'].map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-green/10 border border-green/20 rounded-lg text-green font-mono uppercase tracking-wider hover:bg-green/20 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent"></div>
    </div>
  );
};

export default ProjectsText;
