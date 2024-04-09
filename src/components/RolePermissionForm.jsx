import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { createRole } from '../services/api-calls'
import { toast } from 'sonner'
import { useQueryClient } from '@tanstack/react-query'

const RolePermissionForm = () => {
  const [loading, setLoading] = useState(false)
  const {register, handleSubmit, reset, control} = useForm()
  const queryClient = useQueryClient()

  const onsubmit = async (input) => {
    setLoading(true)
    const submit = await createRole(input)
    if(submit && submit.data.successMessage){
      toast.success(submit.data.successMessage)
    }else{
      toast.error('Create new role was unsuccessful!')
    }
    reset()
    setLoading(false)
    queryClient.invalidateQueries('GetAllRoles');
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-3'>
      <div className='w-full'>
        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
            Select Department
          </label>
        <Controller
            name="department"
            control={control}
            defaultValue="Administratives" 
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

    <div className='w-full'>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        Select Department
      </label>
      <Controller
        name="department"
        control={control}
        defaultValue={["Administratives"]} // Set default value as an array for multiple selection
        rules={{ required: true }}
        render={({ field }) => (
          <select
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...field}
            multiple // Allow multiple selection
          >
            <option value="Administratives">Administratives</option>
            <option value="Operations">Operations</option>
            <option value="Technology">Technology</option>
          </select>
        )}
      />
    </div>


    <button type='submit' disabled={loading} className='bg-blue-500 text-white py-3 rounded-full'>{loading ? "Loading..." : 'Create Role'}</button>

    </form>
  )
}

export default RolePermissionForm
