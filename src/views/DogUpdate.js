import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const DogUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await api.get(`/dogs/${id}`);
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
      await api.put(`/dogs/${id}`, dogData);
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
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ marginBottom: '20px' }}>Editar Dog</h1>
      
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
          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              padding: '10px 40px',
              width: 'auto',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Atualizando...' : 'Atualizar Dog'}
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

export default DogUpdate;
