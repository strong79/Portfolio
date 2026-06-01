import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../state/languageSlice";

const LanguageToggle = () => {
  const lang = useSelector((state) => state.language.current);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleLanguage())}
      className="flex items-center gap-1 px-3 py-2 rounded-lg border border-green/30 bg-black/20 text-sm font-mono text-white/80 hover:text-green hover:border-green/50 transition-all duration-300"
      aria-label={lang === "en" ? "Switch to Japanese" : "Switch to English"}
    >
      <span className={lang === "en" ? "text-green font-semibold" : "text-white/50"}>
        EN
      </span>
      <span className="text-white/30">|</span>
      <span className={lang === "ja" ? "text-green font-semibold" : "text-white/50"}>
        JA
      </span>
    </button>
  );
};

export default LanguageToggle;
