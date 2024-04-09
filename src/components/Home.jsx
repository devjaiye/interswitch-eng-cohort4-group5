import { useQuery } from "@tanstack/react-query"
import { getAllBlacklist, getAllPermissions, getAllRoles, getAllUsers } from "../services/api-calls"




export default function Home() {
  const {data: roles} = useQuery({
    queryKey: ["GetAllRoles"], 
    queryFn: () => getAllRoles()
  })

  const {data: permissions} = useQuery({
    queryKey: ["GetAllPermissions"], 
    queryFn: () => getAllPermissions()
  })

  const {data: users} = useQuery({
    queryKey: ["GetAllUsers"], 
    queryFn: () => getAllUsers()
  })

  const {data:blacklistUsers} = useQuery({
    queryKey: ["GetAllBlacklist"], 
    queryFn: () => getAllBlacklist()
  })

  const stats = [
    { id: 1, name: 'Number of User', value: users?.length },
    { id: 2, name: 'Number of Blacklisted User', value: blacklistUsers?.length },
    { id: 3, name: 'Total Number of Users', value: users?.length + blacklistUsers?.length },
    { id: 1, name: 'Number of Roles', value: roles?.length },
    { id: 2, name: 'Number of Departments', value: '3' },
    { id: 3, name: 'Total Number of Number of Permissions', value: permissions?.length},
  ]

  return (
    <div>
      <h2 className="text-3xl font-semibold text-black mb-4 pl-6">Admin Dashboard</h2>
      <div className="bg-white py-6 sm:py-10">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto border bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 shadow-lg rounded-lg w-full h-[180px] flex flex-col items-center justify-center gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
