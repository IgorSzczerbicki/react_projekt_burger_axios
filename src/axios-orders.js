import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://react-projekt-burger.firebaseio.com/'
});

instance.defaults.headers.common['Access-Control-Allow-Origin'] =  '*';
instance.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET';

export default instance;