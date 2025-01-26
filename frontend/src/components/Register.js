import React, { useState } from 'react';
import { register } from '../api';

const Register = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentials = { email, password };
      const response = await register(credentials);
      setToken(response.token); // Armazene o token no estado do componente App
      console.log('Registro bem-sucedido:', response);
    } catch (err) {
      setError('Erro ao registrar. Verifique suas credenciais.');
    }
  };

  return (
    <div>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;