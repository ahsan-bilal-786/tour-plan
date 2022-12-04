import React from 'react';
import StarFilled from "assets/images/star-filled.png"
import StarEmpty from "assets/images/star-empty.png"
import StarPartial from "assets/images/star-partial.png"

const RatingStars = ({ size = 18 }) => (
  <div className='flex gap-x-2'>
    <img alt="imagealt" width={size} height={size} src={StarFilled} />
    <img alt="imagealt" width={size} height={size} src={StarFilled} />
    <img alt="imagealt" width={size} height={size} src={StarPartial} />
    <img alt="imagealt" width={size} height={size} src={StarEmpty} />
    <img alt="imagealt" width={size} height={size} src={StarEmpty} />
  </div>
)


export const AttractionCard = () => {
  return (
    <div className='flex xs:flex-col md:flex-row pt-7 pb-12 items-center'>
      <div className='w-[128px] md:w-[175px] xs:mb-3 md:mb-0 mr-2 md:mr-12 shrink-0 md:shrink-1'>
        <img alt="imagealt" className='shadow rounded-full max-w-full h-auto align-middle border-none' src="https://via.placeholder.com/223x223.png" />
      </div>
      <div>
        <div className='flex flex-col md:flex-row gap-x-5'>
          <div className='md:w-1/2 md:mb-0'>
            <h3 className="text-18 xs:text-center md:text-left font-bold text-tp-purple mb-1">Haunted Mansion</h3>
            <div className='flex xs:justify-center md:justify-start items-center mb-5'>
              <RatingStars size={12} />
              <div className='text-tp-purple text-13 font-medium ml-5'>
                8,200
              </div>
            </div>
          </div>
          <div className='md:w-1/2 mb-2 md:mb-0 xs:text-center md:text-left'>
            <div className="text-13  md:leading-7 text-eucliarMedium font-medium uppercase" >#10 of 38 magic kingdom attractions</div>
            <div className="text-13  mb-2 text-eucliarMedium font-medium uppercase" >RESTRICTIONS: 40'' or taller</div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-x-5'>
          <div className='md:w-1/2 flex flex-col md:gap-y-3'>
            <div className='xs:mb-4 md:mb-0 font-normal'>Lorem ipsum dolor sit lorem adipiscing disney lorem amet ipsum set imagineering.</div>
          </div>
          <div className='md:w-1/2 flex flex-col md:gap-y-3'>
            <div className='flex justify-between'>
              <div>
                <div className="text-13 mb-2 text-eucliarMedium font-medium uppercase" >PRESCHOOL: 4</div>
                <div className="text-13 mb-2 text-eucliarMedium font-medium uppercase">Grade schooL: 4</div>
                <div className="text-13 mb-2 text-eucliarMedium font-medium uppercase">teens: 4.5</div>
              </div>
              <div >
                <div className="text-13 mb-2 text-eucliarMedium font-medium uppercase">young adults: 4</div>
                <div className="text-13 mb-2 text-eucliarMedium font-medium uppercase">over 30: 4.5</div>
                <div className="text-13 mb-2 text-eucliarMedium font-medium uppercase">seniors: 4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default AttractionCard;