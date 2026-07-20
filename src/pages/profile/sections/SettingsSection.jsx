import { accountSettings } from "../../../data/profileData";
import AccountSettingsCard from "../components/AccountSettingsCard";

const SettingsSection = () => {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Account Settings
        </h2>

        <p className="mt-2 text-slate-500">
          Manage your account preferences and security settings.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {accountSettings.map((item) => (
          <AccountSettingsCard
            key={item.id}
            setting={item}
          />
        ))}
      </div>
    </section>
  );
};

export default SettingsSection;