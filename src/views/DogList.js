import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import './DogList.css';

const DogList = () => {
  const [dogs, setDogs] = useState([]);  //struct para armazenar os dados dos dogs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [dogToDelete, setDogToDelete] = useState(null);
  //const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    try {
      const response = await api.get('/dogs');
      setDogs(response.data);
      setLoading(false);
    } catch (error) {
      setError('Erro ao carregar lista de dogs');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/dogs/${id}`);
      setSuccess('Dog deletado com sucesso!');
      setDogToDelete(null);
      fetchDogs();
    } catch (error) {
      setError('Erro ao deletar dog');
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="container">
      {success && (
        <div className="success-message">
          {success}
        </div>
      )}

      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="table-header">
              <th>NOME</th>
              <th>RAÇA</th>
              <th>IDADE</th>
              <th>AÇÃO</th>
            </tr>
          </thead>
          <tbody>
            {dogs.map(dog => (
              <tr key={dog.id} className="table-row">
                <td className="table-cell">{dog.nome}</td>
                <td className="table-cell">{dog.raca}</td>
                <td className="table-cell">{dog.idade}</td>
                <td className="table-cell">
                  <div className="actions-container">
                    <Link
                      to={`/dogs/${dog.id}/edit`}
                      className="edit-button"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => setDogToDelete(dog)}
                      className="delete-button"
                    >
                      Deletar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de confirmação */}
      {dogToDelete && (
        <>
          <div className="modal">
            <h3 className="modal-title">Confirmar Exclusão</h3>
            <p>Tem certeza que deseja deletar o dog {dogToDelete.nome}?</p>
            <div className="modal-actions">
              <button
                onClick={() => setDogToDelete(null)}
                className="modal-cancel"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(dogToDelete.id)}
                className="modal-confirm"
              >
                Sim, Deletar
              </button>
            </div>
          </div>
          <div className="modal-overlay" />
        </>
      )}
    </div>
  );
};

export default DogList;
