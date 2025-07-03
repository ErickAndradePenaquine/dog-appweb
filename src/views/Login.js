import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm(); //O que é { register, handleSubmit, formState: { errors } 
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate('/dogs'); 
    } catch (error) { 
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ marginBottom: '20px' }}>Login</h1>
      
      <form onSubmit={handleSubmit(onSubmit)}> {/* Entrando no form assincrono handleSubmit */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            {...register('email', { required: true })}
            style={{ width: '100%', padding: '8px', textAlign: 'center'}}
            autoComplete="email"
          />
          {errors.email && (
            <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}>
              Email é obrigatório
            </div>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Senha:</label>
          <input 
            type="password" 
            {...register('password', { required: true, minLength: 4 })}
            style={{  width: '100%', padding: '8px', textAlign: 'center'}}
            autoComplete="current-password"
          />
          {errors.password && ( 
            <div style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}>
              Senha deve ter no mínimo 4 caracteres
            </div>
          )}
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '20px' 
        }}>
          <button 
            type="submit"
            style={{ 
              padding: '10px 40px',
              cursor: 'pointer',
              width: 'auto'
            }}
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login; 