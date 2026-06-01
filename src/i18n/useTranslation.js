import { useSelector } from "react-redux";
import en from "./translations/en";
import ja from "./translations/ja";

const translations = { en, ja };

export const useTranslation = () => {
  const lang = useSelector((state) => state.language.current);
  const t = translations[lang] ?? translations.en;
  return { t, lang };
};
