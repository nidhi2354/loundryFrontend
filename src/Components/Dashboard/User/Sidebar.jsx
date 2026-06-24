import {
  LayoutDashboard,
  ShoppingBag,
  Truck,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Orders",
    icon: ShoppingBag,
  },
  {
    title: "Track Order",
    icon: Truck,
  },
  {
    title: "Profile",
    icon: User,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-2xl font-bold">LaundryPro</h2>
        <p className="text-sm text-slate-400">User Panel</p>
      </div>

      <div className="mt-6 px-3">
        {menuItems.map((item) => (
          <button
            key={item.title}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
          >
            <item.icon size={20} />
            {item.title}
          </button>
        ))}
      </div>

      <div className="absolute bottom-5 left-3 right-3">
        <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-red-500 hover:bg-red-600 transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;