import axios from 'axios';

const httpService = axios.create({
    baseURL: 'http://localhost:3000',
});

export default httpService;
