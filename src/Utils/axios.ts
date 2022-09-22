/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from 'axios';
import { getAccessToken } from './token-config';

const axiosConfig = axios.create({
	baseURL: "https://k69gstcamh.execute-api.ap-southeast-1.amazonaws.com/Prod/api",
	headers: {
		'content-type': 'application/json',
	},
});
axiosConfig.interceptors.request.use(async (config) => {
	if (getAccessToken()) {
		config.headers!.token = `${getAccessToken() as string}`;
	}
	return config;
});
axiosConfig.interceptors.response.use(async (response) => {	
	return response;
}, (error) => {
	if (error.response) {
		throw (error.response.data);
	}
	throw (error);
});
export default axiosConfig;
