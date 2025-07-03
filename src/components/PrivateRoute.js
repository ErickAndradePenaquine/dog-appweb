import { Navigate } from 'react-router-dom';
import { getToken } from '../services/auth';

function PrivateRoute({ children }) {
  const token = getToken(); //Busca token em Armazenado em LocalStorage
  
  if (!token) { // Se token nao existe
    return <Navigate to="/login" replace />; //Navega para rota login novamente
  }

  return children;
}

export default PrivateRoute; 