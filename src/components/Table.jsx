const mockTransactions = [
  { id: 1, user: "John Doe", amount: "$250", status: "Completed" },
  { id: 2, user: "Jane Smith", amount: "$120", status: "Pending" },
  { id: 3, user: "Mike Johnson", amount: "$500", status: "Failed" },
  { id: 4, user: "Sarah Lee", amount: "$90", status: "Completed" },
];

const Table = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Recent Transactions</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b dark:border-gray-700">
            <th className="p-2 text-gray-600 dark:text-gray-300">User</th>
            <th className="p-2 text-gray-600 dark:text-gray-300">Amount</th>
            <th className="p-2 text-gray-600 dark:text-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockTransactions.map((tx) => (
            <tr key={tx.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{tx.user}</td>
              <td className="p-2">{tx.amount}</td>
              <td
                className={`p-2 font-medium ${
                  tx.status === "Completed"
                    ? "text-green-600"
                    : tx.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {tx.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
