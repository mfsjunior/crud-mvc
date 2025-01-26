import React from 'react';

const ItemList = ({ items, onUpdateItem, onDeleteItem }) => {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item._id}>
          <span>{item.name}</span>
          <span>{item.description}</span>
          <div className="item-actions">
            <button onClick={() => onUpdateItem(item._id, item)}>Atualizar</button>
            <button onClick={() => onDeleteItem(item._id)}>Deletar</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;