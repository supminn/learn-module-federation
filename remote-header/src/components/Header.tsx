import React, { useState } from "react";
import "./Header.css";
interface HeaderProps {
  logo?: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ logo, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    isSet: false,
  });

  const handleLoginSubmit = () => {
    setCredentials((prev) => ({ ...prev, isSet: true }));
    setIsModalOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        {logo ? (
          <img src={logo} className="logo react" alt="React logo" />
        ) : (
          <small className="logo-text">Logo</small>
        )}
      </div>
      <h1 className="title">{title}</h1>
      <div className="login-btn-container">
        {credentials.isSet ? (
          <span>Welcome {credentials.username}</span>
        ) : (
          <button className="login-btn" onClick={() => setIsModalOpen(true)}>
            Login
          </button>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h2>Login</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Username:</label>
              <input
                type="username"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
                required
              />
              <label>Password:</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                required
              />
              <button onClick={handleLoginSubmit}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
