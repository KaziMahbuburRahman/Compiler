import React from "react";
import Select from "react-select";
import { customStyles } from "../constants/customStyles";

const FontSizeDropdown = ({ handleFontSizeChange, fontSize }) => {
  const fontSizeOptions = [
    { label: "Small", value: 12 },
    { label: "Medium", value: 14 },
    { label: "Large", value: 30 },
    // Add more options as needed
  ];

  return (
    <Select
      placeholder={`Select Font Size`}
      options={fontSizeOptions}
      value={fontSize}
      styles={customStyles}
      onChange={handleFontSizeChange}
    />
  );
};

export default FontSizeDropdown;
