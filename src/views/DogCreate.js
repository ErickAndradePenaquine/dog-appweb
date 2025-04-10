import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom'; // Para redirecionar após a criação
import './DogCreate.css';

const DogCreate = () => {
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); // Usado para redirecionar após sucesso

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); //Loading entra em funcionamento quando requisição esta sendo feita
    setError(null);
    setSuccess(null);

    // Preparar os dados para o envio
    const dogData = {
      nome,
      raca,
      idade,
    };

    try {
      const response = await api.post('/api/dogs', dogData);
      setSuccess('Dog criado com sucesso!');
      setLoading(false);
      setNome(''); //Limpa o campo após requisição bem sucedida
      setRaca('');
      setIdade('');
      setTimeout(() => {
        // Redireciona para a lista de dogs após a criação
        navigate('/dogs');
      }, 2000); //2000 é o tempo de espera para redirecionar para a lista de dogs
    } catch (error) {
      // Caso ocorra um erro
      setError('Erro ao criar dog. Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h1 className="form-title">Adicionar Dog</h1>
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
            {loading ? 'Criando...' : 'Criar Dog'}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
      </div>
    </div>
  );
};

export default DogCreate;
