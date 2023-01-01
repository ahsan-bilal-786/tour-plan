import React from 'react';
import Container from 'elements/Container';

const TipsToSaveCard = ({ index, title, description }) => {
  return (
    <div className='text-white xs:mb-11 md:mb-0 md:flex-1'>
      <div className='mb-4 md:mb-9'>
        <span className='border-4 border-tp-brown-300 rounded-full w-16 h-16 inline-flex items-center justify-center text-30 text-tp-brown-300 font-semibold font-groteskSemiBold'>
          {index}
        </span>
      </div>
      <div className="text-18 font-bold mb-2">
        {title}
      </div>
      <div className="text-15 leading-6">
        {description}
      </div>
    </div>
  );
};


const TipsToSave = () => {
  return (
    <Container bg="bg-tp-purple-500" className="xs:pt-12 md:pt-[57px] xs:pb-[90px] md:pb-[78px] xs:px-7 md:px-0 text-center">
      <div className='flex justify-center'>
        <h1 className="text-30 xs:w-[284px] md:w-auto mb-56 font-groteskSemiBold text-tp-purple font-semibold">
          Tips to Save on Tickets
        </h1>
      </div>
      <div className="flex xs:flex-col md:flex-row gap-x-3">
        <TipsToSaveCard index={1} title="Be realistic about what you want out of your vacation" description="Know your limits and consider what you can really do for the amount time you’ll be there." />
        <TipsToSaveCard index={2} title="Skip Park Hopping for water park visits." description="If you’re not park-hopping but going to visit just a water park once, purchasing that admission separately rather than in the Park Hopper option. " />
        <TipsToSaveCard index={3} title="Buy from a third-party wholesaler." description="These vendors sign contracts with Disney and provide exactly the same tickets you’d purchase at Walt Disney World." />
        <TipsToSaveCard index={4} title="Choose a Start Date earlier than your arrival date." description="You’ll pay less per adult and you may get better prices and can save you money even if you visit for less days." />
        <TipsToSaveCard index={5} title="Consider Park Hopper Plus instead of Flexible Dates." description="This tip works if you’re going to park-hop and you need your tickets to be valid for one day longer than the default duration. You can save up to $62 per ticket." />
      </div>
    </Container>
  );
};

export default TipsToSave;