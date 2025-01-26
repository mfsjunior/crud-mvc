import React, { useState, useEffect } from 'react';
import API, { getItems, createItem, updateItem, deleteItem } from './api';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import Login from './components/Login';
import Register from './components/Register';
import './App.css'; // Importe o arquivo CSS

function App() {
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    if (token) {
      fetchItems();
    }
  }, [token]);

  const fetchItems = async () => {
    try {
      const data = await getItems(token);
      setItems(data);
    } catch (error) {
      console.error('Erro ao buscar itens', error);
    }
  };

  const handleAddItem = async (item) => {
    try {
      const data = await createItem(item, token);
      setItems([...items, data]);
    } catch (error) {
      console.error('Erro ao adicionar item', error);
    }
  };

  const handleUpdateItem = async (id, item) => {
    try {
      const data = await updateItem(id, item, token);
      setItems(items.map((i) => (i._id === id ? data : i)));
    } catch (error) {
      console.error('Erro ao atualizar item', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id, token);
      setItems(items.filter((i) => i._id !== id));
    } catch (error) {
      console.error('Erro ao deletar item', error);
    }
  };

  return (
    <div>
      {!token ? (
        isRegistering ? (
          <Register setToken={setToken} />
        ) : (
          <Login setToken={setToken} />
        )
      ) : (
        <>
          <ItemForm onSubmit={handleAddItem} />
          <ItemList items={items} onUpdateItem={handleUpdateItem} onDeleteItem={handleDeleteItem} />
        </>
      )}
      {!token && (
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Registre-se'}
        </button>
      )}
    </div>
  );
}

export default App;