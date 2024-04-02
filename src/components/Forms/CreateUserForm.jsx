// CreateUserForm.js
function CreateUserForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-[200px]">
      <div>
        <label htmlFor="email" className="block">Email:</label>
        <input type="email" name="email" required className="border-2 rounded px-2 py-1"/>
      </div>
      <div>
        <label htmlFor="firstName" className="block">First Name:</label>
        <input type="text" name="firstName" required className="border-2 rounded px-2 py-1"/>
      </div>
      <div>
        <label htmlFor="lastName" className="block">Last Name:</label>
        <input type="text" name="lastName" required className="border-2 rounded px-2 py-1"/>
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block">Phone Number:</label>
        <input type="number" name="phoneNumber" required className="border-2 rounded px-2 py-1"/>
      </div>
      <div>
        <label htmlFor="role" className="block">Role:</label>
        <select name="role" required className="border-2 rounded px-2 py-1">
          <option value="ROLE_USER_ADMIN">User Admin</option>
          <option value="ROLE_BLACKLIST_ADMIN">Blacklist Admin</option>
        </select>

      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create User</button>
    </form>
  );
}

export default CreateUserForm;
