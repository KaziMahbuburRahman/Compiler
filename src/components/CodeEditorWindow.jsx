import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme, fontSize }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        className="h-[35vh] lg:h-[75vh]"
        // height="75vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        options={{
          fontSize: fontSize, // Set your desired font size here
          scrollbar: {
            alwaysConsumeMouseWheel: false
           }
        }}
        defaultValue="// some comment"
        onChange={handleEditorChange}
   
      />
    </div>
  );
};
export default CodeEditorWindow;
