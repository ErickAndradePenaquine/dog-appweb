import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';
import './DogCreate.css';

const DogUpdate = () => {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();
  
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Carrega os dados do dog quando o componente monta
  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await api.get(`/api/dogs/${id}`);
        const dog = response.data;
        setNome(dog.nome);
        setRaca(dog.raca);
        setIdade(dog.idade);
      } catch (error) {
        setError('Erro ao carregar dados do dog');
      }
    };

    fetchDog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const dogData = {
      nome,
      raca,
      idade,
    };

    try {
      await api.put(`/api/dogs/${id}`, dogData);
      setSuccess('Dog atualizado com sucesso!');
      setTimeout(() => {
        navigate('/dogs');
      }, 2000);
    } catch (error) {
      setError('Erro ao atualizar dog. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h1 className="form-title">Editar Dog</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome" className="form-label">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="raca" className="form-label">Raça:</label>
            <input
              type="text"
              id="raca"
              value={raca}
              onChange={(e) => setRaca(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="idade" className="form-label">Idade:</label>
            <input
              type="number"
              id="idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              required
              min="0"
              className="form-input"
            />
          </div>
          <button type="submit" disabled={loading} className="form-button">
            {loading ? 'Atualizando...' : 'Atualizar Dog'}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
      </div>
    </div>
  );
};

export default DogUpdate;
