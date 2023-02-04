import React from 'react';
import map from "lodash/map";
import { SectionHeading } from 'components/ParkLanding/elements/Headings';

const PlanCard = ({ title, footer, details }) => {
  return (
    <div className='mb-[78px]'>
      <div className='uppercase text-13 font-eucliarMedium font-medium pl-[94px] mb-5'>{title}</div>
      {map(details, (detail) => (
        <div className='flex mb-11'>
          <img src={detail.img} alt={detail.title} className="w-68 h-68" />
          <div className='flex-1 pl-[26px] flex flex-col justify-center'>
            <p className='font-light text-2xl'>{detail.title}</p>
            {detail.subTitle && <p className='font-normal text-xs '>{detail.subTitle}</p>}
          </div>
        </div>
      ))}
      <div className='pl-[94px] text-tp-purple font-bold text-lg'>{footer}</div>
    </div>
  );
}


const PlansLayout = ({ title, subtitle, data }) => {
  return (
    <>
      <SectionHeading className="text-center xs:leading-7 xs:mb-11 md:mb-73 md:leading-46 font-groteskBold">
        {title}
        {subtitle && <div className='xs:text-15 md:text-13 font-medium text-black'>
          {subtitle}
        </div>}
      </SectionHeading>
      <div className='grid xs:grid-cols-1 md:grid-cols-3 md:gap-x-[50px] '>
        {map(data, ({ title, footer, details }, key) => (
          <PlanCard key={key} title={title} footer={footer} details={details} />
        ))}
      </div>
    </>
  );
};

export default PlansLayout;