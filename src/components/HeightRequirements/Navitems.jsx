import React from 'react';
import map from "lodash/map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import Container from 'components/ParkLanding/elements/Container';
import { useState } from 'react';

const subNavitems = [
  { title: "Basics" },
  { title: "Capacity Closures" },
  { title: "Character Greetings" },
  { title: "Early Theme Park Entry" },
  { title: "Extended Evening Theme Park Hours" },
  { title: "Lightning Lane" },
  { title: "Rope Drop (Park Opening)" },
]

const SubNavItem = ({ title, handleClick }) => {
  const className = 'relative xs:text-15 md:text-18 xs:leading-6 md:leading-7 xs:pt-0 xs:pb-5 md:pt-3 md:pb-[17px] px-3';
  return (
    <>
      <div className='relative px-3 py-5'>
        <p className='text-18 font-bold text-tp-purple mb-1'>{title}</p>
        <div className="absolute bg-tp-neutral top-0 right-0 px-3 py-5" onClick={handleClick}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
      <ul>
        {map(subNavitems, (item, key) => (
          <li key={key} className={`${className}`}>
            <a href={`#${item}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};



const NavItem = ({ isActive, children, onClick }) => {
  const className = 'relative xs:text-15 md:text-18 xs:leading-6 md:leading-7 xs:pt-0 xs:pb-5 md:pt-3 md:pb-[17px] px-3 xl:px-1';
  const active = isActive ? 'border-b-[3px] border-rose-600' : '';
  return (
    <li className={`${className} ${active}`} onClick={onClick}>
      <a href={`#${children}`}>{children}</a>
    </li>
  );
};


const Topheader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const handleActiveMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(false)
      return;
    }
    setActiveMenu("")
    setActiveMenu(menuName)
  }
  return (
    <>
      <Container bg="bg-tp-neutral" className="xs:pt-0 md:pt-0 xs:pb-0 md:pb-0 md:ml-10 md:!max-w-[100%]" >
        <div className='flex xs:flex-col md:flex-row justify-between items-center relative'>
          <div className='font-bold xs:py-4 xl:absolute'>Disney World</div>
          <div className='relative w-full md:flex md:flex-1 overflow-hidden'>
            <div className='xs:overflow-auto md:overflow-hidden xs:w-full md:w-auto flex md:items-center md:justify-center md:flex-1 scrollbar-hide'>
              <ul className='flex md:gap-11 whitespace-nowrap xs:px-2 md:px-1'>
                <NavItem isActive={true} onClick={() => handleActiveMenu("Parks")}>Parks</NavItem>
                <NavItem onClick={() => handleActiveMenu("Tools")}>Tools</NavItem>
                <NavItem onClick={() => handleActiveMenu("Hotels")}>Hotels</NavItem>
                <NavItem onClick={() => handleActiveMenu("Dinning")}>Dinning</NavItem>
                <NavItem onClick={() => handleActiveMenu("Events")}>Events</NavItem>
                <NavItem onClick={() => handleActiveMenu("Survey")}>Survey</NavItem>
                <NavItem onClick={() => handleActiveMenu("Touring")}>Touring</NavItem>
                <NavItem onClick={() => handleActiveMenu("Planning")}>Planning</NavItem>
              </ul>
            </div>
            <div className="bg-tp-neutral xs:absolute md:hidden xs:left-0 xs:top-0"><FontAwesomeIcon icon={faAngleLeft} /></div>
            <div className="bg-tp-neutral xs:absolute md:hidden xs:right-0  xs:top-0"><FontAwesomeIcon icon={faAngleRight} /></div>
          </div>
        </div>
      </Container>
      <aside
        className={`
        ${activeMenu ? 'translate-x-0' : '-translate-x-full'} 
        transform top-0 left-0 xs:w-full md:w-[300px] bg-tp-neutral fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 shadow-2xl`}>
        <SubNavItem title={activeMenu} handleClick={() => setActiveMenu("")} />
      </aside>
    </>
  );
};

export default Topheader;