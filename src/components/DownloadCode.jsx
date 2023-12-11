import download  from "../assets/images/download.png";
import { filesaver } from "../utils/filesaver"


const DownloadCode = ({ code, lang_extension }) => {
    
    return (
        <button type="button" onClick={() => filesaver(code, lang_extension)} className="outline-none bg-transparent border-none">
            <img src={download} alt="download" className="w-6 h-6 object-contain bg-white" />
          </button>
    );
};

export default DownloadCode;