import { Bell, Search } from "lucide-react";

function Topbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">



      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />


        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border rounded-lg"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell />

        <img
          src="https://i.pravatar.cc/40"
          alt="admin"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}

export default Topbar;


