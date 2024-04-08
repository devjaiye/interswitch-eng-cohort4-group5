import axios from "axios";

export const createUser = async (input) =>{
  const headers = {
    headers: {
    "Content-Type": "application/json",
    "language": "en"
    }
  }

  
  try {
    const response = await axios.post(
      "https://olaniyi.bsite.net/api/users/create-user",
      input,
      headers
    );

    if (response.status === 200) {
      console.log('User created successfully');
      return response.data;
    }
  } catch (error) {
    console.error("An error occurred during user creation:", error.response || error);
    throw error;
  }
}


