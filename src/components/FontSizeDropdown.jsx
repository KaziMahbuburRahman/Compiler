import React from "react";
import Select from "react-select";
import { customStyles } from "../constants/customStyles";

const FontSizeDropdown = ({ handleFontSizeChange, fontSize }) => {
  const fontSizeOptions = [
    { label: "11px", value: 11 },
    { label: "12px", value: 12 },
    { label: "13px", value: 13 },
    { label: "14px", value: 14 },
    { label: "15px", value: 15 },
    { label: "16px", value: 16 },
    { label: "17px", value: 17 },
    { label: "18px", value: 18 },
    { label: "19px", value: 19 },
    { label: "20px", value: 20 },
    { label: "21px", value: 21 },
    { label: "22px", value: 22 },
    { label: "23px", value: 23 },
    { label: "24px", value: 24 },
    { label: "25px", value: 25 },
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
