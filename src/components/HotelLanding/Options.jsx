import React from 'react';
import OptionsCard from 'components/HotelLanding/OptionsCard';

const Options = () => {
  return (
    <section className="bg-tp-neutral">
      <div className="container mx-auto bg-primary text-center py-67">
        <h1 className="text-30 mb-63 font-groteskSemiBold text-tp-purple font-semibold">What are my options for Disney hotels?</h1>
        <div className='flex flex-col md:flex-row gap-x-3'>
          <OptionsCard />
          <OptionsCard />
          <OptionsCard />
          <OptionsCard />
        </div>
      </div>
    </section>
  );
};

export default Options;