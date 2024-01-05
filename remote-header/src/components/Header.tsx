import React from 'react';
import './Header.css'; // Import the CSS file for styling

interface HeaderProps {
  title: string;
  logo?: string;
}

const Header: React.FC<HeaderProps> = ({ logo, title }) => {
  return (
    <header className="navbar">
      <div className="logo-container">{logo?<img src={logo} className="logo react" alt="React logo" />:<small className='logo-text'>Logo</small>}</div>
      <h1 className="title">{title}</h1>
      <div className="login-btn-container">
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;
