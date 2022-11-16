import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import TouringPlan from "assets/images/TouringPlan.png"

const UsingTourPlans = () => {
  return (
    <section className="bg-tp-salmon-pink">
      <div className="container mx-auto bg-primary text-center py-105">
        <div className='flex'>
          <div className='flex-1 flex justify-center'>
            <img src={TouringPlan} alt="" className='shadow rounded-full w-[400px] h-auto align-middle border-none' />
          </div>
          <div className='flex-1 font-eucliarLight justify-center flex flex-col items-center'>
            <div className='w-[420px]'>
              <p className='text-30 font-light mb-4'>
                Using Touring Plans with Genie+ is like waxing your skis. You’ll still get down the mountain without it, but you’ll get around faster and enjoy yourself more.
              </p>
              <p className='text-white font-bold'>
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

