import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Função para fazer login
export const login = async (credentials) => {
  try {
    const response = await API.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

// Função para registrar um novo usuário
export const register = async (credentials) => {
  try {
    const response = await API.post('/auth/register', credentials);
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar:', error);
    throw error;
  }
};

// Função para obter itens
export const getItems = async (token) => {
  try {
    const response = await API.get('/', {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    
    return response.data;
  } catch (error) {
    console.error('Erro ao obter itens:', error);
    throw error;
  }
};

// Função para criar um novo item
export const createItem = async (item, token) => {
  try {
    const response = await API.post('/items', item, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar item:', error);
    throw error;
  }
};

// Função para atualizar um item
export const updateItem = async (id, item, token) => {
  try {
    const response = await API.put(`/items/${id}`, item, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar item:', error);
    throw error;
  }
};

// Função para deletar um item
export const deleteItem = async (id, token) => {
  try {
    const response = await API.delete(`/items/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar item:', error);
    throw error;
  }
};

export default API;