import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import logoHitss from '../../assets/hitssLogo.png';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // ou localStorage.removeItem('user')
    navigate('/');   // redireciona para a tela de login
  };

  return (
    <div className="sidebar">
      <img src={logoHitss} alt="logo" className="sidebarLogo" />
      <nav className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/estoque">Estoque</Link>
        <Link to="/relatorios">Relatórios</Link>
        <Link to="/usuarios">Usuários</Link>
        <button onClick={handleLogout} className="logoutButton">Sair</button>
      </nav>
    </div>
  );
}

export default Sidebar;
