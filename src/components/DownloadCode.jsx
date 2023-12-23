import download from "../assets/images/download.png";
import { filesaver } from "../utils/filesaver"


const DownloadCode = ({ code, lang_extension }) => {

    return (
        <button type="button" onClick={() => filesaver(code, lang_extension)} className="text-white outline-none bg-transparent border-none active:text-blue-500 transition duration-200 active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>

        </button>
    );
};

export default DownloadCode;