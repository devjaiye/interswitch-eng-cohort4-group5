import axios from "axios";
const API_URL = "https://olaniyi.bsite.net/api/blacklist/";
let userDetails;
let token;

if (localStorage.getItem("user") === null && window.location.pathname !== "/"){
	window.location.href = '/'
}
else if (localStorage.getItem("user") !== null){
	userDetails = JSON.parse(localStorage.getItem("user"));
	token = userDetails.data.token.token;
}
class BlackListedService {
	blacklistUserCategory(category, reason, email, blacklistedAt, blacklistedById, isActive) {
		return axios.post(API_URL + "blacklist-user-category", {
				email,
				category,
				reason,
				blacklistedAt,
				blacklistedById,
				isActive
			},
			{
				headers:  {
					language:  "en",
					Authorization:  token,
					// authorization: token
				}
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

	readBlacklistedCategory() {
		return axios.post(API_URL + "blacklist-user-category", {},{
			headers:  {
				language:  "en",
				// "Authorization":  token,
				Authorization: "Bearer " + token
				// "authorization": token
			}

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

export default new BlackListedService();