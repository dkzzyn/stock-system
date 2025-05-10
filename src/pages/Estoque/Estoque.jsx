import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Estoque.css'; // Estilos da sidebar
import logoHitss from '../../assets/hitssLogo.png';


function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');  // Redireciona para o login
  };

  return (
    <div>
    <div className="sidebar">
      <img src={logoHitss} alt="logo" className="sidebarLogo" />
        <nav className="nav-links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/relatorios">Relatórios</Link>
            <Link to="/usuarios">Usuários</Link>
         </nav>
             <button onClick={handleLogout} className="logoutButton">Sair</button>
        </div>
    </div>
  );
}

export default Sidebar;
