
import { createUser } from '../../services/createUser';
const CreateUserForm = ()=> {
    
  const handleSubmit =  async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);

    const phoneNumber = userData.phoneNumber.trim(); 
    if (!/^\d{1,11}$/.test(phoneNumber)) {
      alert("Phone number should contain only digits and not exceed 11 characters.");
      return; 
    }
      const apiUserData = {
        ...userData,
        role: [{roleName: userData.role}]

      }
      try {
        await createUser(apiUserData);
        alert("User created successfully");

      } 

      catch (error){
        console.error(error);
        alert("Failed to create user. Please try again")
      }
    
  };

  return (
    <div className=" text-gray-600">
      <h2 className="mb-5 font-serif text-2xl text-gray-700">Enter User Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input type="email" name="email" placeholder="email address" required className="border-2 rounded px-2 py-1"/>
        </div>
        <div>
          <input type="text" name="firstName" placeholder="first name" required className="border-2 rounded px-2 py-1"/>
        </div>
        <div>
          <input type="text" name="lastName" required placeholder="last name" className="border-2 rounded px-2 py-1"/>
        </div>
        <div>
          <input type="text" name="phoneNumber" placeholder="phone number" required className="border-2 rounded px-2 py-1"/>
        </div>
        <div>
          <select name="role" required className="border-2 rounded px-2 py-1">
            <option value="ROLE_USER_ADMIN">User Admin</option>
            <option value="ROLE_BLACKLIST_ADMIN">Blacklist Admin</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create User</button>
      </form>
    </div>
  );
}

export default CreateUserForm;

