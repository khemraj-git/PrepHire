import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";
import { FiDownload, FiRefreshCw } from "react-icons/fi";

const ActionButtons = () => {
  return (
    <Card className="p-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button className="flex flex-1 items-center justify-center gap-2">
          <FiDownload />
          Download Report
        </Button>

        <Button className="flex flex-1 items-center justify-center gap-2 bg-slate-700 hover:bg-slate-800">
          <FiRefreshCw />
          Upload Another Resume
        </Button>
      </div>
    </Card>
  );
};

export default ActionButtons;