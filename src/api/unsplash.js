import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: `Client-ID 7446b82693cf5bb8dbdaac4d26fb93c3f47187ba711ad00b3c8f66b7323a56aa`,
	},
});
