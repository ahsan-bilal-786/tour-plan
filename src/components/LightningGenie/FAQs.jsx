import React from 'react';

const FAQCard = () => {
  return (
    <div className='flex-1 mb-9 md:mb-0 border-t-[1px] border-tp-purple-500 pt-5 mx-7 min-h-[90px]'>
      <div className="xs:text-15 md:text-18 md:font-bold mb-2">
        How early or late can I be to my reserved time slot?
      </div>
      <div className="text-15 leading-6">
        Lorem ipsum dolor amet sit.
      </div>
    </div>
  );
};

const FAQs = () => {
  return (
    <section className="bg-white">
      <div className="container max-w-1300 min-h-[496px] mx-auto xs:py-[54px] md:py-[67px]">
        <h1 className="xs:text-24  md:text-30 text-center mb-56 font-groteskSemiBold text-tp-purple font-semibold">FAQs</h1>
        <div className="flex xs:flex-col md:flex-row gap-x-11">
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </div>
      </div>
    </section>
  );
};

export default FAQs;