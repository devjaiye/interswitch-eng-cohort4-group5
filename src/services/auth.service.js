import axios from "axios";
// import {useNavigate} from "react-router-dom";

const API_URL = "https://olaniyi.bsite.net/api/account/";
// const navigate = useNavigate()
class AuthService {
	login(email, password) {
		return axios.post(API_URL + "login", {
				email,
				password
			},
			{
				headers: {
					language: "en"
				}
			})
			.then(response => {
				console.log(response)
				if (response.data.data.token) {
					console.log(response)
					localStorage.setItem("user", JSON.stringify(response.data));
					// navigate("/app/dashboard");
				}
				return response.data;
			});
	}

	logout() {
		localStorage.removeItem("user");
	}

	register(username, email, password) {
		return axios.post(API_URL + "signup", {
			username,
			email,
			password
		});
	}

	getCurrentUser() {
		return JSON.parse(localStorage.getItem('user'));
	}
}

export default new AuthService();