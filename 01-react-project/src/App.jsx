import './App.css';
import UserTable from './components/UserTable'; 
import { users } from './data/users';          

function App() {
  return (
   <div className="app-container">
      <h1 style={{ textAlign: 'center' }}>Employee Details</h1>
      <UserTable users={users} />
    </div>
  );
}

export default App;
