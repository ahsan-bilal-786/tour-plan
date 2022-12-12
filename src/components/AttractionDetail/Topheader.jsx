import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Container from 'components/ParkLanding/elements/Container';

const NavItem = ({ isActive, children }) => {
  const className = 'xs:text-15 md:text-18 xs:leading-6 md:leading-7 xs:pt-0 xs:pb-5 md:pt-3 md:pb-[17px] px-3';
  const active = isActive ? 'border-b-[3px] border-rose-600' : '';
  return (
    <li className={`${className} ${active}`}><a href={`#${children}`}>{children}</a></li>
  );
};


const Topheader = () => {
  return (
    <Container bg="bg-tp-neutral" className="xs:pt-0 md:pt-0 xs:pb-0 md:pb-0 md:ml-10 md:!max-w-[100%]" >
      <div className='flex xs:flex-col md:flex-row justify-between items-center'>
        <div className='font-bold xs:py-4'>Seven Dwarfs Mine Train</div>
        <div className='relative w-full md:flex md:flex-1 overflow-hidden'>
          <div className='xs:overflow-auto md:overflow-hidden xs:w-full md:w-auto flex md:items-center md:justify-center md:flex-1 scrollbar-hide'>
            <ul className='flex md:gap-11 whitespace-nowrap xs:px-2 md:px-1'>
              <NavItem isActive={true}>At a Glance</NavItem>
              <NavItem>Touring Tips</NavItem>
              <NavItem>Reviews</NavItem>
              <NavItem>Wait Times</NavItem>
              <NavItem>Our Rating</NavItem>
              <NavItem>More</NavItem>
            </ul>
          </div>
          <div className="bg-tp-neutral xs:absolute md:hidden xs:left-0 xs:top-0"><FontAwesomeIcon icon={faAngleLeft} /></div>
          <div className="bg-tp-neutral xs:absolute md:hidden xs:right-0  xs:top-0"><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>
      </div>
    </Container>
  );
};

export default Topheader;