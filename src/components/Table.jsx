import { useState } from "react";
import SlideOver from "./SlideOver";
import CardDetailsSlide from "./CardDetailsSlide";
import DeleteDialogue from "./DeleteDialogue";
import AddNewCardSlide from "./AddNewCardSlide";
import AddNewUserSlide from "./AddNewUserSlide";
import RemoveByCategory from "./RemoveByCategory";
import RemoveByCategorySlide from "./RemoveByCategorySlide";

const people = [
  { firstName: 'Daniel', lastName: 'AdeKunle', email: 'daniel@testmail.com', phoneNo: '081400949832', userRole: 'Admin', department: "Technologies" },
  { firstName: 'Joy', lastName: 'Obi', email: 'joy@testmail.com', phoneNo: '080900949855', userRole: 'User', department: "Operations" },
  { firstName: 'Sarah', lastName: 'Uche', email: 'sarah@testmail.com', phoneNo: '08149477757', userRole: 'User', department: "Administratives" },

]

export default function Table() {
  const [openAction, setOpenAction] = useState(false)
  const [openCardDetails, setOpenCardDetails] = useState(false)
  const [openSlide, setOpenSlide] = useState(false)
  const [deleteCard, setDeleteCard] = useState(false)
  const [addNewCard, setAddNewCard] = useState(false)
  const [deleteByCategory, setDeleteByCategory] = useState(false)

  return (
    <div className="px-4 sm:px-6 lg:px-8 min-h-[90vh]" onClick={()=>setOpenAction(null)}>
      <div className="sm:flex flex-col gap-3 lg:flex-row">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">All Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, departments, email and role.
          </p>
        </div>
        <div className="mt-4  sm:mt-0 flex md:items-center gap-2">
          <button
          onClick={()=>setAddNewCard(true)}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add New User
          </button>
          <button
          onClick={()=>setDeleteByCategory(true)}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Blacklist by Category
          </button>
          <button
            onClick={()=>{setOpenSlide(true)}}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Blacklist by Email
          </button>
        </div>
      </div>

        <SlideOver open={openSlide} setOpen={setOpenSlide} />
        <CardDetailsSlide open={openCardDetails} setOpen={setOpenCardDetails} />
        <DeleteDialogue open={deleteCard} setOpen={setDeleteCard} />
        <AddNewUserSlide open={addNewCard} setOpen={setAddNewCard} />
        <RemoveByCategorySlide open={deleteByCategory} setOpen={setDeleteByCategory} />

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300 overflow-x-scroll">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    First Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Last Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Phone No
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    User Role
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Department
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {people.map((person, index) => (
                  <tr key={person.email} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {person.firstName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.lastName}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.phoneNo}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.userRole}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.department}</td>
                    <td onClick={(e)=>{e.stopPropagation(); setOpenAction(index)}} className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                      <p className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span className="sr-only">, {person.cardNo}</span>
                      </p>
                      {openAction === index && 
                            <div className= "w-24 bg-slate-100 text-black z-20 rounded-md shadow-md absolute right-0">
                              <ul className="flex flex-col gap-1 w-full text-sm items-start bg-none py-1">
                                <li onClick={(e)=>{e.stopPropagation(); setOpenCardDetails(true); setOpenAction(null)}} className="cursor-pointer p-1 px-2 hover:bg-slate-200 hover:rounded-md w-full text-start">View</li>
                                <li onClick={(e)=>{e.stopPropagation(); setOpenCardDetails(true); setOpenAction(null)}} className="cursor-pointer p-1 px-2 hover:bg-slate-200 hover:rounded-md w-full text-start">Edit</li>
                                <li onClick={(e)=>{e.stopPropagation(); setOpenAction(null); setDeleteCard(true)}} className="cursor-pointer p-1 px-2 hover:bg-slate-200 hover:rounded-md w-full text-start">Delete</li>
                              </ul>
                            </div>
                            }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
