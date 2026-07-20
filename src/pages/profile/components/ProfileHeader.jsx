import {
  FiUser,
  FiCheckCircle,
} from "react-icons/fi";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-5">
        <div className="rounded-2xl bg-blue-100 p-4">
          <FiUser className="text-4xl text-blue-600" />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your personal information, career preferences, resume,
            achievements, and account settings.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-3">
        <div className="flex items-center gap-3">
          <FiCheckCircle className="text-2xl text-green-600" />

          <div>
            <p className="text-sm text-slate-500">
              Profile Completion
            </p>

            <h3 className="font-semibold text-slate-900">
              92% Complete
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;