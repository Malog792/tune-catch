// src/App.jsx
import Home from './components/Home.jsx';
import Login from './components/Login.jsx'; // ✅ importe o Login
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex" style={{ backgroundColor: "#fff9f9" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> {/* ✅ nova rota de login */}
        </Routes>
      </div>
    </Router>
  );
}
