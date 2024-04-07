const stats = [
  { id: 1, name: 'Number of User Admin', value: '4' },
  { id: 2, name: 'Number of Blacklist Admin', value: '6' },
  { id: 3, name: 'Total Number of Users', value: '10' },
  { id: 1, name: 'Number of active users', value: '12' },
  { id: 2, name: 'Number of Blaclisted users', value: '9' },
  { id: 3, name: 'Total Number of user', value: '21' },
]

export default function Home() {
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
