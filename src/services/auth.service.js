import axios from "axios";
const API_URL = "https://olaniyi.bsite.net/api/account/";
const userId = localStorage.getItem("userId") | "";
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
			}).catch((e) => {
				alert(e)
			});
	}

	logout() {
		localStorage.removeItem("user");
	}

	changePassword(newPassword, currentPassword) {
		return axios.post(API_URL + `change-password/${{userId}}`, {
			currentPassword,
			newPassword
			},
			{
				headers: {
					language: "en"
				}
			}
			).catch((e) => {
				alert(e)
		});
	}

	getCurrentUser() {
		return JSON.parse(localStorage.getItem('user'));
	}
}

export default new AuthService();