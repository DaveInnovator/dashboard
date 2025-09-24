import { useState } from "react";
import { Home, Users, CreditCard, Settings, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/" },
    { name: "Users", icon: <Users size={20} />, path: "/users" },
    { name: "Transactions", icon: <CreditCard size={20} />, path: "/transactions" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <div className="relative">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between bg-white shadow px-4 py-3">
        <span className="text-lg font-bold">Fintech Admin</span>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Logo */}
        <div className="p-6 border-b hidden md:block font-bold text-xl">
          Fintech Admin
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100"
                  onClick={() => setIsOpen(false)} // Close on mobile click
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
