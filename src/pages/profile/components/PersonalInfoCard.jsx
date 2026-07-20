import {
  FiEdit,
  FiUser,
} from "react-icons/fi";

import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";

import { personalInfo } from "../../../data/profileData";

const PersonalInfoCard = () => {
  return (
    <Card className="p-8">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex w-full flex-col items-center lg:w-72">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
            <FiUser className="text-6xl text-white" />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            {personalInfo.name}
          </h2>

          <p className="mt-2 text-slate-500">
            Frontend Developer
          </p>

          <Button className="mt-6 flex items-center gap-2">
            <FiEdit />

            Edit Profile
          </Button>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
          <InfoItem label="Email" value={personalInfo.email} />

          <InfoItem label="Phone" value={personalInfo.phone} />

          <InfoItem label="College" value={personalInfo.college} />

          <InfoItem label="Branch" value={personalInfo.branch} />

          <InfoItem
            label="Graduation Year"
            value={personalInfo.graduationYear}
          />

          <InfoItem
            label="Preferred Role"
            value="Frontend Developer"
          />
        </div>
      </div>
    </Card>
  );
};

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-sm font-medium text-slate-500">
      {label}
    </p>

    <p className="mt-2 text-lg font-semibold text-slate-900">
      {value}
    </p>
  </div>
);

export default PersonalInfoCard;