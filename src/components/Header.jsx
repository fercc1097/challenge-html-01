import React from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import logo from '../images/logob.png';

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__container__logo">
        <img
          className="header__container__logo--img"
          src={logo}
          alt="Logo del sitio"
        />
      </div>
      <div className="header__container__nav">
        <ul className="header__container__nav--u">
          <li>TECHNOLOGY</li>
          <li>IDEAS</li>
          <li>LEADERSHIP</li>
          <li>VIDEO</li>
          <li>NEWS</li>
          <li>FINANCE</li>
          <li>ENTERTAINMENT</li>
        </ul>
      </div>
      <div className="header__container__menu">
        <h2 className="header__container__menu--icon">
          <RiMenu3Line />
        </h2>
      </div>
    </div>
  );
};

export default Header;
