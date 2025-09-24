import { useState } from "react";
import {
  BarChart as BarChartIcon,
  Users,
  CreditCard,
  DollarSign,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock Chart Data
const chartData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3200 },
  { name: "Mar", revenue: 2800 },
  { name: "Apr", revenue: 5100 },
  { name: "May", revenue: 4700 },
  { name: "Jun", revenue: 6200 },
];

// Mock Transactions
const transactions = [
  { id: 1, user: "John Doe", amount: "$120", status: "Completed", date: "2025-09-20" },
  { id: 2, user: "Jane Smith", amount: "$220", status: "Pending", date: "2025-09-21" },
  { id: 3, user: "Samuel Green", amount: "$500", status: "Failed", date: "2025-09-22" },
  { id: 4, user: "Emily Brown", amount: "$75", status: "Completed", date: "2025-09-23" },
];

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const cards = [
    { title: "Total Users", value: "1,245", icon: <Users />, color: "bg-blue-500" },
    { title: "Transactions", value: "8,930", icon: <CreditCard />, color: "bg-green-500" },
    { title: "Revenue", value: "$23,400", icon: <DollarSign />, color: "bg-yellow-500" },
    { title: "Analytics", value: "View Reports", icon: <BarChartIcon />, color: "bg-purple-500" },
  ];

  // Filtering logic
  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch = tx.user.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter ? tx.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="p-4 md:p-6 bg-white shadow rounded-xl md:rounded-2xl flex items-center space-x-4"
          >
            <div
              className={`${card.color} p-2 md:p-3 rounded-full text-white flex items-center justify-center`}
            >
              {card.icon}
            </div>
            <div>
              <p className="text-xs md:text-sm text-gray-500">{card.title}</p>
              <h2 className="text-lg md:text-xl font-bold">{card.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Transactions */}
      <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Chart */}
        <div className="col-span-1 lg:col-span-2 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow">
          <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
            Revenue Overview
          </h2>
          <div className="w-full h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                <XAxis dataKey="name" stroke="#333" fontSize={12} />
                <YAxis stroke="#333" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111827",
                    color: "#fff",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                  }}
                />
                <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="col-span-1 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow overflow-x-auto">
          {/* Title + Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
            <h2 className="text-base md:text-lg font-semibold">Recent Transactions</h2>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 text-sm w-full sm:w-48 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 text-sm w-full sm:w-40 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="py-2 px-2">User</th>
                  <th className="py-2 px-2">Amount</th>
                  <th className="py-2 px-2">Status</th>
                  <th className="py-2 px-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((tx) => (
                    <tr
                      key={tx.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-2 px-2 whitespace-nowrap">{tx.user}</td>
                      <td className="py-2 px-2 whitespace-nowrap">{tx.amount}</td>
                      <td
                        className={`py-2 px-2 font-medium whitespace-nowrap ${
                          tx.status === "Completed"
                            ? "text-green-500"
                            : tx.status === "Pending"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                      >
                        {tx.status}
                      </td>
                      <td className="py-2 px-2 whitespace-nowrap">{tx.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="py-4 text-center text-gray-500 text-sm"
                    >
                      No matching transactions
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
