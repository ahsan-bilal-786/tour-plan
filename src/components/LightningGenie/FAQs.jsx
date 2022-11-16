import React from 'react';

const FAQCard = () => {
  return (
    <div className='flex-1 mb-6 md:mb-0 border-t-[1px] border-tp-purple-500 pt-5'>
      <div className="text-18 font-bold mb-2">
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
    <section className="bg-white ">
      <div className="container mx-auto text-center py-67">
        <h1 className="text-30 mb-56 font-groteskSemiBold text-tp-purple font-semibold">FAQs</h1>
        <div className="flex xs:flex-col md:flex-row gap-x-3">
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </div>
      </div>
    </section>
  );
};

export default FAQs;