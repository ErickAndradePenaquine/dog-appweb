import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', // URL do seu backend Laravel
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
    },
    withCredentials: true // Importante para cookies/sessão
});

// Interceptor para adicionar o token CSRF em todas as requisições
api.interceptors.request.use(config => {
    const token = document.querySelector('meta[name="csrf-token"]');
    if (token) {
        config.headers['X-CSRF-TOKEN'] = token.getAttribute('content');
    }
    return config;
});

export default api; 