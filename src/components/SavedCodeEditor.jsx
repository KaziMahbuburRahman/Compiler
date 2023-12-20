import React, { useState, useEffect } from "react";

import Editor from "@monaco-editor/react";
import { ToastContainer, toast } from "react-toastify";
import DownloadCode from "./DownloadCode";
import { on } from "events";
import { useParams } from "react-router-dom";
import LanguagesDropdown from "./LanguagesDropdown";
import ThemeDropdown from "./ThemeDropdown";
import FontSizeDropdown from "./FontSizeDropdown";
import { classnames } from "../utils/general";
import OutputDetails from "./OutputDetails";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import { NavbarComponent } from "./NavbarComponent";


const SavedCodeEditor = ({ editingIndex, setEditedCode, setEditingIndex, setSavedCodes, savedCodes, setChildAction, childAction, onChange, language, extension, theme, fontSize }) => {

    const { index } = useParams();
    const [title, setTitle] = useState('');
    const codes = JSON.parse(localStorage.getItem('savedCodes')) || [];
    const code = codes[index].code;
    const [value, setValue] = useState(code || "");
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    // console.log("codes from savedcodeEditor", codes);

    //code from index
    // console.log("codes[index]", codes[index].code);

    // useEffect(() => {
    //     if (childAction) {
    //         console.log("childAction", childAction);

    //         const updatedCodes = [...savedCodes];
    //         console.log("updatedCodes", updatedCodes);
    //         console.log("updatedCodes[editingIndex].code", updatedCodes[editingIndex].code);
    //         updatedCodes[editingIndex].code = value;
    //         setSavedCodes(updatedCodes);
    //         // console.log("updatedCodes", updatedCodes[editingIndex]);
    //         localStorage.setItem("savedCodes", JSON.stringify(updatedCodes));

    //         toast.success("Code saved successfully!");

    //         setEditingIndex(null);
    //         setEditedCode('');
    //         setChildAction(false);
    //     }

    // }, [childAction]);


    const handleEditorChange = (value) => {
        console.log("value changed", value)
        setValue(value);

        // onChange("code", value);
    };
    const handleTitleChange = (e) => {
        console.log("title changed", e.target.value)
        setTitle(e.target.value);

        // onChange("code", value);
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

    const handleCodeUpdate = (e) => {
        e.preventDefault();
        // console.log("title", title);
        // console.log("value", value);

        console.log("old codes[index].title", codes[index].title);
        console.log(" old codes[index].code", codes[index].code);
        codes[index].title = title;
        codes[index].code = value;
        const updatedCodes = [...codes, codes[index]];

        // setSavedCodes(updatedCodes);
        localStorage.setItem("savedCodes", JSON.stringify(updatedCodes));
        console.log("codes[index].title", codes[index].title);
        console.log("codes[index].code", codes[index].code);
        toast.success("Code Successfully Updated!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };


    return (
        <>
            <NavbarComponent openModal={openModal} />
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


            <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
                <div className="flex items-center justify-between px-4 py-2 bg-black border-b border-gray-600">
                    <h1 className="text-xl font-bold text-white">Code Editor</h1>

                    <div className="flex justify-center items-center">
                        <DownloadCode
                            code={code}
                            lang_extension={extension}
                        />

                        <button
                            className="mx-5 px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:shadow-lg transition duration-200"
                            onClick={handleCopyToClipboard}
                        >
                            Copy
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
                    defaultValue={codes[index].code}
                    onChange={handleEditorChange}
                />
            </div>
            <div className="right-container flex sm:pl-20 sm:pr-5 lg:p-0 lg:w-[35%] flex-shrink-0 sm:w-[85%] w-[100%] flex-col">

                {/* save button */}
                <form onSubmit={handleCodeUpdate}>
                    <div className="py-1 w-full">
                        <input
                            required
                            className="w-[60%] border-gray-400 border-2 rounded-md p-2 placeholder-gray-500 shadow-md text-black bg-white mr-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            type="text"
                            placeholder="Enter Title"
                            defaultValue={codes[index].title}
                            onChange={handleTitleChange}
                        />
                        <button type="submit" className={classnames(
                            "w-auto text-white bg-purple-600 border-2 border-purple-600 z-10 rounded-md shadow-md px-2 py-2 hover:bg-purple-700 transition duration-200",
                            "mt-2 ml-4", // adjust the margin values to match the other elements
                            !value ? "opacity-50 cursor-not-allowed" : ""
                        )}
                            disabled={!value}
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SavedCodeEditor;
