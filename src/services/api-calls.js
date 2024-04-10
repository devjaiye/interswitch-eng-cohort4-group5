import axios from "axios"

// export const createUser = async (input) =>{
//   const user = (JSON.parse(localStorage.getItem("user"))).data;
//   const token = user.token.token
//   const headers = {
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       language: "en"
//     }
//   }
//   const response = await axios.post("https://olaniyi.bsite.net/api/users/create-user", input, headers);

//   if(response.status){
//     console.log('User created successfully')
//   }
// }

export const createRole = async (input) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      language: "en"
    }
  }
  const response = await axios.post("https://olaniyi.bsite.net/api/roles/create-role", input, headers);
  if(response.status === 200){
    return response
  }else{
    console.log("Create new role was unsuccessful")
  }
}

export const getAllRoles = async () =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'language': "en"
    }
  }
  const response = await axios.get("https://olaniyi.bsite.net/api/roles/view-role", headers);
  if(response.status === 200){
    return response.data.data
  }else{
    console.log("All roles err: ", response)
  }
}

export const deleteRole = async (id) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'language': "en"
    }
  }
  const response = await axios.post(`https://olaniyi.bsite.net/api/roles/delete-role?id=${id}`, headers);
  if(response.status === 200){
    return response.data.data
  }else{
    console.log("delete roles err: ", response)
  }
}

export const getSignleRole = async (id) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'language': "en"
    }
  }
  const response = await axios.get(`https://olaniyi.bsite.net/api/roles/view-role/${id}`, headers);
  if(response.status === 200){
    console.log('res: ', response)
    return response.data.data
  }else{
    console.log("delete roles err: ", response)
  }
}

export const editRole = async (id, input) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'language': "en"
    }
  }
  const response = await axios.post(`https://olaniyi.bsite.net/api/roles/update-role?id=${id}`, input, headers);
  if(response.status === 200){
    return response.data.data
  }else{
    console.log("edit roles err: ", response)
  }
}

export const getAllPermissions = async () =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'language': "en"
    }
  }
  const response = await axios.get("https://olaniyi.bsite.net/api/permission/get-all-permissions", headers);
  if(response.status === 200){
    return response.data.data
  }else{
    console.log("All permission err: ", response)
  }
}

export const getSinglePermission = async (id) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'language': "en"
    }
  }
  const response = await axios.get(`https://olaniyi.bsite.net/api/permission/get-permission/${id}`, headers);
  if(response.status === 200){
    return response.data.data
  }else{
    console.log("single permission  err: ", response)
  }
}

export const createPermission = async (input) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      language: "en"
    }
  }
  const response = await axios.post("https://olaniyi.bsite.net/api/permission/create-permission", input, headers);
  if(response.status === 200){
    return response
  }else{
    console.log("Create new role was unsuccessful")
  }
}

export const deletePermission = async (id) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'language': "en"
    }
  }
  const response = await axios.post(`https://olaniyi.bsite.net/api/permission/delete-permission?id=${id}`, headers);
  if(response.status === 200){
    return response.data.data
  }else{
    console.log("delete permission err: ", response)
  }
}

export const getAllRolePermission = async () =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'language': "en"
    }
  }
  const response = await axios.get("https://olaniyi.bsite.net/api/rolepermission/get-all-assigned-permissions", headers);
  if(response.status === 200){
    return response.data.data
  }else{
    console.log("All roles err: ", response)
  }
}

export const getAllUsers = async () =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'language': "en"
    }
  }
  const response = await axios.get("https://olaniyi.bsite.net/api/users/view-all-users", headers);
  if(response.status === 200){
    console.log('res all: ', response)
    return response.data.data
  }else{
    console.log("All roles err: ", response)
  }
}

export const getSingleUser = async (id) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'language': "en"
    }
  }
  const response = await axios.get(`https://olaniyi.bsite.net/api/users/view-users?userid=${id}`, headers);
  if(response.status === 200){
    console.log('res: ', response)
    return response.data.data
  }else{
    console.log("single permission  err: ", response)
  }
}

export const createUser = async (input) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      language: "en"
    }
  }
  const response = await axios.post("https://olaniyi.bsite.net/api/users/create-user", input, headers);
  if(response.status === 200){
    return response
  }else{
    console.log("Create user was unsuccessful")
  }
}

export const deleteUser = async (input) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      language: "en"
    }
  }
  const response = await axios.post(`https://olaniyi.bsite.net/api/users/delete-user-profile?email=${input}`, headers);
  if(response.status === 200){
    return response
  }else{
    console.log("delete user was unsuccessful")
  }
}

export const blacklistByCategory = async (input) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      language: "en"
    }
  }
  const response = await axios.post("https://olaniyi.bsite.net/api/blacklist/blacklist-user-category", input, headers);
  if(response.status === 200){
    return response
  }else{
    console.log("Create blacklist was unsuccessful")
  }
}

export const blacklistByEmail = async (input) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      language: "en"
    }
  }
  const response = await axios.post("https://olaniyi.bsite.net/api/blacklist/blacklist-user-email", input, headers);
  if(response.status === 200){
    return response
  }else{
    console.log("Create blacklist was unsuccessful")
  }
}

export const getAllBlacklist = async () =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      language: "en"
    }
  }
  const response = await axios.get("https://olaniyi.bsite.net/api/blacklist/read-all-blacklisted-user", headers);
  if(response.status === 200){
    return response.data.data
  }else{
    console.log("all blacklist was unsuccessful")
  }
}

export const removeFromBlacklistEmail = async (input) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      language: "en"
    }
  }
  const response = await axios.post(`https://olaniyi.bsite.net/api/blacklist/delete-blacklist-email?email=${input}`, headers);
  if(response.status === 200){
    return response.data.data
  }else{
    console.log("all blacklist was unsuccessful")
  }
}

export const removeFromBlacklistCategory = async (input) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      language: "en"
    }
  }
  const response = await axios.post("https://olaniyi.bsite.net/api/blacklist/delete-blacklist-category", input, headers);
  if(response.status === 200){
    return response
  }else{
    console.log("removed blacklist was unsuccessful")
  }
}

export const assignROlePermissions = async (input) =>{
  const user = (JSON.parse(localStorage.getItem("user"))).data;
  const token = user.token.token
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
      language: "en"
    }
  }
  const response = await axios.post("https://olaniyi.bsite.net/api/rolepermission/assign-permission", input, headers);
  if(response.status === 200){
    console.log('res: ', response)
    return response
  }else{
    console.log("permission assign was unsuccessful")
  }
}