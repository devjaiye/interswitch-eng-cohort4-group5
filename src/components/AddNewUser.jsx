import React from 'react'

const AddNewUser = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        First Name
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter first name"
        />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Last Name
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter last name"
        />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Email
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter email"
        />
      </div>
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Phone No
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter phone number"
        />
      </div>
    </div>

    <div>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        Select Role
      </label>
      <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Canada"
      >
        <option>Select role</option>
        <option>User Admin</option>
        <option>Blacklist Admin</option>
      </select>
    </div>

    <div>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        Select Department
      </label>
      <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Canada"
      >
        <option>Select department</option>
        <option>Technologies</option>
        <option>Administratives</option>
        <option>Operations</option>
      </select>
    </div>

    <button className='bg-blue-500 text-white py-3 rounded-full'>Create User</button>

    </div>
  )
}

export default AddNewUser
