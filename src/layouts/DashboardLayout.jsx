import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/components/Sidebar";
import Topbar from "../pages/dashboard/components/Topbar";

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;