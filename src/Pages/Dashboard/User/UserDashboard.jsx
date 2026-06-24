import React from "react";
import Sidebar from "../../../Components/Dashboard/User/Sidebar";
import Topbar from "../../../Components/Dashboard/User/Topbar";
import StatsCard from "../../../Components/Dashboard/User/StatsCard";

import {
  ShoppingBag,
  Truck,
  CheckCircle,
  Wallet,
} from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Topbar */}
        <Topbar />

        <div className="p-6">
          {/* Welcome Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-slate-800">
              Welcome Back 👋
            </h1>
            <p className="text-gray-500 mt-1">
              Manage your laundry orders and track their status.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatsCard
              title="Total Orders"
              value="15"
              icon={<ShoppingBag size={35} />}
            />

            <StatsCard
              title="Pending Orders"
              value="3"
              icon={<Truck size={35} />}
            />

            <StatsCard
              title="Completed Orders"
              value="12"
              icon={<CheckCircle size={35} />}
            />

            <StatsCard
              title="Wallet Balance"
              value="₹500"
              icon={<Wallet size={35} />}
            />
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-md mt-8 p-6">
            <h2 className="text-xl font-bold mb-4">
              Recent Orders
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="py-3">Order ID</th>
                    <th className="py-3">Service</th>
                    <th className="py-3">Date</th>
                    <th className="py-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="py-3">#101</td>
                    <td>Wash & Fold</td>
                    <td>18 Jun 2026</td>
                    <td>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                        Pending
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">#102</td>
                    <td>Dry Cleaning</td>
                    <td>16 Jun 2026</td>
                    <td>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        Completed
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3">#103</td>
                    <td>Ironing</td>
                    <td>15 Jun 2026</td>
                    <td>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        Processing
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <button className="bg-sky-600 text-white p-4 rounded-xl font-semibold hover:bg-sky-700 transition">
              + New Order
            </button>

            <button className="bg-green-600 text-white p-4 rounded-xl font-semibold hover:bg-green-700 transition">
              Track Order
            </button>

            <button className="bg-purple-600 text-white p-4 rounded-xl font-semibold hover:bg-purple-700 transition">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;