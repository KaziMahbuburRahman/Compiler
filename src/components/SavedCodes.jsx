import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import ThemeChanger from "../shared/ThemeChanger/ThemeChanger";
import Footer from "./Footer";
import { NavbarComponent } from "./NavbarComponent";
import { Pagination } from "rc-paginate";

const SavedCodes = () => {
    const navigate = useNavigate();
    const [childAction, setChildAction] = useState(false);
    const [savedCodes, setSavedCodes] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(null);
    const [editedCode, setEditedCode] = useState('');
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(7);
    const [totalItems, setTotalItems] = useState(0); // Initialize with 0, update later
    //delete code state
    const [deleteCode, setDeleteCode] = useState(false);

    //I will remove unnecessary code later
    const closeModal = () => {
        setModalOpen(false);
        setCurrentIndex(null);
        setEditedCode('');
    }

    const [daisyTheme, setDaisyTheme] = useState('');

    useEffect(() => {
        const codes = JSON.parse(localStorage.getItem("savedCodes")) || [];
        setSavedCodes(codes);
        setTotalItems(codes.length)
    }, []);

    const handleEditButton = (index) => {
        navigate(`/saved-codes/${index}`);
        setCurrentIndex(index);
        setEditedCode(savedCodes[index].code);
    };

    const handleCodeDelete = (index) => {
        const updatedCodes = [...savedCodes];
        updatedCodes.splice(index, 1);
        setSavedCodes(updatedCodes);
        localStorage.setItem("savedCodes", JSON.stringify(updatedCodes));
        setCurrentIndex(null);
        setEditedCode('');
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
                <input type="checkbox" id="my-modal-6" className="modal-toggle" checked={deleteCode} />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure you want to delete {savedCodes[currentIndex]?.title}?</h3>
                        <p className="py-4">Deleting is permanent and can't be undone</p>
                        <div className="modal-action">
                            <label onClick={() => handleCodeDelete(currentIndex)} htmlFor="my-modal-6" className="btn bg-red-600 hover:bg-red-800 border-0">Delete</label>
                            <label onClick={() => setDeleteCode(false)} htmlFor="my-modal-6" className="btn">Cancel</label>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SavedCodes;
