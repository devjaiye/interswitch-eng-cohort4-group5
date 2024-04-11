import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select';
import { createUser, getAllRoles } from '../services/api-calls';
import { toast } from 'sonner';

const AddNewUser = () => {
  const [loading, setLoading] = useState()
  const {register, handleSubmit, reset, control} = useForm()
  const queryClient = useQueryClient()

  const {data} = useQuery({
    queryKey: ["GetAllRoles"], 
    queryFn: () => getAllRoles()
  })

  

  const onSubmit = async (input)=>{
    setLoading(true)
    const roles = input.role.map((sel) => {return {roleName: sel.label}})
    const myData = {
      email: input.email,
      firstName: input.firstName,
      lastName: input.lastName,
      department: input.department.label,
      phoneNumber: input.phoneNumber,
      role: [
        ...roles
      ]
    }
    const submit = await createUser(myData)
    if(submit && submit.data.successMessage){
      toast.success(submit.data.successMessage)
    }else{
      toast.error('Create new user was unsuccessful!')
    }
    reset()
    setLoading(false)
    queryClient.invalidateQueries('GetAllUsers');
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
      <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        First Name
      </label>
      <div className="mt-2">
        <input
        {...register('firstName')}
          type="text"
          name="firstName"
          id="firstName"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter first name"
        />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Last Name
      </label>
      <div className="mt-2">
        <input
        {...register('lastName')}
          type="text"
          name="lastName"
          id="lastName"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter last name"
        />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Email
      </label>
      <div className="mt-2">
        <input
        {...register('email')}
          type="email"
          name="email"
          id="email"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter email"
        />
      </div>
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Phone No
      </label>
      <div className="mt-2">
        <input
        {...register('phoneNumber', {
          required: true,
          pattern: /^[0-9]{1,11}$/
        })}
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter phone number"
        />
      </div>
    </div>

    <div className='w-full'>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        Select Role
      </label>
      <Controller
        name="role"
        control={control}
        defaultValue={[]}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            {...field}
            options={data && data.map(role => ({ value: role.id, label: role.name }))}
            isMulti
            onChange={selectedOptions => {
              console.log('multi select: ', selectedOptions)
              field.onChange(selectedOptions); // Pass the selected options directly
            }}
          />
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
        defaultValue='Administratives'
        rules={{ required: true }}
        render={({ field }) => (
          <Select
          className='text-gray-900'
            {...field}
            options={[
              { value: "Administratives", label: "Administratives" },
              { value: "Operations", label: "Operations" },
              { value: "Technologies", label: "Technologies" }
            ]}
            
            onChange={(selectedOption) => {field.onChange(selectedOption); console.log('select: ', selectedOption)}}
            
          />
        )}
      />
    </div>


    <button disabled={loading} type='submit' className='bg-blue-500 text-white py-3 rounded-full'>{loading ? 'Loading...' : 'Create User'}</button>

    </form>
  )
}

export default AddNewUser
