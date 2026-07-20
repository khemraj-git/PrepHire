import {
  FiDownload,
  FiUpload,
  FiFileText,
} from "react-icons/fi";

import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";

import { resumeInfo } from "../../../data/profileData";

const ResumeCard = () => {
  return (
    <Card className="p-8">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Resume
          </h2>

          <p className="mt-2 text-slate-500">
            Manage your latest uploaded resume.
          </p>
        </div>

        <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-blue-100 p-4">
              <FiFileText className="text-3xl text-blue-600" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {resumeInfo.fileName}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Last Updated: {resumeInfo.lastUpdated}
              </p>

              <span className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                {resumeInfo.status}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2"
            >
              <FiDownload />
              Download Resume
            </Button>

            <Button className="flex items-center gap-2">
              <FiUpload />
              Upload New
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ResumeCard;