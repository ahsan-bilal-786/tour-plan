import React from 'react';
import Container from 'elements/Container';

const SaveMoneyCard = ({ count, title, description }) => {
  return (
    <div className='text-white xs:mb-6 md:mb-8 '>
      <div className='mb-4 md:mb-9'>
        <span className='border-4 border-tp-brown-300 rounded-full w-16 h-16 inline-flex items-center justify-center text-30 text-tp-brown-300 font-semibold font-groteskSemiBold'>{count}</span>
      </div>
      <div className="text-18 font-bold mb-2">
        {title}
      </div>
      <div className="text-15 leading-6 text-center">
        {description}
      </div>
    </div>
  );
};


const SaveMoney = () => {
  return (
    <Container bg="bg-tp-purple-500" className="xs:pt-[49px] md:pt-[92px] xs:pb-[70px] md:pb-[102px]  text-center">
      <h1 className="capitalize text-30 mb-56 font-groteskSemiBold text-tp-purple font-semibold">how to save money on disney world tickets</h1>
      <div className='mb-56 text-justify text-white xs:text-center md:text-left'>
        <p className='mb-2'>Disney's date-based pricing scheme is the most complicated system it has ever used for ticket purchases. It’s so complicated, in fact, that we wrote a computer program to analyze all the options and to look for loopholes in the new pricing rules. Our Park Ticket Calculator aggregates ticket prices from Disney and a number of online ticket vendors. Answer a few questions relating to the size of your party and the parks you intend to visit, and the calculator will identify your four cheapest ticket options. It’ll also show you how much you’ll save versus buying at the gate.</p>
        <p className='mb-2'>The program will also make recommendations for considerations other than price. For example, Annual Passes might cost more, but Disney often offers substantial resort discounts and other deals to Annual Passholders. These resort discounts, especially during the off-season, can more than offset the price of the pass.</p>
        <p className='mb-2'>The Ticket Calculator will automatically use all of the tips below, and more. If you’re interested in doing this yourself, here’s what to consider</p>
      </div>
      <div className='md:flex gap-x-6  justify-around md:mb-8'>
        <SaveMoneyCard count="1" description="Be realistic about what you want out of your vacation. A seven-day theme park ticket with seven PHP admissions might seem like a wonderful idea when you’re snowbound in February and planning your trip. But actually trying to visit all those parks in a week in July might end up feeling more like Navy SEAL training." />
        <SaveMoneyCard count="2" description="If you’re not park-hopping but going to visit just a water park once, you’re almost always better off purchasing that admission separately rather than in the PHP option. If you plan to make two or more PHP venues, or if you’re planning to park-hop, you’re better off buying the add-on." />
        <SaveMoneyCard count="3" description="Buy from a third-party wholesaler. Disney contracts with third-party ticket vendors to offer discounts to price-sensitive consumers who’d only visit if they get some kind of “deal.” By using other companies, Disney doesn’t have to offer those discounts directly to people who’d visit anyway. These vendors sign contracts with Disney and provide exactly the same tickets you’d purchase at Walt Disney World." />

      </div>
      <div className='md:flex gap-x-6  justify-around'>
        <SaveMoneyCard count="4" description="Choose a Start Date earlier than your arrival date. Let’s say you’re visiting Walt Disney World for a four-day weekend starting Sunday, December 24, 2023. If you select December 24 as your first day in the parks when buying a ticket, you’d pay $453.23 per adult with tax. However, if you instead chose Thursday, December 21, 2023 as the first date, you’d pay -$3.51 less per adult. And because both tickets are good for 7 days from the start date, both would be valid during your four-day weekend." />
        <SaveMoneyCard count="5" description="Consider the Park Hopper Plus add-on instead of the Flexible Dates add-on. This tip works if you’re going to park-hop and you need your tickets to be valid for one day longer than the default duration. (For example, you’re going to visit three parks over 6 days, but 1 Park Per Day Tickets expire after 5 days.) Instead of buying the lexible Dates add-on, which costs an additional $33 to $89, purchase the Park Hopper Plus option for a flat $27." />
      </div>
    </Container>
  );
};

export default SaveMoney;