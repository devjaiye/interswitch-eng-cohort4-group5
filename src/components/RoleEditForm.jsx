import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { editRole } from '../services/api-calls'
import { toast } from 'sonner'
import { useQueryClient } from '@tanstack/react-query'

const RoleEditForm = ({data}) => {
  const [loading, setLoading] = useState(false)
  const {register, handleSubmit, reset, control} = useForm()
  const queryClient = useQueryClient()

  const onsubmit = async (input) => {
    setLoading(true)
    const submit = await editRole(data.id, input)
    if(submit && submit.data.successMessage){
      toast.success(submit.data.successMessage)
    }else{
      toast.error('Create new role was unsuccessful!')
    }
    reset()
    setLoading(false)
    queryClient.invalidateQueries('GetAllRoles');
  }
  if(!data)toast.loading("Loading...")

  if(data) return (
    <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-3'>
      <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Role Name
      </label>
      <div className="mt-2">
        <input
          {...register("name")}
          defaultValue={data.name}
          type="text"
          name="name"
          id="name"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter role name"
        />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Role Description
      </label>
      <div className="mt-2">
        <textarea
          {...register("roleDescription")}
          defaultValue={data.roleDescription}
          type="text"
          name="roleDescription"
          id="roleDescription"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter role description"
        />
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
        rules={{ required: true }}
        render={({ field }) => (
          <select className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6" {...field}>
            <option value="Administratives"> Administratives</option>
            <option value="Operations">Operations</option>
            <option value="Technology">Technology</option>
          </select>
        )}
      />
    </div>


    <button type='submit' disabled={loading} className='bg-blue-500 text-white py-3 rounded-full'>{loading ? "Loading..." : 'Update Role'}</button>

    </form>
  )
}

export default RoleEditForm
