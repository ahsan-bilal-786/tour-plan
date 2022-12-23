import React from 'react';
import Paragraph, { ParagraphNormal } from 'components/ParkLanding/elements/Paragraph';
import Container from 'components/ParkLanding/elements/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Details = ({ title, children }) => {
  return (
    <div className='md:flex-1 text-white border-t-[1px] border-t-tp-brown-300 pt-2 mb-5'>
      <div className='xs:text-[10px] md:text-13 font-medium uppercase text-tp-brown-300'>{title}</div>
      <div className='xs:mb-0'>{children}</div>
    </div>
  );
}

const TouringTips = () => {
  return (
    <Container bg="bg-tp-purple-500" className="xs:pt-[58px] xs:pb-[90px] md:pt-[80px]  md:pb-[100px] text-white  xs:px-7 md:px-0">
      <Paragraph className="mb-[60px] text-white">Touring Tips</Paragraph>
      <div className='flex xs:flex-col md:flex-row md:justify-between'>
        <div className='xs:mb-14 md:mb-0 md:w-[420px] md:flex md:flex-col'>
          <div className='grow'>
            <Details title="WHEN TO GO">
              <div className="font-normal xs:text-18 md:text-24 md:mt-4">First 30 mins the park is open</div>
            </Details>
            <div className='flex gap-5'>
              <div className='flex-1'>
                <Details title="LOADING SPEED">
                  <div className="font-normal xs:text-15 md:text-16 md:mb-4">Moderate-Fast</div>
                </Details>
              </div>
              <div className='flex-1'>
                <Details title="EARLY THEME PARK ENTRY?">
                  <div className="font-normal xs:text-15 md:text-16 md:mb-4">Yes</div>
                </Details>
              </div>
            </div>
            <div className='flex gap-5'>
              <div className='flex-1'>
                <Details title="WAIT PER 100 PEOPLE AHEAD">
                  <div className="font-normal xs:text-15 md:text-16 md:mb-4">5 minutes</div>
                </Details>
              </div>
              <div className='flex-1'>
                <Details title="EXTENDED EVENING HOURS?">
                  <div className="font-normal xs:text-15 md:text-16 md:mb-4">Yes</div>
                </Details>
              </div>
            </div>
          </div>
          <p class="text-tp-purple text-18 font-bold xs:hidden md:block">
            <a href="/">Connect with our travel agents
              <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </a>
          </p>
        </div>
        <div className='md:max-w-[530px]'>
          <ParagraphNormal>
            <p className='mb-2'>Seven Dwarfs Mine Train lies somewhere between The Barnstormer and Big Thunder Mountain Railroad—that is, it’s geared to older grade-school kids who’ve been on amusement park rides before. There are no loops, inversions, or rolls in the track, and no massive hills or steep drops; rather, your ride vehicle’s seats swing side-to-side as you go through turns. And—what a coincidence!—Disney has designed a curvy track with steep turns. An elaborate indoor section shows the Seven Dwarfs’ underground mining operation.</p>
            <p>The exterior design includes waterfalls, forests, and landscaping and is meant to join together all of the surrounding Fantasyland’s various locations, including France and Germany. The swinging effect is more noticeable the farther back you’re seated in the train.</p>
          </ParagraphNormal>
        </div>
      </div>
    </Container>
  );
};

export default TouringTips;