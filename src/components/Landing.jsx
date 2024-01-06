import React, { useEffect, useState } from "react";

import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { classnames } from "../utils/general";
import { languageOptions } from "../constants/languageOptions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { defineTheme } from "../lib/defineTheme";
import useKeyPress from "../hooks/useKeyPress";
import Footer from "./Footer";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import { NavbarComponent } from "./NavbarComponent";
import FontSizeDropdown from "./FontSizeDropdown";
import ThemeChanger from "../shared/ThemeChanger/ThemeChanger";



const Landing = () => {

  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("monokai");
  const [themeValue, setThemeValue] = useState("monokai");
  const [language, setLanguage] = useState(languageOptions[0]);
  const [code, setCode] = useState(language.boilerplate);
  const [title, setTitle] = useState("");
  const [fontSize, setFontSize] = useState(14);
  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  function formatTimestamp(inputTimestamp) {
    // Parse input timestamp
    const timestamp = new Date(inputTimestamp);

    // Format output timestamp
    const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const outputTimestamp = timestamp.toLocaleString('en-US', options);

    return outputTimestamp;
  }

  const handleSaveCode = (e) => {
    e.stopPropagation()
    const savedCodes = JSON.parse(localStorage.getItem("savedCodes")) || [];

    const newCode = {
      code,
      language: language.value,
      title: title,
      timestamp: formatTimestamp(Date.now()),
      outputDetails: outputDetails, // add outputDetails property
    };

    savedCodes.push(newCode);
    localStorage.setItem("savedCodes", JSON.stringify(savedCodes));
    //clear the input field
    setTitle("");
    showSuccessToast("Code saved successfully!");
  };

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
    setCode(sl.boilerplate)
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      // console.log("enterPress", enterPress);
      // console.log("ctrlPress", ctrlPress);
      handleCompile();
    }

    // console.log("code...", code);
  }, [ctrlPress, enterPress]);

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: import.meta.env.VITE_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        console.log(err);
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);

          showErrorToast(
            `Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
            10000
          );
        }
        setProcessing(false);
        console.log("catch block...", error);
      });
  };

  const checkStatus = async (token) => {

    const options = {
      method: "GET",
      url: import.meta.env.VITE_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast();
    }
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (theme.value) {
      // setTheme(theme);
      //setTheme in ace editor
      setTheme(theme.value);
      setThemeValue(theme.value);
      console.log("Theme set done...", theme.value);
    } else {
      console.log("theme.value", theme.value);
      // defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  // useEffect(() => {
  //   defineTheme("oceanic-next").then((_) =>
  //     setTheme({ value: "oceanic-next", label: "Oceanic Next" })
  //   );
  // }, []);

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleFontSizeChange = (selectedFontSize) => {
    // Implement your font size change logic
    setFontSize(parseInt(selectedFontSize.value))
  };


  return (
    <div>

      <div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
        <div className="flex flex-col justify-self-start items-center lg:flex-row sm:flex-row">
          <div className="px-4 py-2 z-50">
            <LanguagesDropdown onSelectChange={onSelectChange} />
          </div>
          <div className="px-4 py-2">
            <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
          </div>
          <div className="px-4 py-2">
            <FontSizeDropdown handleFontSizeChange={handleFontSizeChange} fontSize={fontSize} />
          </div>

        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 items-start px-4 py-4">
          <div className="flex flex-col w-full h-full justify-start items-end">
            <CodeEditorWindow
              code={code}
              onChange={onChange}
              language={language?.value}
              extension={language?.extension}
              theme={theme}
              fontSize={fontSize}
              setLanguage={setLanguage}
              themeValue={themeValue}
            />
          </div>

          <div className="right-container flex sm:pl-20 sm:pr-5 lg:p-0 lg:w-[35%] flex-shrink-0 sm:w-[85%] w-[100%] flex-col">

            {/* save button */}
            <form onSubmit={handleSaveCode}>
              <div className="py-1 w-full">
                <input
                  required
                  className="w-[60%] border-gray-400 border-2 rounded-md p-2 placeholder-gray-500 shadow-md text-black bg-white mr-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit" className={classnames(
                  "w-auto text-white bg-purple-600 border-2 border-purple-600 z-10 rounded-md shadow-md px-2 py-2 hover:bg-purple-700 transition duration-200",
                  "mt-2 ml-4", // adjust the margin values to match the other elements
                  !code ? "opacity-50 cursor-not-allowed" : ""
                )}
                  disabled={!code}
                >
                  Save Code
                </button>
              </div>
            </form>

            <OutputWindow outputDetails={outputDetails} />
            <div className="flex flex-col items-end">
              <CustomInput
                customInput={customInput}
                setCustomInput={setCustomInput}
              />
              <button
                onClick={handleCompile}
                disabled={!code}
                className={classnames(
                  "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                  !code ? "opacity-50" : ""
                )}
              >
                {processing ? "Processing..." : "Compile and Execute"}
              </button>
            </div>
            {outputDetails && <OutputDetails outputDetails={outputDetails} />}
          </div>
        </div>


      </div>
    </div>
  );
};
export default Landing;
