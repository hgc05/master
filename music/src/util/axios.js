import axios from 'axios';

const instance =axios.create({
    baseURL: 'http://www.young1024.com:666',
    withCredentials: true
});

export default instance