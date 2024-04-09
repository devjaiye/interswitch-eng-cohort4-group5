import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { editRole, editPermission } from '../services/api-calls'
import { toast } from 'sonner'
import { useQueryClient } from '@tanstack/react-query'

const RoleEditForm = ({data, openType}) => {
  const [loading, setLoading] = useState(false)
  const {register, handleSubmit, reset, control} = useForm()
  const queryClient = useQueryClient()

  const onsubmit = async (input) => {
      input.id = data.id;
    setLoading(true)
      if (openType === "role"){
          const submit = await editRole(data.id, input)
          if(submit && submit.successMessage){
              toast.success(submit.successMessage)
          }else{
              toast.error('Edit role was unsuccessful!')
          }
          reset()
          setLoading(false)
          queryClient.invalidateQueries('GetAllRoles');
      }
      else {
          const submit = await editPermission(data.id, input)
          if(submit && submit.successMessage){
              toast.success(submit.successMessage)
          }else{
              toast.error('Edit Role was unsuccessful!')
          }
          reset()
          setLoading(false)
          queryClient.invalidateQueries('GetAllPermissions');
      }

  }
  if(!data)toast.loading("Loading...", {duration: 1000})

  if(data) return (
    <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-3'>
      <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          {openType === "role" ? "Role name" : "Permission name"}
      </label>
      <div className="mt-2">
        <input
          {...register("name")}
          defaultValue={data.name}
          type="text"
          name="name"
          id="name"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={openType === "role" ? "Enter role name" : "Enter permission name"}
        />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          {openType === "role" ? "Role description" : "Permission description"}
      </label>
      <div className="mt-2">
          {
              openType === "role" ? <textarea
                  {...register("roleDescription")}
                  defaultValue={data.roleDescription}
                  type="text"
                  name="roleDescription"
                  id="roleDescription"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder={openType === "role" ? "Enter role description" : "Enter permission description"}
              /> : <textarea
                  {...register("description")}
                  defaultValue={data.description}
                  type="text"
                  name="description"
                  id="description"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder={openType === "role" ? "Enter role description" : "Enter permission description"}
              />
          }

      </div>
    </div>

        <div className='w-full'>
            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                Select Department
            </label>
            <Controller
                name="department"
                control={control}
                defaultValue={data.department}
                render={({field}) => (
                    <select
                        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6" {...field}>
            <option value="Administratives"> Administratives</option>
            <option value="Operations">Operations</option>
            <option value="Technology">Technology</option>
          </select>
        )}
      />
    </div>


    <button type='submit' disabled={loading} className='bg-blue-500 text-white py-3 rounded-full'>{loading ? "Loading..." : openType === "role" ? "Update role" : "Update permission"}</button>

    </form>
  )
}

export default RoleEditForm
