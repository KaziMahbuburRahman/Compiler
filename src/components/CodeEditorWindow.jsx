import React, { useState, useEffect } from "react";

import Editor from "@monaco-editor/react";
import { toast } from "react-toastify";
import DownloadCode from "./DownloadCode";
import { on } from "events";
import Copy from "../assets/svg/Copy";


const CodeEditorWindow = ({ onChange, language, extension, code, theme, fontSize }) => {
  const [value, setValue] = useState(code || "");

  useEffect(() => {

    setValue(code || "");

  }, [language]);

  console.log(onChange)

  const handleEditorChange = (value) => {
    console.log("value changed", value)
    setValue(value);
    onChange("code", value);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value);
    toast.success("Code copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <div className="flex items-center justify-between px-4 py-2 bg-black border-b border-gray-600">
        <h1 className="text-xl font-bold text-white">Code Editor</h1>

        <div className="flex justify-center items-center gap-2">
          <DownloadCode
            code={code}
            lang_extension={extension}
          />

          <button
            className="hover:text-blue-500 transition duration-200 hover:scale-110 "
            onClick={handleCopyToClipboard}
          >
            <Copy />
          </button>
        </div>
      </div>
      <Editor
        className="h-[35vh] lg:h-[75vh]"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        options={{
          fontSize: fontSize,
          scrollbar: {
            alwaysConsumeMouseWheel: false,
          },
        }}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;
