import {
  FiLock,
  FiBell,
  FiShield,
  FiLogOut,
  FiArrowRight,
} from "react-icons/fi";

import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";

const icons = {
  password: {
    icon: <FiLock className="text-3xl text-blue-600" />,
    bg: "bg-blue-100",
  },

  notification: {
    icon: <FiBell className="text-3xl text-yellow-600" />,
    bg: "bg-yellow-100",
  },

  security: {
    icon: <FiShield className="text-3xl text-green-600" />,
    bg: "bg-green-100",
  },

  logout: {
    icon: <FiLogOut className="text-3xl text-red-600" />,
    bg: "bg-red-100",
  },
};

const AccountSettingsCard = ({ setting }) => {
  const current = icons[setting.icon];

  return (
    <Card className="group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div className="flex gap-5">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${current.bg}`}
          >
            {current.icon}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {setting.title}
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              {setting.description}
            </p>
          </div>
        </div>

        <Button
          variant={setting.icon === "logout" ? "danger" : "outline"}
          className="flex items-center gap-2"
        >
          {setting.action}

          <FiArrowRight />
        </Button>
      </div>
    </Card>
  );
};

export default AccountSettingsCard;