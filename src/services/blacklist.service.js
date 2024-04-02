import axios from "axios";

const API_URL = "https://olaniyi.bsite.net/swagger/v1/swagger.json/api/blacklist/";

class AuthService {
	blacklistUserCategory(category, reason, email, blacklistedAt, blacklistedById, isActive) {
		return axios.post(API_URL + "blacklist-user-category", {
				email,
				category,
				reason,
				blacklistedAt,
				blacklistedById,
				isActive
			})
			.then(response => {
				if (response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}
				return response.data;
			});
	}

	blacklistUserEmail(reason, email) {
		return axios.post(API_URL + "blacklist-user-category", {
			email,
			reason,
		})
			.then(response => {
				if (response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}
				return response.data;
			});
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