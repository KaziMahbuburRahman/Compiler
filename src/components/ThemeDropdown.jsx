import React from "react";
import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist";
import { customStyles } from "../constants/customStyles";

const aceThemes = {
  "monokai": "monokai",
  "github": "github", 
  "tomorrow": "tomorrow",
  "kuroir": "kuroir",
  "twilight": "twilight",
  "xcode": "xcode",
  "textmate": "textmate",
  "solarized_dark": "solarized_dark",
  "solarized_light": "solarized_light",
  "terminal": "terminal"
};

const  ThemeDropdown = ({ handleThemeChange, theme }) => {
  return (
    // console.log("monacoThemes", monacoThemes),
    <Select
      placeholder={`Select Theme`}
      // options={languageOptions}
      options={Object.entries(aceThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        key: themeId,
      }))}
      value={theme}
      styles={customStyles}
      onChange={handleThemeChange}
    />
  );
};

export default ThemeDropdown;
