import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management System</h1>
        <button className="user1" onClick={ () => navigate('/users') }>Users</button>
        <br/>
        
        
      </header>
    </div>
  );
}

export default App;
