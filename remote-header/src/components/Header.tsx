import React from 'react';
import reactLogo from '../assets/react.svg'
import './Header.css'; // Import the CSS file for styling

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="navbar">
      <div className="logo-container"><img src={reactLogo} className="logo react" alt="React logo" /></div>
      <h1 className="title">{title}</h1>
      <div className="login-btn-container">
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;
