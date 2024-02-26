import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { VscAccount } from "react-icons/vsc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import MenuAcount from '../MenuAccount';
import BtnClose from '../Btns/BtnClose';

const Header = () => {
  const [navAcoount, setNavAccount] = useState(false)
  const [navMenu, setMenu] = useState(true)
  function account () {
    setNavAccount(true)
  }
  function close () {
    setNavAccount(false)
  }
  function openMenu () {
    setMenu(false)
  }
  function closeMenu () {
    setMenu(true)
  }

  return (
    <header className="header">
      <div className="logo-and-account-container">
        <Link to={'/'} className='link-btn'>
          <div className="logo-container">
              <h1 className="logo">Movie Net</h1>
          </div>
        </Link>
        <div className={navMenu ? "menu-container" : "menu-container-mobile" }>
          <nav className="nav">
            <div onClick={closeMenu} className='close-menu'>
              <BtnClose/>
            </div>
            <div>
              <Link  onClick={closeMenu}  to="/" className="link">Início</Link>
            </div>
            <div>
              <Link  onClick={closeMenu}  to="/filmes" className="link">Filmes</Link>
            </div>
            <div>
              <Link  onClick={closeMenu}  to="/sobre" className="link">Sobre</Link>
            </div>
          </nav>
        </div>
  
        <div className="user-menu">
          <div onClick={account} className={navAcoount ? "menu-link" : "menu-mobile"}><VscAccount/></div>
          <Link to="/notificacoes" className="menu-link"><IoIosNotificationsOutline/></Link>
          <Link to="/configuracoes" className="menu-link"><GoGear/></Link>
          <div>
          <div onClick={openMenu} className='is-menu'>
            <IoIosMenu/>
          </div>
        </div>
        {navAcoount ? <MenuAcount onClickClose={close}/> : <>  </> }
        </div>
      </div>
      
      
    </header>
  );
};

export default Header;
