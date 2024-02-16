import React, { useState, useEffect } from "react";
// import { starfall } from 'starfall-animation/lib/index.ts'
// import 'starfall-animation/lib/index.css'
import AceEditor from "react-ace";
// import Editor from aceBuilds;
import { ToastContainer, toast } from "react-toastify";
import DownloadCode from "./DownloadCode";
import { on } from "events";
import { useNavigate, useParams } from "react-router-dom";
import LanguagesDropdown from "./LanguagesDropdown";
import ThemeDropdown from "./ThemeDropdown";
import FontSizeDropdown from "./FontSizeDropdown";
import { classnames } from "../utils/general";
import OutputDetails from "./OutputDetails";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import Footer from "./Footer";
// import Copy from "../assets/svg/Copy";
// import ThemeChanger from "../shared/ThemeChanger/ThemeChanger";
// import Print from "../assets/svg/Print";
import Print from '../icons/Print';
import Copy from '../icons/Copy';
import ace from "react-ace";

const SavedCodeEditor = ({ editingIndex, setSavedCodes, savedCodes, setChildAction, childAction, onChange, language, theme, fontSize }) => {

    const { index } = useParams();
    const [daisyTheme, setDaisyTheme] = useState('');
    const navigate = useNavigate();
    const codes = JSON.parse(localStorage.getItem('savedCodes')) || [];
    const code = codes[index].code;
    const extension = codes[index].extension;
    const initialTitle = codes[index].title;
    const [title, setTitle] = useState(initialTitle || '');
    const [value, setValue] = useState(code || "");

    console.log("extension is", codes[index]);
    // useEffect(() => {
    //     starfall();
    // }, []);

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

        // console.log("old codes[index].title", codes[index].title);
        // console.log(" old codes[index].code", codes[index].code);
        codes[index].title = title;
        codes[index].code = value;
        const updatedCodes = [...codes];
        console.log("updatedCodes", updatedCodes);
        // setSavedCodes(updatedCodes);
        localStorage.setItem("savedCodes", JSON.stringify(updatedCodes));
        // console.log("codes[index].title", codes[index].title);
        // console.log("codes[index].code", codes[index].code);
        toast.success("Code Successfully Updated!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => navigate('/saved-codes')
        });

    };

    console.log(codes)
    return (
        <>

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

            {/* <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div> */}
            {/* <div style={{ height: '20px', width: '100%', background: 'linear-gradient(145deg, rgb(119, 46, 195), rgb(58, 18, 153))', }} id="starfall"> */}
            {/* <div style={{ height: '20px'}} className=" w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" id="starfall">

            </div> */}


            <div className="rounded-md mx-2 flex justify-center items-center flex-col bg-[#171212]">
                <div className="overlay rounded-md overflow-hidden w-[75%] h-full shadow-4xl">
                    <div className="flex items-center justify-between px-4 py-2 bg-black border-b border-gray-600">
                        <h1 className="text-xl font-bold text-white">Code Editor</h1>

                        <div className="flex justify-center items-center gap-2">
                            <DownloadCode
                                code={code}
                                lang_extension={extension}
                            />

                            <button
                                className="text-white active:text-blue-500 transition duration-200 active:scale-90"
                                onClick={handleCopyToClipboard}
                            >
                                <Copy />
                            </button>

                            <button
                                className="text-white active:text-blue-500 transition duration-200 active:scale-90"
                                onClick={() => window.print()}
                            >
                                <Print />
                            </button>
                        </div>
                    </div>
                    <AceEditor
                        className="h-[35vh] lg:h-[75vh]"
                        width={`100%`}
                        mode={language || "javascript"}
                        theme={"monokai"}
                        fontSize={fontSize || 14}
                        value={value}
                        editorProps={{ $blockScrolling: Infinity }}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}
                        defaultValue={codes[index].code}
                        onChange={handleEditorChange}
                    />


                    <form onSubmit={handleCodeUpdate}>
                        <div className="flex justify-between py-1 w-full h-[60px] bg-black">
                            <input
                                required
                                className="w-[70%] border-gray-400 border-2 rounded-md p-2 placeholder-gray-500 shadow-md text-black bg-white mr-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                type="text"
                                placeholder="Enter Title"
                                defaultValue={codes[index].title}
                                onChange={handleTitleChange}

                            />
                            <button type="submit" className={`
                             "w-auto text-white bg-purple-600 border-2 border-purple-600 z-10 rounded-md shadow-md px-2 py-2 active:bg-purple-700 active:scale-90 transition duration-200",
                             "mt-2 ml-4", // adjust the margin values to match the other elements
                             ${!value ? "opacity-50 cursor-not-allowed" : ""}
                         `}
                                disabled={!value}
                            >
                                Update
                            </button>
                            <button onClick={() => navigate('/saved-codes')} className="active:bg-gray-950 active:scale-90  transition duration-200 flex justify-center items-center gap-1 glass rounded-md p-2 px-3 border-2 text-white mx-2">Back</button>
                        </div>
                    </form>

                </div>

            </div>

        </>
    );
};

export default SavedCodeEditor;
