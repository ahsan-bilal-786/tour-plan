import React from 'react';
import Container from 'elements/Container';

const FindTicketDiscount = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[49px] md:pt-[92px] xs:pb-[70px] md:pb-[102px]  text-center">

      <h5 class="font-groteskBold text-tp-purple xs:text-24 sm:text-30 font-semibold xs:mb-5 md:mb-6">
        Find Disney World Ticket Discounts and Compare Prices
      </h5>

      <div class="flex justify-center">
        <div class="max-auto xs:text-15 md:text-18 font-normal leading-7 ">
          <p className='mb-2'>Every day we check the Disney World ticket prices from Disney and popular authorized Disney ticket discount wholesalers: Maple Leaf Tickets, Boardwalk Ticketing, Tripster, and Undercover Tourist.</p>
          <p className='mb-2'>We use those prices here, the Disney Ticket Discounts and Deals search engine for Disney World tickets. This search engine will find you the cheapest Disney admission for whatever you want to do.</p>
          <p className='mb-2'>The search engine can find hidden discounts and special prices. It knows all kinds of tips and tricks to save money on Disney tickets, too. For example, it knows that if you only want to visit a Disney water park once and want to hop among the theme parks, adding the Park Hopper Plus option is cheaper than buying a separate 1-day water park ticket.</p>
          <p className='mb-2'>All of the prices shown here include sales tax and shipping. Note that some vendors don't show these fees until the last step in the checkout process.</p>
        </div>
      </div>
    </Container>
  );
};

export default FindTicketDiscount;