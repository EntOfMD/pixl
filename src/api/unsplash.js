import axios from 'axios';
import { unsplashKey } from '../config/dev.json';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: `Client-ID ${unsplashKey}`,
	},
});
