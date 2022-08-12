import React from 'react';
import logo from "../assets/icons/headerIcons/headerLogo.svg"
import { Link } from 'react-router-dom';
import '../styles/header.css'
const Header = () => {
  return (
    <div className='header'>
      <Link to='/' >
          <img src={logo} alt="" />
        </Link>


        <div className='header__nav'>
        <Link to='/' >
        Watches
        </Link>
        <Link to='/' >
        Eyewear
        </Link>
        <Link to='/' >
        Accessories
        </Link>
        <Link to='/' >
        News
        </Link>



        </div>

    </div>
  );
};

export default Header;