import React, { useState, useEffect } from "react";

import Editor from "@monaco-editor/react";
import { toast } from "react-toastify";
import DownloadCode from "./DownloadCode";

const CodeEditorWindow = ({ onChange, language, extension, code, theme, fontSize }) => {
  console.log("CodeEditorWindow...", code);
  const [value, setValue] = useState(code || "");
  const [editorKey, setEditorKey] = useState(0);

  useEffect(() => {
    // Update the key whenever the code prop changes
    setEditorKey((prevKey) => prevKey + 1);
    // Update the local state with the code prop
    setValue(code || "");
  }, [code, language]);

  const handleEditorChange = (value) => {
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
        <DownloadCode
                                code={code}
                                lang_extension={extension}
                            />
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:shadow-lg transition duration-200"
          onClick={handleCopyToClipboard}
        >
          Copy
        </button>
      </div>
      <Editor
        key={editorKey} // Update the key to force remount when code prop changes
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
