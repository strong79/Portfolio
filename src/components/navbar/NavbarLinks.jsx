import { useDispatch } from "react-redux";
import { closeMenu } from "../../state/menuSlice";
import { useTranslation } from "../../i18n/useTranslation";

const NavbarLinks = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const links = [
    { link: t.navbar.home, section: "hero" },
    { link: t.navbar.about, section: "about" },
    { link: t.navbar.skills, section: "skills" },
    { link: t.navbar.experience, section: "experience" },
    { link: t.navbar.projects, section: "projects" },
    { link: t.navbar.contact, section: "contact" },
  ];

  const handleLinkClick = (section, e) => {
    e.preventDefault();
    
    const element = document.getElementById(section);
    
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    dispatch(closeMenu());
  };

  return (
    <div className="relative overflow-hidden">
      <ul className="flex lg:flex-row flex-col lg:gap-8 gap-3 text-white font-body lg:items-center">
        {links.map((link, index) => {
          return (
            <li key={index} className="group relative overflow-hidden">
              <button
                onClick={(e) => handleLinkClick(link.section, e)}
                className="cursor-pointer text-white/80 hover:text-green transition-all duration-300 font-medium tracking-wide uppercase text-sm lg:hover:scale-105 relative z-10 bg-transparent border-none outline-none py-3 lg:py-2 px-0 w-full lg:w-auto text-left lg:text-center block"
                style={{ pointerEvents: 'auto' }}
              >
                {link.link}
              </button>
              
              <div className="absolute bottom-1 lg:bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-green to-cyan group-hover:w-full transition-all duration-300 ease-out"></div>
              
              <div className="absolute inset-0 rounded-md bg-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform-gpu"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarLinks;
