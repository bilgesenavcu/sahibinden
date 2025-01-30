import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Dropdown } from "react-bootstrap";
import SearchBar from "./SearchBar"; // SearchBar'ı içe aktar


function Header({ auth, name, handleLogout }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>

        {/* Search Bar */}
        <form className="d-flex">
          <SearchBar />
        </form>

        {/* Kullanıcı Oturumu */}
        <div className="navbar-collapse flex w-full">
          <ul className="navbar-nav flex w-full">
            {auth ? (
              <li className="nav-item d-flex align-items-center">
                <Dropdown className="w-full flex justify-between">
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-basic"
                    className="logout-dropdown"
                  >
                    {name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleLogout}>Çıkış Yap</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Giriş Yap
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Hesap Aç
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
