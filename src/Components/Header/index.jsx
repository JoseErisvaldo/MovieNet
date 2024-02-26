import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { VscAccount } from "react-icons/vsc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-and-account-container">
        <Link to={'/'} className='link-btn'>
          <div className="logo-container">
              <h1 className="logo">Movie Net</h1>
          </div>
        </Link>
        <div className="menu-container">
          <nav className="nav">
            <Link to="/" className="link">Início</Link>
            <Link to="/filmes" className="link">Filmes</Link>
            <Link to="/sobre" className="link">Sobre</Link>
          </nav>
        </div>
        
        <div className="user-menu">
          <Link to="/conta" className="menu-link"><VscAccount/></Link>
          <Link to="/notificacoes" className="menu-link"><IoIosNotificationsOutline/></Link>
          <Link to="/configuracoes" className="menu-link"><GoGear/></Link>
          <div>
          <IoIosMenu/>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
