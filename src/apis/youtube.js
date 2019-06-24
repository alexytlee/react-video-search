import axios from 'axios';

const KEY = 'AIzaSyD2PYNC69mjwNMLVHMW3K2iFbM-dBCe_OA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
