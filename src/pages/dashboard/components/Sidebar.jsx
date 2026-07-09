import { NavLink } from "react-router-dom";
import dashboardLinks from "../../../constants/dashboardLinks";

function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-6 py-5">
        <h1 className="text-2xl font-bold text-blue-600">
          PrepHire
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Interview Platform
        </p>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {dashboardLinks.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`
                  }
                >
                  <Icon size={20} />
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;