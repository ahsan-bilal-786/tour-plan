import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import TouringPlan from "assets/images/TouringPlan.png"

const UsingTourPlans = () => {
  return (
    <section className="bg-tp-salmon-pink">
      <div className="container max-w-1300 mx-auto bg-primary xs:py-53 md:py-105">
        <div className='flex xs:flex-col md:flex-row xs:px-4 justify-between align-middle items-center '>
          <div className='flex-1 flex justify-start xs:mb-14'>
            <img src={TouringPlan} alt="" className='shadow rounded-full xs:w-[230px] md:w-[400px] h-auto align-middle border-none' />
          </div>
          <div className='flex-1 font-eucliarLight flex flex-col '>
            <div className='md:w-[420px]'>
              <p className='xs:text-24 md:text-30 xs:text-center md:text-left font-light mb-4 xs:leading-8 md:leading-46'>
                Using Touring Plans with Genie+ is like waxing your skis. You’ll still get down the mountain without it, but you’ll get around faster and enjoy yourself more.
              </p>
              <p className='text-white xs:font-medium  md:font-bold xs:text-center md:text-left'>
                <FontAwesomeIcon icon={faCirclePlay} className="mr-2" />
                Watch a video that explains it all</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsingTourPlans;

