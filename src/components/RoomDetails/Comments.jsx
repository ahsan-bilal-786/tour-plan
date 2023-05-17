import React from 'react';
import { SectionHeading } from 'elements/Headings';
import { faker } from '@faker-js/faker';
import Container from 'components/ParkLanding/elements/Container';

const Comments = () => {
  return (
    <Container bg="bg-tp-neutral" className="xs:pt-[49px] md:pt-[98px] xs:pb-[80px] md:pb-[117px] xs:hidden md:block">
      <SectionHeading className="border-b border-tp-purple leading-10 mb-7">Public Comments (1)</SectionHeading>
      <div className='flex'>
        <img src={faker.image.avatar()} alt="" className='w-[72px] h-[72px] rounded-full mr-8'/>
        <div className='flex-1'>
            <p className='font-bold text-base leading-5'>{faker.name.firstName()}</p>
            <p className='text-[13px] leading-[18px] mb-3'>MARCH 9, 2022 AT 7:42PM</p>
            <p className='font-normal text-lg leading-7 min-h-[88px] mb-4'>We stayed in this room back February 2022 and it did not disappoint. The views were great and it felt like we were looking out on a lush garden.</p>
            <p className='font-normal text-13 leading-[18px] uppercase text-tp-purple'>reply</p>
        </div>
      </div>
    </Container>
  );
};

export default Comments;