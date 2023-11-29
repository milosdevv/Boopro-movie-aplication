import './App.css';
import "./ganres";
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
const App = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      {token ? <HomePage/> : <LoginPage/>}
    </div>
  );
}

export default App;
