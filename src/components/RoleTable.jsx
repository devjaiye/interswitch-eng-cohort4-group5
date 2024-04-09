import { useEffect, useState } from "react"
import SlideOver from "./SlideOver"
import CardDetailsSlide from "./CardDetailsSlide"
import DeleteDialogue from "./DeleteDialogue"
import RemoveByCategorySlide from "./RemoveByCategorySlide"
import RoleFormSlide from "./RoleFormSlide"
import { toast, Toaster } from "sonner"
import {useQuery, useQueryClient} from "@tanstack/react-query"
import { deleteRole, getAllRoles, getSignleRole } from "../services/api-calls"


export default function RoleTable() {
  const [openAction, setOpenAction] = useState()
  const [openSlide, setOpenSlide] = useState(false)
  const [openCardDetails, setOpenCardDetails] = useState(false)
  const [deleteCard, setDeleteCard] = useState(false)
  const [removeByCategory, setRemoveByCategory] = useState(false)
  const [roleId, setRoleId] = useState()
  const [loading, setLoading] = useState(false)
  const [openForm, setOpenForm] = useState('')
  const queryClient = useQueryClient()

  const {data, isLoading} = useQuery({
    queryKey: ["GetAllRoles"], 
    queryFn: () => getAllRoles()
  })

  const {data: roleDetails, refetch: fetchSingleRole} = useQuery({
    queryKey: ["GetSingleRole"], 
    queryFn: () => getSignleRole(roleId),
  })

  useEffect(()=>{
    fetchSingleRole();
  }, [roleId, fetchSingleRole])

  const deleteSingleRole = async () => {
    setLoading(true)
    const response = await deleteRole(roleId)
    console.log(response)
    if(response.successMessage){
      toast.success("Role delete successfully!")
    }else{
      toast.error("Couldn't delete role!")
    }
    setLoading(false)
    queryClient.invalidateQueries('GetAllRoles');
  }

  const getRoleDetails = async (id) => {
    const response = await getSignleRole(id)
  }

  useEffect(()=>{
    if(loading){
      toast.loading('Deleteing...', {duration: 2000})
    }
  }, [loading])

  if(isLoading){
    return (
      <div className="flex justify-center mt-14">
        <p>Loading...</p>
      </div>
    )
  }

  if(data) return (
    <div className="bg-gray-900 min-h-[90vh]" onClick={()=>setOpenAction(null)}>
      <Toaster position="top-right" richColors />
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 h-full py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">Roles</h1>
                <p className="mt-2 text-sm text-gray-300">
                  A list of all the roles.
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 flex items-center gap-2">
                
                <button
                  onClick={()=>{setOpenSlide(true)}}
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Create Role
                </button>
                <RoleFormSlide open={openSlide} setOpen={setOpenSlide} openForm={openForm} data={roleDetails} id={roleId} openType="role"/>
                <CardDetailsSlide open={openCardDetails} setOpen={setOpenCardDetails} data={roleDetails} />
                <DeleteDialogue open={deleteCard} setOpen={setDeleteCard} deleteFn={deleteSingleRole} id={roleId} actionFor="role"/>
                <RemoveByCategorySlide open={removeByCategory} setOpen={setRemoveByCategory} />

              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full">
                  <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-200 sm:pl-3">
                    Role Name
                  </th>

                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-200 sm:pl-3">
                    Role Department
                  </th>

                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-200 sm:pl-3">
                    Role Description
                  </th>
                  
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">
                    Action
                  </th>
                </tr>
              </thead>
                    <tbody className="">
                      {data.map((role, index) => (
                        <tr key={role.id}>
                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-300 sm:pl-3">
                            {role.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{role.department}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{role.roleDescription}</td>
                          <td onClick={(e)=>{e.stopPropagation(); setOpenAction(index)}} className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <p className="text-indigo-400 cursor-pointer hover:text-indigo-300" onClick={()=> setRoleId(role.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                              <span className="sr-only"> {role.id}</span>
                            </p>
                            
                            {openAction === index && 
                            <div className= "w-24 bg-slate-100 text-black z-20 rounded-md shadow-md absolute right-0">
                              <ul className="flex flex-col gap-1 w-full text-sm items-start bg-none py-1">
                                <li onClick={(e)=>{e.stopPropagation(); setOpenCardDetails(true); setOpenAction(null); fetchSingleRole()}} className="cursor-pointer p-1 px-2 hover:bg-slate-200 hover:rounded-md w-full text-start">View</li>
                                <li onClick={(e)=>{e.stopPropagation(); setOpenAction(null); setRoleId(role.id); setDeleteCard(true)}} className="cursor-pointer p-1 px-2 hover:bg-slate-200 hover:rounded-md w-full text-start">Delete</li>
                                <li onClick={(e)=>{e.stopPropagation(); setOpenAction(null); fetchSingleRole(); setOpenForm('edit'); setOpenSlide(true)}} className="cursor-pointer p-1 px-2 hover:bg-slate-200 hover:rounded-md w-full text-start">Edit</li>
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
