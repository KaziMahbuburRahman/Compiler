import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import ThemeChanger from "../shared/ThemeChanger/ThemeChanger";
import Footer from "./Footer";
import { Pagination } from "rc-paginate";

const SavedCodes = () => {
    const navigate = useNavigate();
    const [childAction, setChildAction] = useState(false);
    const [savedCodes, setSavedCodes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(7);
    const [totalItems, setTotalItems] = useState(0); // Initialize with 0, update later
    //delete code state
    const [deleteCode, setDeleteCode] = useState(false);

    useEffect(() => {
        const codes = JSON.parse(localStorage.getItem("savedCodes")) || [];
        setSavedCodes(codes);
        setTotalItems(codes.length)
    }, []);

    const handleEditButton = (index) => {
        navigate(`/saved-codes/${index}`);
        setCurrentIndex(index);
    };

    const handleCodeDelete = (index) => {
        const updatedCodes = [...savedCodes];
        updatedCodes.splice(index, 1);
        setSavedCodes(updatedCodes);
        localStorage.setItem("savedCodes", JSON.stringify(updatedCodes));
        setCurrentIndex(null);
        setDeleteCode(false);
    };

    const handleCodeSave = () => {
        if (currentIndex !== null) {
            setChildAction(true);
            // Additional logic for code save if needed
        }
    };

    return (
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
            <div className="mx-6 my-10 pt-3 h-full">
                <h1 className="text-4xl font-bold mb-8 mt-8">Saved Codes</h1>
                {savedCodes.length > 0 ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {savedCodes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((code, index) => (
                            <li
                                key={index}
                                className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition duration-200"
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xl font-bold">{code.title}</span>
                                        <div>
                                            <button
                                                onClick={() => handleEditButton(index)}
                                                className="text-blue-500 hover:text-blue-600 font-medium"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setDeleteCode(true);
                                                    setCurrentIndex(index);
                                                }}
                                                className="text-red-500 hover:text-red-600 font-medium ml-2"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-gray-500 text-sm">Language: {code.language || 'Placeholder'}</span>
                                        <span className="text-gray-500 text-sm">Created: {code.timestamp || 'Placeholder'}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-lg text-gray-500 mt-4">No saved codes found.</p>
                )}
                <div className="my-2">
                    <Pagination
                        totalItems={totalItems}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        setItemsPerPage={setItemsPerPage}
                        possibleLimits={[7]}
                        color="MediumSlateBlue"
                    />
                </div>


                {/* Put this part before </body> tag */}
                {/* <input type="checkbox" id="my-modal-6" className="modal-toggle" checked={deleteCode} />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure you want to delete {savedCodes[currentIndex]?.title}?</h3>
                        <p className="py-4">Deleting is permanent and can't be undone</p>
                        <div className="modal-action">
                            <label onClick={() => handleCodeDelete(currentIndex)} htmlFor="my-modal-6" className="btn bg-red-600 hover:bg-red-800 border-0">Delete</label>
                            <label onClick={() => setDeleteCode(false)} htmlFor="my-modal-6" className="btn">Cancel</label>
                        </div>
                    </div>
                </div> */}


                {deleteCode ? (<div
                    className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm"
                    aria-labelledby="header-5a content-5a"
                    aria-modal="true"
                    tabindex="-1"
                    role="dialog"
                >
                    {/*    <!-- Modal --> */}
                    <div
                        // ref={wrapperRef}
                        className="flex max-h-[90vh]   max-w-xs flex-col gap-6 overflow-hidden rounded bg-white p-6 text-center text-slate-500 shadow-xl shadow-slate-700/10"
                        id="modal"
                        role="document"
                    >
                        {/*        <!-- Modal header --> */}
                        <header
                            id="header-5a"
                            className="flex flex-col items-center gap-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 stroke-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-21 desc-21"
                            >
                                <title id="title-21">Icon title</title>
                                <desc id="desc-21">
                                    A more detailed description of the icon
                                </desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                            </svg>
                            <h3 className="flex-1 text-xl font-medium text-slate-700">
                                Delete File?
                            </h3>
                        </header>
                        {/*        <!-- Modal body --> */}
                        <div id="content-5a" className="flex-1 overflow-auto">
                            <p>After deleting the file, recovery will not be possible</p>
                        </div>
                        {/*        <!-- Modal actions --> */}
                        <div className="flex justify-start gap-2">
                            <button onClick={() => handleCodeDelete(currentIndex)} className="inline-flex items-center justify-center flex-1 h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-teal-500 hover:bg-teal-600 focus:bg-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none">
                                <span>Yes, I'm sure</span>
                            </button>
                            <button onClick={() => setDeleteCode(false)} className="inline-flex items-center justify-center flex-1 h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-teal-500 hover:bg-teal-100 hover:text-teal-600 focus:bg-teal-200 focus:text-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-teal-300 disabled:shadow-none disabled:hover:bg-transparent">
                                <span>Maybe not</span>
                            </button>
                        </div>
                    </div>
                </div>
                ) : null}
            </div>
        </div>
    );
};

export default SavedCodes;
