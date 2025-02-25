import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => onEdit(user)}>Editar</button>
            <button onClick={() => onDelete(user.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;


