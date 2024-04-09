import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createPermission, } from '../services/api-calls'
import { toast } from 'sonner'
import { useQueryClient } from '@tanstack/react-query'

const PermissionForm = () => {
  const [loading, setLoading] = useState(false)
  const {register, handleSubmit, reset} = useForm()
  const queryClient = useQueryClient()

  const onsubmit = async (input) => {
    setLoading(true)
    const submit = await createPermission(input)
    if(submit && submit.data.successMessage){
      toast.success(submit.data.successMessage)
    }else{
      toast.error('Create new permission was unsuccessful!')
    }
    reset()
    setLoading(false)
    queryClient.invalidateQueries('GetAllRoles');
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-3'>
      <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Permission Name
      </label>
      <div className="mt-2">
        <input
          {...register("name")}
          type="text"
          name="name"
          id="name"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter permission name"
        />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Permission Description
      </label>
      <div className="mt-2">
        <textarea
          {...register("description")}
          type="text"
          name="description"
          id="description"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter permission description"
        />
      </div>
    </div>


    <button type='submit' disabled={loading} className='bg-blue-500 text-white py-3 rounded-full'>{loading ? "Loading..." : 'Create Permision'}</button>

    </form>
  )
}

export default PermissionForm
