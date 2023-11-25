import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home'
import Login from './Pages/LoginPage'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Login" element={<Login/>} />
        </Routes>
    </div>
  );
}

export default App;
