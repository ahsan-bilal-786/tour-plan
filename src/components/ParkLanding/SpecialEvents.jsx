import React from 'react';
import { ParagraphNormal } from 'components/ParkLanding/elements/Paragraph';
import Container from 'components/ParkLanding/elements/Container';

const SpecialEvents = () => {
  return (
    <Container bg="bg-tp-purple-500" maxWidth="960" className="xs:pt-68 md:pt-62 xs:pb-56 md:pb-92 xs:px-30 md:px-0 text-center">
      <h3 className='font-groteskBold text-tp-purple xs:text-24 sm:text-30 font-semibold xs:mb-5 md:mb-6'>
        Special Events at the Magic Kingdom
      </h3>
      <div className='flex justify-center'>
        <div className='md:max-w-960 max-auto'>
          <ParagraphNormal className="text-tp-brown-300">
            <p className='mb-2'>Throughout the year, the Magic Kingdom hosts many Special Events that can be fun and some that need to be avoided if you don’t like crowded theme parks. After you choose which week to visit you still need to know what’s going on at the park to make sure you’re ready for the magic.</p>
            <p>Fall at the Magic Kingdom is ’Party’ Season. Mickey’s Not-So-Scary Halloween Party is a spooktacular evening event that requires a separate ticket in early fall. Once November arrives the theme switches to Mickey’s Very Merry Christmas Party . Similar party - different decorations - just as fun!</p>
          </ParagraphNormal>
        </div>
      </div>
    </Container>
  );
};

export default SpecialEvents;