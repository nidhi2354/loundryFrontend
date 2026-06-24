import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Settings,
  LogOut,
  FileText,
} from "lucide-react";


import { Link, useLocation, useNavigate } from "react-router-dom";



function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      title: "Users",
      icon: Users,
      path: "/admin/users",
    },
    {
      title: "Orders",
      icon: ShoppingBag,
      path: "/admin/orders",
    },
    {
      title: "Blogs",
      icon: FileText,
      path: "/admin/blogs",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];




  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"));

    alert("Logout Successfully");

    navigate("/login");
  };


  return (
    <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col">


      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          Laundry Admin
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive =
            location.pathname === item.path;

          return (
            <Link
              key={item.title}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200
              ${isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
                }`}
            >
              <item.icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2
          bg-red-500 hover:bg-red-600 transition-all
          py-3 rounded-xl font-medium"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;