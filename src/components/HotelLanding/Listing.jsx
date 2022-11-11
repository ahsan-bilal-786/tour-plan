import React from 'react';
import StarFilled from "assets/images/star-filled.png"
import StarEmpty from "assets/images/star-empty.png"
import StarPartial from "assets/images/star-partial.png"

const RatingStars = ({size = 18}) => (
  <div className='flex gap-x-2'>
    <img alt="imagealt" width={size} height={size} src={StarFilled} />
    <img alt="imagealt" width={size} height={size} src={StarFilled} />
    <img alt="imagealt" width={size} height={size} src={StarPartial} />
    <img alt="imagealt" width={size} height={size} src={StarEmpty} />
    <img alt="imagealt" width={size} height={size} src={StarEmpty} />
  </div>
)

const FilterLinks = ({ title }) => {
  return (
    <div className='pb-16'>
      <div className='text-13 uppercase font-medium mb-5'>{title}</div>
      <ul className='text-tp-purple text-18 font-bold'>
        <li><a href="/">Deluxe Villas</a></li>
        <li><a href="/">Deluxe Villas</a></li>
        <li><a href="/">Deluxe Villas</a></li>
        <li><a href="/">Deluxe Villas</a></li>
      </ul>
    </div>
  );
};

const FilterRating = () => {
  return (
    <div className='pb-16'>
      <div className='text-13 uppercase font-medium mb-5'>FILTER BY RATING</div>
      <div>
        <ul className='text-tp-purple text-18 font-bold'>
          <li className='flex justify-start items-center gap-x-2'><input type="checkbox" /><RatingStars />&amp; Up</li>
          <li className='flex justify-start items-center gap-x-2'><input type="checkbox" /><RatingStars />&amp; Up</li>
          <li className='flex justify-start items-center gap-x-2'><input type="checkbox" /><RatingStars />&amp; Up</li>
          <li className='flex justify-start items-center gap-x-2'><input type="checkbox" /><RatingStars />&amp; Up</li>
        </ul>
      </div>
    </div>
  );
};

const FilterTransportation = () => {
  return (
    <div>
      <div className='text-13 uppercase font-medium mb-5'>FILTER BY TRANSPORTATION</div>
      <div>
        <ul className='text-tp-purple text-18 font-bold'>
          <li className='flex justify-start items-center gap-x-2'><input type="checkbox" />Monorail</li>
          <li className='flex justify-start items-center gap-x-2'><input type="checkbox" />Monorail</li>
          <li className='flex justify-start items-center gap-x-2'><input type="checkbox" />Monorail</li>
          <li className='flex justify-start items-center gap-x-2'><input type="checkbox" />Monorail</li>
        </ul>
      </div>
    </div>
  );
};

const Statsbar = () => {
  return (
    <div className='flex justify-between pb-2 border-b-2 border-black'>
      <div>5 Hotels</div>
      <div>
        SORT A TO Z
      </div>
    </div>
  );
};

const ResortCard = () => {
  return (
    <div className='flex pt-7 pb-12 border-b-2 border-black'>
      <div className='w-[128px] md:w-[175px] mr-2 md:mr-12 shrink-0 md:shrink-1'><img alt="imagealt" className='shadow rounded-full max-w-full h-auto align-middle border-none' src="https://via.placeholder.com/223x223.png" /></div>
      <div>
        <h3 className="text-18 font-bold text-tp-purple mb-1">1. The Cabins at Disney’s Fort Wilderness Resort</h3>
       
        <div className='flex justify-start items-center mb-5'>
          <RatingStars size={12} />
          <div className='text-tp-purple text-13 font-medium ml-5'>
            720px
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-x-5'>
          <div className='md:w-1/2 mb-4 md:mb-0'>
            Like log cabins at any resort mountain town around the country except with the Disney touch.
          </div>
          <div className='md:w-1/2'>
            <div className="text-13  mb-2 font-medium uppercase" >CATEGORY: MODERATE</div>
            <div className="text-13 mb-2 font-medium uppercase">GOOD FOR: WILDERNESS LIVING</div>
            <div className="text-13 mb-2 font-medium uppercase">RECOMMENDATION: <span className="text-tp-green-700">FINE TO STAY</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Listing = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto bg-primary py-67">
        <h1 className="text-30 mb-38 text-center font-groteskSemiBold font-semibold">Viewing All Moderate Resorts</h1>
        <div className='flex'>
          <div className='hidden gap-y-2 md:block md:w-1/4'>
            <FilterLinks title="FILTER BY TOP REVIEWED FOR" />
            <FilterRating />
            <FilterLinks title="FILTER BY LOCATION" />
            <FilterTransportation />
          </div>
          <div className='md:w-3/4'>
            <Statsbar />
            <ResortCard />
            <ResortCard />
            <ResortCard />
          </div>
        </div> 
      </div>
    </section>
  );
};

export default Listing;