import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useNavigate,
  Navigate 
} from 'react-router-dom';
import DogList from './views/DogList';
import DogCreate from './views/DogCreate';
import DogUpdate from './views/DogUpdate';
import Login from './views/Login';
import PrivateRoute from './components/PrivateRoute';
import { logout } from './services/auth';
import './App.css';

// Essa função é executado quando feito o logout
function AppContent() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="header-title">
          DOG MANAGER
        </h1>

        <nav className="nav-container" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/dogs" className="nav-link">
            LISTA DE DOGS -
          </Link>
          <Link to="/dogs/create" className="nav-link">
            ADICIONAR DOG +
          </Link>
          <div style={{ marginLeft: 'auto' }}>
            <Link 
              to="#" 
              onClick={handleLogout} 
              className="nav-link"
              style={{ 
                color: 'red',
                fontSize: '1.2rem',
                padding: '8px 24px',
                fontWeight: 'bold'
              }}
            >
              SAIR
            </Link>
          </div>
        </nav>
      </div>

      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dogs"
            element={
              <PrivateRoute>
                <DogList />
              </PrivateRoute>
            }
          />
          <Route
            path="/dogs/create"
            element={
              <PrivateRoute>
                <DogCreate />
              </PrivateRoute>
            }
          />
          <Route
            path="/dogs/:id/edit"
            element={
              <PrivateRoute>
                <DogUpdate />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dogs" replace />} />
        </Routes>
      </div>
    </div>
  );
}

// Como se eu tivesse importando a Hook Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
