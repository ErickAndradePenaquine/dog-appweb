import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DogList from './views/DogList';
import DogCreate from './views/DogCreate';
import DogUpdate from './views/DogUpdate';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="header">
          <h1 className="header-title">
            DOG MANAGER
          </h1>

          <nav className="nav-container">
            <Link to="/dogs" className="nav-link">
              LISTA DE DOGS -
            </Link>
            <Link to="/dogs/create" className="nav-link">
              ADICIONAR DOG +
            </Link>
          </nav>
        </div>

        <div className="content">
          <Routes>
            <Route path="/dogs" element={<DogList />} />
            <Route path="/dogs/create" element={<DogCreate />} />
            <Route path="/dogs/:id/edit" element={<DogUpdate />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
