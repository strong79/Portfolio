import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopRight from "./ExperienceTopRight";

const ExperienceTop = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center mt-8">
      <ExperienceTopLeft />
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;
