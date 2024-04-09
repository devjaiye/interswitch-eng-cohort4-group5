import { useEffect, useState } from "react"
import CardDetailsSlide from "./CardDetailsSlide"
import DeleteDialogue from "./DeleteDialogue"
import RemoveByCategorySlide from "./RemoveByCategorySlide"
import RoleFormSlide from "./RoleFormSlide"
import { toast, Toaster } from "sonner"
import { useQuery } from "@tanstack/react-query"
import { deletePermission, getAllPermissions, getSinglePermission } from "../services/api-calls"


export default function PermissionsTable() {
  const [openAction, setOpenAction] = useState()
  const [openSlide, setOpenSlide] = useState(false)
  const [openCardDetails, setOpenCardDetails] = useState(false)
  const [deleteCard, setDeleteCard] = useState(false)
  const [removeByCategory, setRemoveByCategory] = useState(false)
  const [permissionId, setPermissionId] = useState()
  const [loading, setLoading] = useState(false)
  const [openForm, setOpenForm] = useState('')

  const {data, isLoading} = useQuery({
    queryKey: ["GetAllPermissions"], 
    queryFn: () => getAllPermissions()
  })

  const {data: permissionDetails, refetch: fetchSinglePermission} = useQuery({
    queryKey: ["GetSinglePermission"], 
    queryFn: () => getSinglePermission(permissionId),
  })

  useEffect(()=>{
    fetchSinglePermission();
    console.log('Triggered')
  }, [permissionId, fetchSinglePermission])

  const deleteSinglePermission = async (id) => {
    setLoading(true)
    const response = await deletePermission(id)
    if(response){
      toast.success("Permission deleted successfully!")
    }else{
      toast.error("Couldn't delete permission!")
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(loading){
    toast.loading('Deleteing...')
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
                <h1 className="text-base font-semibold leading-6 text-white">Permissions</h1>
                <p className="mt-2 text-sm text-gray-300">
                  A list of all the roles.
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 flex items-center gap-2">
                
                <button
                  onClick={()=>{setOpenSlide(true); setOpenForm('permission')}}
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Create Permission
                </button>
                <RoleFormSlide open={openSlide} setOpen={setOpenSlide} openForm={openForm} data={permissionDetails} id={permissionId} />
                <CardDetailsSlide open={openCardDetails} setOpen={setOpenCardDetails} data={permissionDetails} tab={'permission'} />
                <DeleteDialogue open={deleteCard} setOpen={setDeleteCard} deleteFn={deleteSinglePermission} id={permissionId}/>
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
                    Permissions Name
                  </th>

                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-200 sm:pl-3">
                    Permissions Description
                  </th>
                  
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">
                    Action
                  </th>
                </tr>
              </thead>
                    <tbody className="">
                      {data.map((permission, index) => (
                        <tr key={permission.id}>
                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-300 sm:pl-3">
                            {permission.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{permission.description}</td>
                          <td onClick={(e)=>{e.stopPropagation(); setOpenAction(index)}} className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <p className="text-indigo-400 cursor-pointer hover:text-indigo-300" onClick={()=> setPermissionId(permission.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                              <span className="sr-only"> {permission.id}</span>
                            </p>
                            
                            {openAction === index && 
                            <div className= "w-24 bg-slate-100 text-black z-20 rounded-md shadow-md absolute right-0">
                              <ul className="flex flex-col gap-1 w-full text-sm items-start bg-none py-1">
                                <li onClick={(e)=>{e.stopPropagation(); setOpenCardDetails(true); setOpenAction(null); fetchSinglePermission()}} className="cursor-pointer p-1 px-2 hover:bg-slate-200 hover:rounded-md w-full text-start">View</li>
                                <li onClick={(e)=>{e.stopPropagation(); setOpenAction(null); setPermissionId(permission.id); setDeleteCard(true)}} className="cursor-pointer p-1 px-2 hover:bg-slate-200 hover:rounded-md w-full text-start">Delete</li>
                                <li onClick={(e)=>{e.stopPropagation(); setOpenAction(null); fetchSinglePermission(); setOpenForm('edit'); setOpenSlide(true)}} className="cursor-pointer p-1 px-2 hover:bg-slate-200 hover:rounded-md w-full text-start">Edit</li>
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
