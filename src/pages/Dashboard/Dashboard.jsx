import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import logoHitss from '../../assets/hitssLogo.png';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');  
  };

  return (
    <div className="sidebar">
      <img src={logoHitss} alt="logo" className="sidebarLogo" />
      <nav className="nav-links">
        <Link to="/estoque">Estoque</Link>
        <Link to="/relatorios">Relatórios</Link> 
        <Link to="/usuarios">Entregas</Link>
        
      </nav>
      <button onClick={handleLogout} className="logoutButton">Sair</button>
    </div>
  );
}

export default Sidebar;
