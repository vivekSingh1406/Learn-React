import { useState } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addUser = (user) => {
    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = user;
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([...users, user]);
    }
  };

  const editUser = (index) => {
    setEditIndex(index);
  };

  const deleteUser = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
  };

  return (
    <div className="app-container">
      <h1>crud-operation</h1>
      <UserForm addUser={addUser} user={users[editIndex]} />
      <UserTable users={users} onEdit={editUser} onDelete={deleteUser} />
    </div>
  );
}

export default App;
