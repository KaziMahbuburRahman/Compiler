import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { toast } from "react-toastify";
import DownloadCode from "./DownloadCode";
import Copy from "../assets/svg/Copy";

const isMobile = window.innerWidth < 768;

const CodeEditorWindow = ({ onChange, language, extension, code, theme, fontSize }) => {
  const [value, setValue] = useState(code || "");

  useEffect(() => {
    setValue(code || "");
  }, [language]);

  const handleEditorChange = (newValue) => {
    setValue(newValue);
    onChange("code", newValue);
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
          <DownloadCode code={code} lang_extension={extension} />

          <button
            className="text-white active:text-blue-500 transition duration-200 active:scale-90"
            onClick={handleCopyToClipboard}
          >
            <Copy />
          </button>
        </div>
      </div>
      <AceEditor
        className="h-[35vh] lg:h-[75vh]"
        mode={language || "javascript"}
        theme={theme || "monokai"}
        width="100%"
        fontSize={fontSize}
        value={value}
        editorProps={{ $blockScrolling: Infinity }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;
