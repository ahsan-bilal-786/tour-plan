import React from 'react';
import Container from 'components/ParkLanding/elements/Container';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const ListItems = ({ children }) => (
  <div className='text-tp-purple text-18 font-bold xs:mb-5 md:mb-5'>
    <a href="/">{children}<FontAwesomeIcon icon={faArrowRight} className="ml-3" /></a>
  </div>
)

const TouringPlans = () => {
  return (
    <Container bg="bg-tp-purple-500" className="xs:pt-[61px] xs:pb-[48px]  md:pt-[80px] md:pb-[52px] xs:px-7 md:px-0">
      <SmallHeadings className="text-white md:mb-4">Touring Plans with Seven Dwarfs Mine Train</SmallHeadings>
      <ListItems>Magic Kingdom Unofficial Guide Adult One-Day Touring Plan</ListItems>
      <ListItems>Magic Kingdom Happy Family One-Day Touring Plan</ListItems>
      <ListItems>Magic Kingdom Unofficial Guide Selective One-Day Touring Plan for Adults</ListItems>
      <ListItems>Magic Kingdom Unofficial Guide Dumbo-or-Die-in-a-Day Touring Plan</ListItems>
      <ListItems>Magic Kingdom Happy Family Two-Day Touring Plan - Day 1</ListItems>
    </Container>
  );
};

export default TouringPlans;