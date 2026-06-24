import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HeaderLogo from "../assets/HeaderLogo.png";

function Header() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];


  // JSON.stringify() JavaScript object ko JSON string me convert karta hai.


  // JSON.parse() JSON string ko wapas JavaScript object me convert karta hai.
  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem("user");
      console.log("Header User:", userData);
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    };

    checkAuth();

    window.addEventListener("authChange", checkAuth);

    return () => {
      window.removeEventListener("authChange", checkAuth);
    };
  }, []);

  // logout function

  const handleLogout = () => {
    localStorage.removeItem("token");

    window.dispatchEvent(new Event("authChange"));

    setUser(null);
    navigate("/login");
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-sky-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={HeaderLogo}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg md:text-xl font-bold text-sky-950">
              LaundryPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="text-gray-600 hover:text-sky-600 font-medium transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <Link
                to={user?.role === "admin" ? "/admin" : "/user"}
              >
                <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold cursor-pointer hover:bg-sky-700 transition">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              </Link>

            ) : (
              <>
                <Link to="/login">
                  <button className="px-5 py-2 border border-sky-600 text-sky-600 rounded-full font-semibold hover:bg-sky-50 transition">
                    Login
                  </button>
                </Link>

                <Link to="/signup">
                  <button className="px-5 py-2 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-700 transition shadow-md">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-sky-900"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div >

        {/* Mobile Menu */}
        {
          open && (
            <div className="md:hidden pb-5">
              <div className="mt-4 bg-white rounded-2xl shadow-lg border border-sky-100 p-5">

                {/* Nav Links */}
                <div className="flex flex-col gap-4">
                  {navLinks.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="text-gray-700 hover:text-sky-600 font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-6">

                  {user ? (
                    <Link
                      to={user?.role === "admin" ? "/admin" : "/user"}
                      onClick={() => setOpen(false)}
                    >
                      <div className="w-full flex items-center gap-3 p-3 rounded-xl bg-sky-600 text-white">
                        <div className="w-8 h-8 rounded-full bg-white text-sky-600 flex items-center justify-center font-bold">
                          {user.name?.charAt(0).toUpperCase()}
                        </div>

                        <span>{user.name}</span>
                      </div>
                    </Link>

                  ) : (
                    <>
                      <Link to="/login" onClick={() => setOpen(false)}>
                        <button className="w-full py-2.5 border border-sky-600 text-sky-600 rounded-xl font-semibold hover:bg-sky-50 transition">
                          Login
                        </button>
                      </Link>

                      <Link to="/signup" onClick={() => setOpen(false)}>
                        <button className="w-full py-2.5 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition shadow-md">
                          Sign Up
                        </button>
                      </Link>
                    </>
                  )}

                </div>

              </div>
            </div >
          )
        }
      </div >
    </header >
  );
}

export default Header;