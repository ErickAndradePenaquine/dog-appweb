import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', //para rodar em localhost
    //baseURL: 'http://ipmaquina:8000/api', // Para rodar em lan
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Interceptor para adicionar o token JWT em todas as requisições
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default api;