import api from '../api';

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    const { access_token, user } = response.data; //Esta adicionando os dados de data em { access_token, user }?
    
    localStorage.setItem('token', access_token); //Guarda em localStorage como token dados de access_token recebidos de response.data diretamente da api?
    localStorage.setItem('user', JSON.stringify(user)); //Guarda em localStorage como user dados de user recebidos de response.data diretamente da api?

    return response.data; //Retorna os dados de response.data para o login.js?
  }
  catch (error) {
  throw error;
  }
};

export const logout = async () => {
  try {
    await api.post('/logout');
  } 
  catch (error) {
    console.log('Erro durante logout:', error);
  } 
  finally {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete api.defaults.headers.common['Authorization'];
  }
};

export const getToken = () => localStorage.getItem('token'); //?
export const getUser = () => JSON.parse(localStorage.getItem('user'));//?