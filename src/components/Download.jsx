import { MdOutlineFileDownload } from "react-icons/md";
import Button from "../ui/Button";
import download from "/src/Kevin_E_Divinagracia.pdf";
function Download() {
  return (
    <div>
      <a href={download} target="_blank">
        <Button
          className="mt-4 bg-slate-700 hover:bg-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 border-b border-transparent dark:border-b dark:border-cyan-500  text-lg"
          icon={<MdOutlineFileDownload />}
          classIcon="text-2xl"
        >
          Resume
        </Button>
      </a>
    </div>
  );
}

export default Download;
