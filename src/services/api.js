import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistack-backend-rha.herokuapp.com",
});

export default api;