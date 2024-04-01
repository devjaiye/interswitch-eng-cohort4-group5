import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const UsersTable = () => {
  // Array of user objects containing user data
  const users = [
    { id: 3, fullName: 'Besique Monroe', userRole: 'User Admin', email: 'besique@example.com', createdAt: 'Jan 28, 2024', item: 'bag', status: 'Active' },
    { id: 7, fullName: 'James Cavier', userRole: 'Black List Admin', email: 'james@example.com', createdAt: 'Jan 28, 2024', item: 'table', status: 'Active' },
    { id: 12, fullName: 'Elvis Son', userRole: 'User Admin', email: 'elvis@example.com', createdAt: 'Jan 28, 2024', item: 'chair', status: 'Suspended' },
    { id: 66, fullName: 'Dana White', userRole: 'Black List Admin', email: 'dana@example.com', createdAt: 'Jan 28, 2024', item: 'bag', status: 'Inactive' }
  ];

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700">User Accounts</h2>
          <span className="text-xs text-gray-500">View accounts of registered users</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="ml-10 space-x-8 lg:ml-40">
            <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
              Create Item
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Full Name</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">User Role</th>
                <th className="px-5 py-3">Items</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {/* Dynamically render table rows */}
              {users.map(user => (
                <tr key={user.id}>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">{user.id}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">{user.fullName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">{user.email}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">{user.userRole}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">{user.item}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold text-${user.status === 'Active' ? 'green' : user.status === 'Suspended' ? 'yellow' : 'red'}-900 bg-${user.status === 'Active' ? 'green' : user.status === 'Suspended' ? 'yellow' : 'red'}-200`}>{user.status}</span>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm ">
                    <div className="flex gap-4">
                    <PencilIcon className="w-4 h-4 text-blue-600 cursor-pointer" />
                  <TrashIcon className="w-4 h-4 text-red-600 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
