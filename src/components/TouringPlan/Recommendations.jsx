import React from 'react';
import map from "lodash/map"
import range from "lodash/range"
import Container from 'components/ParkLanding/elements/Container';
import { SectionHeading } from 'components/ParkLanding/elements/Headings';
import twitter from "assets/images/twitter.png"

const Recommendations = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[39px] xs:pb-[56px]">
      <SectionHeading className="text-center !text-24 xs:leading-7 xs:mb-6 md:mb-68 md:leading-46 font-groteskBold">
        What people are saying about Touring Plans
      </SectionHeading>
      <div className='xs:container md:w-full overflow-auto scroll-smooth xs:mb-5 md:mb-5'>
        <div className='flex gap-4'>
          {map(range(4), (val) => (
            <div key={val} className='bg-tp-gray-400 w-[296px] h-[360px] py-[35px] px-[22px] shrink-0 flex flex-col justify-between'>
              <div className='text-13'>I can’t imagine going on a Disney trip without a touring plan.</div>
              <div className='flex'>
                <img src={twitter} alt="twitter" className='w-12 h-12' />
                <div className='flex flex-col pl-2'>
                  <p className='text-18'>@Kel_o_Watt</p>
                  <p className='text-13 pl-1'>1/31/22</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Recommendations;