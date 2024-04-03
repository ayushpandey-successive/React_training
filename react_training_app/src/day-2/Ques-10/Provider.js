import React, { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const toggleFunction = (lang) => {
    setLanguage(lang);
  };
  return (
    <LanguageContext.Provider value={{ language, toggleFunction }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
