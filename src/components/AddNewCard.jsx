const AddNewCard = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Card No
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Card Owner
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>
    </div>

    <div>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        Select Card Type
      </label>
      <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Canada"
      >
        <option>Select card type</option>
        <option>Master</option>
        <option>Verve</option>
        <option>Visa</option>
      </select>
    </div>

    <div>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        Status
      </label>
      <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Canada"
      >
        <option>Select card status</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>
    </div>

    <button className='bg-blue-500 text-white py-3 rounded-full'>Create Card</button>

    </div>
  )
}

export default AddNewCard
