import React from 'react';
import Container from 'elements/Container';

const OptionsCard = ({ title, description, price, isSuspended }) => {
  return (
    <div className='mb-73 md:mb-0 flex-1'>
      <div className='flex flex-wrap justify-center mb-4'>
        <img alt="imagealt" src="https://via.placeholder.com/223x223.png" className='shadow rounded-full max-w-full h-auto align-middle border-none' />
      </div>
      <div className="text-24 font-semibold text-tp-purple mb-3">{title}</div>
      <div className="text-[16px] mb-3 md:min-h-152 leading-7">
        {description}
      </div>
      <div className="text-13 font-bold mb-17">{price}</div>
      {isSuspended && (
        <div className="text-13 font-medium text-tp-purple capitalize">sales temporarily suspended in november 2021</div>
      )}
    </div>
  );
};


const AnnualPasses = () => {
  return (
    <Container bg="bg-tp-neutral" className="xs:pt-[49px] md:pt-[92px] xs:pb-[70px] md:pb-[102px]  text-center">
      <div className='mb-56 text-center flex flex-col items-center'>
        <h1 className="capitalize text-30 font-groteskSemiBold text-tp-purple font-semibold">Annual passes</h1>
        <p className='xs:text-13 md:text-18 font-normal xs:uppercase md:normal-case md:max-w-[1080px]'>
          An Annual Pass provides frequent or unlimited use of the major theme parks for one year. Annual Passholders must make park reservations for the first park they plan to visit on any given day. There are four versions of Annual Passes
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-x-6 mb-14'>
        <OptionsCard
          title="Incredi-Pass"
          description="Available to anyone with no blockout dates. Can have up to 5 park reservations at once."
          price="$1,489.94 (tax included)"
          isSuspended={true}

        />
        <OptionsCard
          title="Sorcerer Pass"
          description="For Florida Residents or Disney Vacation Club Members. Thanksgiving and Christmas periods are blocked out. Can have up to 5 park reservations at once."
          price="$1,489.94 (tax included)"
          isSuspended={true}
        />

        <OptionsCard
          title="Pirate Pass"
          description="For Florida Residents only. Holidays and busy weekends are blocked out. Can have up to 4 park reservations at once."
          price="$1,489.94 (tax included)"
          isSuspended={true}
        />

        <OptionsCard
          title="Pixie Dust Pass"
          description="Almost all weekends and all holiday periods are blocked out. Can have up to 3 park reservations at once."
          price="$1,489.94 (tax included)"
          isSuspended={false}
        />

      </div>
      <div className='mb-10 text-center flex flex-col items-center'>
        <p className='xs:text-13 md:text-15 font-normal xs:uppercase md:normal-case md:max-w-[1080px]'>
          All passes include theme park parking and discounts on dining and merchandise. The Park Hopper option is included with an Annual Pass, but PhotoPass and access to the Disney water parks must be added on for $105.43 (tax included) for each option. There is no child price for annual passes: all guests 3 and over are charged the same amount. Check <a href="/" alt="ann" className='text-tp-purple font-bold'>Disney's Annual Passholder Program</a> webpage for the latest information
        </p>
      </div>
    </Container>
  );
};

export default AnnualPasses;