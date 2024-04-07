import React from 'react'

const RemoveByCategory = () => {
  return (
    <div>
      <form action="" className='flex flex-col gap-3'>
      <div>
        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
          Select Category
        </label>
        <select
          id="location"
          name="location"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Canada"
        >
          <option>Select category</option>
          <option>Technologies</option>
          <option>Administratives</option>
          <option>Operations</option>
        </select>
      </div>

      <div>
      <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
        Reason
      </label>
      <div className="mt-2">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={''}
        />
      </div>
      </div>

      <button className='bg-blue-500 text-white p-2 rounded-2xl'>Remove from Blacklist</button>
      
      </form>
    </div>
  )
}

export default RemoveByCategory
