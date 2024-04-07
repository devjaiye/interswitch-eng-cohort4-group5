import React from 'react'

const UserDetails = () => {
  return (
    <div>

      <span className="inline-block h-20 w-20 mb-4 overflow-hidden rounded-full bg-gray-100">
        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>

      <div className='grid grid-cols-2 gap-y-3'>
        <p>Name: </p>
        <p>Joy Obi</p>

        <p>Email: </p>
        <p>joy@testmail.com</p>

        <p>Phone No: </p>
        <p>08067578834</p>

        <p>Role: </p>
        <p>User</p>

        <p>Last Seen:</p>
        <p>08:03pm, 02-04-2024</p>
      </div>
    </div>
  )
}

export default UserDetails
