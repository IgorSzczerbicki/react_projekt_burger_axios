import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://react-projekt-burger.firebaseio.com/'
});

export default instance;