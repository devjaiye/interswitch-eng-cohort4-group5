import { useEffect, useState } from "react"
import DeleteDialogue from "./DeleteDialogue"
import AddNewUserSlide from "./AddNewUserSlide"
import UserDetailsSlide from "./UserDetailsSlide"
import { deleteUser, getAllUsers, getSingleUser } from "../services/api-calls"
import { useQuery } from "@tanstack/react-query"
import { Toaster } from "sonner"
import AddToBlacklist from "./AddToBlacklist"


export default function Table() {
  const [openAction, setOpenAction] = useState()
  const [openSlide, setOpenSlide] = useState(false)
  const [openCardDetails, setOpenCardDetails] = useState(false)
  const [deleteCard, setDeleteCard] = useState(false)
  const [userId, setUserId] = useState()
  const [userEmail, setUserEmail] = useState()
  const [slide, setSlide] = useState('category')
  const [categoryBlacklist, setCategoryBlacklist] = useState(false)

  const {data: allUsers, isLoading} = useQuery({
    queryKey: ["GetAllUsers"], 
    queryFn: () => getAllUsers()
  })

  const people = allUsers.filter((user) => !user.isBlacklisted)

  const {data: userDetails, refetch: fetchSingleUser} = useQuery({
    queryKey: ["GetSingleUser"], 
    queryFn: () => getSingleUser(userId),
  })

  const {refetch: deleteSingleUser} = useQuery({
    queryKey: ["DeleteSingleUser"], 
    queryFn: () => deleteUser(userEmail),
  })

  useEffect(()=>{
    fetchSingleUser();
    console.log('Triggered')
  }, [userId, fetchSingleUser])

  if(isLoading){
    return (
      <div className="flex justify-center mt-14">
        <p>Loading...</p>
      </div>
    )
  }
  
  if(allUsers) return (
    <div className="bg-gray-900 min-h-[90vh]" onClick={()=>setOpenAction(null)}>
      <Toaster richColors position="top-right" />
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 h-full py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">Users Table</h1>
                <p className="mt-2 text-sm text-gray-300">
                  A list of all the users in your account including their name, title, email and role.
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 flex items-center gap-2">
                
              <div className="mt-4  sm:mt-0 flex md:items-center gap-2">
              <button
                  onClick={()=>{setOpenSlide(true)}}
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Create New User
                </button>
          <button
          onClick={()=>{setCategoryBlacklist(true); setSlide('category')}}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Blacklist by Category
          </button>
          <button
            onClick={()=>{setCategoryBlacklist(true); setSlide('email')}}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Blacklist by Email
          </button>
        </div>
                {/* <CardDetailsSlide open={openCardDetails} setOpen={setOpenCardDetails} data={userDetails} /> */}
                <UserDetailsSlide open={openCardDetails} setOpen={setOpenCardDetails} data={userDetails} />
                <DeleteDialogue open={deleteCard} setOpen={setDeleteCard} deleteFn2={deleteSingleUser} />
                <AddNewUserSlide open={openSlide} setOpen={setOpenSlide}/>
                <AddToBlacklist open={categoryBlacklist} setOpen={setCategoryBlacklist} slide={slide} />

              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                          First Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                         Last Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Email
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Phone No
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          User Role
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Action
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {people.map((person, index) => (
                        <tr key={person.id}>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{person.firstName}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{person.lastName}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{person.email}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{person.phoneNumber}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{person.userRoles.map((role, index) =>{
                            return (
                              <span className="mr-1" key={index}>{role.roleName}</span>
                            )
                          })}</td>
                          <td onClick={(e)=>{e.stopPropagation(); setOpenAction(index); setUserId(person.id); setUserEmail(person.email)}} className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <p className="text-indigo-400 cursor-pointer hover:text-indigo-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                              <span className="sr-only"> {person.cardNo}</span>
                            </p>
                            
                            {openAction === index && 
                            <div className= "w-24 bg-slate-100 text-black z-20 rounded-md shadow-md absolute right-0">
                              <ul className="flex flex-col gap-1 w-full text-sm items-start bg-none py-1">
                                <li onClick={(e)=>{e.stopPropagation(); setOpenCardDetails(true); setOpenAction(null); fetchSingleUser()}} className="cursor-pointer p-1 px-2 hover:bg-slate-200 hover:rounded-md w-full text-start">View</li>
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
        </div>
      </div>
    </div>
  )
}
