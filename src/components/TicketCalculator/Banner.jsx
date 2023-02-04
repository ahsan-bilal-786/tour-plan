import React from 'react';


const Banner = () => {
  return (
    <section className="bg-[url('assets/images/calc_bg.png')] bg-contain text-white">
      <div className="container mx-auto bg-primary text-center xs:pt-[30px] xs:pb-[30px] md:pt-[86px] md:pb-[54px]">
        <h1 className="mx-auto xs:max-w-[302px] md:max-w-[550px]  xs:text-36 md:text-60 xs:mb-4 md:mb-7 xs:leading-[46px] md:leading-[60px] font-groteskBold font-semibold ">Least Expensive Ticket Calculator</h1>
        <div className='xs:text-15 md:text-15 font-normal max-w-[860px] mx-auto'>
          <p>
            Disney World offers more than seven thousand ticket options. Let us help you find the cheapest Disney admission for whatever you want to do. All prices include sales tax and shipping.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;