import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const DogCreate = () => {
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

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
      await api.post('/dogs', dogData);
      setSuccess('Dog criado com sucesso!');
      setNome('');
      setRaca('');
      setIdade('');
      setTimeout(() => {
        navigate('/dogs');
      }, 2000);
    } catch (error) {
      setError('Erro ao criar dog. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ marginBottom: '20px' }}>Adicionar Dog</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            style={{ 
              width: '100%',
              padding: '8px',
              textAlign: 'center'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Raça:</label>
          <input
            type="text"
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
            required
            style={{ 
              width: '100%',
              padding: '8px',
              textAlign: 'center'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Idade:</label>
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
            min="0"
            style={{ 
              width: '100%',
              padding: '8px',
              textAlign: 'center'
            }}
          />
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '20px' 
        }}>
          <button type="submit" disabled={loading} 
            style={{ 
              padding: '10px 40px',
              width: 'auto',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Criando...' : 'Criar Dog'}
          </button>
        </div>
      </form>

      {error && (
        <div style={{ 
          color: 'red', 
          marginTop: '10px' 
        }}>
          {error}
        </div>
      )}
      
      {success && (
        <div style={{ 
          color: 'green', 
          marginTop: '10px' 
        }}>
          {success}
        </div>
      )}
    </div>
  );
};

export default DogCreate;
