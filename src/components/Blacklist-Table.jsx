import { useState } from "react"
import SlideOver from "./SlideOver"
import CardDetailsSlide from "./CardDetailsSlide"
import DeleteDialogue from "./DeleteDialogue"
import RemoveByCategorySlide from "./RemoveByCategorySlide"
import { useQuery } from "@tanstack/react-query"
import { getAllBlacklist } from "../services/api-calls"

// const people = [
//   { firstName: 'Daniel', lastName: 'AdeKunle', email: 'daniel@testmail.com', phoneNo: '081400949832', userRole: 'Admin', department: "Technologies" },
//   { firstName: 'Joy', lastName: 'Obi', email: 'joy@testmail.com', phoneNo: '080900949855', userRole: 'User', department: "Operations" },
//   { firstName: 'Sarah', lastName: 'Uche', email: 'sarah@testmail.com', phoneNo: '08149477757', userRole: 'User', department: "Administratives" },

// ]

export default function BlacklistTable() {
  const [openAction, setOpenAction] = useState()
  const [openSlide, setOpenSlide] = useState(false)
  const [openCardDetails, setOpenCardDetails] = useState(false)
  const [deleteCard, setDeleteCard] = useState(false)
  const [removeByCategory, setRemoveByCategory] = useState(false)

  const {data:people, isLoading} = useQuery({
    queryKey: ["GetAllBlacklist"], 
    queryFn: () => getAllBlacklist()
  })

  if(isLoading){
    return (
      <div className="flex justify-center mt-14">
        <p>Loading...</p>
      </div>
    )
  }
  
 if(people) return (
    <div className="bg-gray-900 min-h-[90vh]" onClick={()=>setOpenAction(null)}>
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-100 h-full py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-black">Black List</h1>
                <p className="mt-2 text-sm text-black">
                  A list of all the users in your account including their name, title, email and role.
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 flex items-center gap-2">
                
                <button
                  onClick={()=>{setOpenSlide(true)}}
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-black hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Remove by Email
                </button>
                <button
                  onClick={()=>{setRemoveByCategory(true)}}
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-black hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Remove by Category
                </button>
                <SlideOver open={openSlide} setOpen={setOpenSlide} />
                <CardDetailsSlide open={openCardDetails} setOpen={setOpenCardDetails} />
                <DeleteDialogue open={deleteCard} setOpen={setDeleteCard} />
                <RemoveByCategorySlide open={removeByCategory} setOpen={setRemoveByCategory} />

              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full">
                  <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-3">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                    Department
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                    Reason
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                    Action
                  </th>
                </tr>
              </thead>
                    <tbody className="">
                      {people.map((person, index) => (
                        <tr key={person.email}>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{person.email}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{person.category}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{person.reason}</td>
                          <td onClick={(e)=>{e.stopPropagation(); setOpenAction(index)}} className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <p className="text-indigo-400 cursor-pointer hover:text-indigo-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                              <span className="sr-only"> {person.cardNo}</span>
                            </p>
                            
                            {openAction === index && 
                            <div className= "w-24 bg-slate-100 text-black z-20 rounded-md shadow-md absolute right-0">
                              <ul className="flex flex-col gap-1 w-full text-sm items-start bg-none py-1">
                                <li onClick={(e)=>{e.stopPropagation(); setOpenCardDetails(true); setOpenAction(null)}} className="cursor-pointer p-1 px-2 hover:bg-slate-200 hover:rounded-md w-full text-start">View</li>
                                <li onClick={(e)=>{e.stopPropagation(); setOpenAction(null); setOpenSlide(true)}} className="cursor-pointer p-1 px-2 hover:bg-slate-200 hover:rounded-md w-full text-start">Remove</li>
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
        </div>
      </div>
    </div>
  )
}
