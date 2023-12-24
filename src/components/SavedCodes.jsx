import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ThemeChanger from "../shared/ThemeChanger/ThemeChanger";
import Footer from "./Footer";
import { NavbarComponent } from "./NavbarComponent";
import { Pagination } from "rc-paginate";

const SavedCodes = () => {
  const navigate = useNavigate();
  const [childAction, setChildAction] = useState(false);
  const [savedCodes, setSavedCodes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedCode, setEditedCode] = useState("");
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setEditingIndex(null);
    setEditedCode("");
  };
  const [daisyTheme, setDaisyTheme] = useState("");

  useEffect(() => {
    const codes = JSON.parse(localStorage.getItem("savedCodes")) || [];
    setSavedCodes(codes);
    setTotalItems(codes.length);
  }, []);

  const handleEditButton = (index) => {
    // if (editingIndex !== null) {
    //     // Save the edited code before allowing to view another code
    //     handleCodeSave();
    // }
    navigate(`/saved-codes/${index}`);
    setEditingIndex(index);
    setEditedCode(savedCodes[index].code);
  };

  const handleCodeDelete = (index) => {
    const updatedCodes = [...savedCodes];
    updatedCodes.splice(index, 1);
    setSavedCodes(updatedCodes);
    localStorage.setItem("savedCodes", JSON.stringify(updatedCodes));
    setEditingIndex(null);
    setEditedCode("");
  };

  const handleCodeSave = () => {
    if (editingIndex !== null) {
      setChildAction(true);
    }
  };

  return (
    <div>
      <NavbarComponent openModal={openModal} />
      <ThemeChanger
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        daisyTheme={daisyTheme}
        setDaisyTheme={setDaisyTheme}
      />
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
      <div className="mx-6 my-10 pt-3">
        <h1 className="text-4xl font-bold mb-8 mt-8">Saved Codes</h1>
        {savedCodes.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {savedCodes
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((code, index) => (
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
                            handleCodeDelete(index);
                          }}
                          className="text-red-500 hover:text-red-600 font-medium ml-2"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-500 text-sm">
                        Language: {code.language || "Placeholder"}
                      </span>
                      <span className="text-gray-500 text-sm">
                        Created: {code.timestamp || "Placeholder"}
                      </span>
                    </div>
                  </div>

                  {/* {(editingIndex === index || code.showCode) && (
                                    <div className="px-6 pb-6">
                                        <SavedCodeEditor
                                            setEditingIndex={setEditingIndex}
                                            setEditedCode={setEditedCode}
                                            savedCodes={savedCodes}
                                            setSavedCodes={setSavedCodes}

                                            setChildAction={setChildAction}
                                            childAction={childAction}
                                            code={editingIndex === index ? editedCode : code.code}
                                            readOnly={editingIndex !== index}
                                            editingIndex={editingIndex}
                                        />
                                    </div>
                                )} */}
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
            // color="red"
            possibleLimits={[3]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SavedCodes;
