import { Bell, Search } from "lucide-react";

function Topbar() {
  return (
    <header className="bg-white h-16 shadow flex items-center justify-between px-6">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search your orders..."
          className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-4 w-4 rounded-full flex items-center justify-center">
            2
          </span>
        </button>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h4 className="font-semibold">Nidhi</h4>
            <p className="text-xs text-gray-500">Customer</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;