import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logoHitss from '../../assets/hitssLogo.png';
import dataCenter from '../../assets/dataCenter.png'

function Login() {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password123');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Campos obrigatórios.");
      return;
    }

    if (email === "user@example.com" && password === "password123") {
      setError('');
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify({ email }));
      }
      navigate('/dashboard');
    } else {
      setError("Email ou senha inválidos.");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="login-container">
        <div className="login-left">
          <img src={logoHitss} alt="Logo" className="logo" />
          <h2 className="title-primary">
            🎉 Bem-vindo ao nosso novo <br />Sistema de Controle de Estoque!
          </h2>
          <p className="description">
            Desenvolvido para facilitar o controle, otimizar o tempo e garantir
            mais eficiência na gestão dos seus produtos. Estamos felizes em ter
            você conosco nessa nova fase!
          </p>
          <img src={dataCenter} alt="dataCenter" className=" dataCenter" />
        </div>
        

        <div className="login-right">
          <form className="form" onSubmit={handleSubmit}>
            <label>Email address</label>
            <input
              type="email"
              placeholder="name@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="●●●●●●●"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="error-message">{error}</p>}

            <div className="options">

              <a href="#">Forgot password?</a>
            </div>

            <div className="buttons">
              <button type="submit" className="btn primary">Login</button>
            </div>

            <div className="social">
              <span>FOLLOW</span>
              <div className="icons">
                <a href="#"><i className="fab fa-google"></i></a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
