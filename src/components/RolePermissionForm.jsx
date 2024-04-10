import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { assignROlePermissions, createRole, getAllPermissions, getAllRolePermission } from '../services/api-calls'
import { toast } from 'sonner'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Select from 'react-select';

const RolePermissionForm = () => {
  const [loading, setLoading] = useState(false)
  const {register, handleSubmit, reset, control} = useForm()
  const queryClient = useQueryClient()

  const {data: allRole} = useQuery({
    queryKey: ["GetAllRolePermissions"], 
    queryFn: () => getAllRolePermission()
  })

  const {data: allPermissions} = useQuery({
    queryKey: ["GetAllPermissions"], 
    queryFn: () => getAllPermissions()
  })

  const onsubmit = async (input) => {
    setLoading(true)
    const myData = {
      roleId: input.roleId,
      permissionIds: [...input.permissions]
    }
    const submit = await assignROlePermissions(myData)
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
        Select Role Id
      </label>
      <Controller
        name="roleId"
        control={control}
        defaultValue=''
        rules={{ required: true }}
        render={({ field }) => (
          <Select
          className='text-gray-900'
            {...field}
            options={allRole && allRole.map((user) => ({value: user.roleId, label: user.roleId}) )}
            
            onChange={(selectedOption) => {field.onChange(selectedOption); console.log('select: ', selectedOption)}}
            
          />
        )}
      />
    </div>
{/* 
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
    </div> */}

<div className='w-full'>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        Select Permissions
      </label>
      <Controller
        name="permissions"
        control={control}
        defaultValue={[]}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            {...field}
            options={allPermissions && allPermissions.map(role => ({ value: role.id, label: role.name }))}
            isMulti
            onChange={selectedOptions => {
              console.log('multi select: ', selectedOptions)
              field.onChange(selectedOptions); // Pass the selected options directly
            }}
          />
        )}
      />
    </div>


    <button type='submit' disabled={loading} className='bg-blue-500 text-white py-3 rounded-full'>{loading ? "Loading..." : 'Assign Permissions'}</button>

    </form>
  )
}

export default RolePermissionForm
