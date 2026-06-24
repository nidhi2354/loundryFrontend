import Sidebar from "../../../Components/Dashboard/Admin/Sidebar";
import Topbar from "../../../Components/Dashboard/Admin/Topbar";

import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <div className="ml-64">
        <Topbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;