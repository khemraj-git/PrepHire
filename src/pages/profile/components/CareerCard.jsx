import {
  FiBriefcase,
  FiTarget,
  FiFileText,
  FiCode,
  FiHome,
} from "react-icons/fi";

import Card from "../../../components/common/Card";

import { careerInfo } from "../../../data/profileData";

const CareerCard = () => {
  return (
    <Card className="p-8">
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3">
            <FiBriefcase className="text-2xl text-blue-600" />

            <h2 className="text-2xl font-bold text-slate-900">
              Career Information
            </h2>
          </div>

          <p className="mt-2 text-slate-500">
            Your career goals and technical profile.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Section
            icon={<FiTarget />}
            title="Preferred Role"
            value={careerInfo.preferredRole}
          />

          <Section
            icon={<FiBriefcase />}
            title="Experience"
            value={careerInfo.experience}
          />
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <FiFileText className="text-blue-600" />

            <h3 className="font-semibold">
              About
            </h3>
          </div>

          <p className="leading-7 text-slate-600">
            {careerInfo.bio}
          </p>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <FiCode className="text-blue-600" />

            <h3 className="font-semibold">
              Skills
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {careerInfo.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <FiHome className="text-blue-600" />

            <h3 className="font-semibold">
              Target Companies
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {careerInfo.targetCompanies.map((company) => (
              <span
                key={company}
                className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

const Section = ({
  icon,
  title,
  value,
}) => (
  <div>
    <div className="mb-2 flex items-center gap-2 text-blue-600">
      {icon}

      <span className="text-sm font-medium text-slate-500">
        {title}
      </span>
    </div>

    <p className="text-lg font-semibold text-slate-900">
      {value}
    </p>
  </div>
);

export default CareerCard;