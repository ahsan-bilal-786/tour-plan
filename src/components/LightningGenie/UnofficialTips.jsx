import React from 'react';
import UnofficialTipCard from 'components/LightningGenie/UnofficialTipCard';

const UnofficialTip = ({bg} ) => {
  return (
    <section className= {bg || "bg-tp-purple-500"} >
      <div className="container mx-auto bg-primary text-center py-67 text-white">
        <h1 className="text-30 mb-56 font-groteskSemiBold text-tp-purple font-semibold">Unofficial Tips to Maximize Your Time</h1>
        <div className="flex xs:flex-col md:flex-row gap-x-3">
          <UnofficialTipCard  />
          <UnofficialTipCard />
          <UnofficialTipCard />
          <UnofficialTipCard />
        </div>
      </div>
    </section>
  );
};

export default UnofficialTip;