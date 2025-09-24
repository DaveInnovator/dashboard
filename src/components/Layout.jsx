import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-20 md:w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
