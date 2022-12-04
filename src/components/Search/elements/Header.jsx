import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import logo from "assets/images/logo.png"

const Header = ({ handleSearch }) => {
  return (
    <div className='flex px-[48px] h-[79px] justify-between items-center border-b border-black'>
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div>
        <img src={logo} alt="logo" className='h-[35px]' />
      </div>
      <div>
        <FontAwesomeIcon className='cursor-pointer' icon={faMagnifyingGlass} onClick={handleSearch} />
      </div>
    </div>
  );
};

export default Header;