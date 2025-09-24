import { Home, Users, CreditCard, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/" },
    { name: "Users", icon: <Users size={20} />, path: "/users" },
    { name: "Transactions", icon: <CreditCard size={20} />, path: "/transactions" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <div className="h-screen bg-white shadow-lg flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b hidden md:block font-bold text-xl">
        Fintech Admin
      </div>
      <div className="p-4 border-b flex md:hidden justify-center">
        <span className="text-xl font-bold">F</span>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center justify-center md:justify-start md:space-x-3 p-2 rounded-md hover:bg-gray-100"
              >
                {item.icon}
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
