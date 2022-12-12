import React from 'react';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import Paragraph, { ParagraphNormal } from 'components/ParkLanding/elements/Paragraph';
import Container from 'components/ParkLanding/elements/Container';

const Details = ({ title, children }) => {
  return (
    <div className='md:flex-1 text-white border-t-[1px] border-t-white pt-2'>
      <div className='xs:text-[10px] md:text-13 font-medium uppercase'>{title}</div>
      <div className='xs:mb-0'>{children}</div>
    </div>
  );
}

const TouringTips = () => {
  return (
    <Container bg="bg-tp-purple-500" className="xs:pt-[60px] md:pt-[125px] xs:pb-[52px] md:pb-[127px] text-white">
      <SmallHeadings>Touring Tips</SmallHeadings>
      <div className='flex xs:flex-col md:flex-row md:justify-between'>
        <div className='xs:mb-11 md:mb-0 md:max-w-[420px]'>
          <Details title="WHEN TO GO">
            <div className="font-normal text-24 md:mt-4">First 30 mins the park is open</div>
          </Details>
          <div className='flex gap-5'>
            <div className='flex-1'>
              <Details title="LOADING SPEED">
                <div className="font-normal text-24 md:mt-4">Moderate-Fast</div>
              </Details>
            </div>
            <div className='flex-1'>
              <Details title="EARLY THEME PARK ENTRY?">
                <div className="font-normal text-24 md:mt-4">Yes</div>
              </Details>
            </div>
          </div>
          <div className='flex gap-5'>
            <div className='flex-1'>
              <Details title="WAIT PER 100 PEOPLE AHEAD">
                <div className="font-normal text-24 md:mt-4">5 minutes</div>
              </Details>
            </div>
            <div className='flex-1'>
              <Details title="EXTENDED EVENING HOURS?">
                <div className="font-normal text-24 md:mt-4">Yes</div>
              </Details>
            </div>
          </div>
        </div>
        <div className='md:max-w-[530px]'>
          <ParagraphNormal>
            <p>Seven Dwarfs Mine Train lies somewhere between The Barnstormer and Big Thunder Mountain Railroad—that is, it’s geared to older grade-school kids who’ve been on amusement park rides before. There are no loops, inversions, or rolls in the track, and no massive hills or steep drops; rather, your ride vehicle’s seats swing side-to-side as you go through turns. And—what a coincidence!—Disney has designed a curvy track with steep turns. An elaborate indoor section shows the Seven Dwarfs’ underground mining operation.</p>
            <p>The exterior design includes waterfalls, forests, and landscaping and is meant to join together all of the surrounding Fantasyland’s various locations, including France and Germany. The swinging effect is more noticeable the farther back you’re seated in the train.</p>
          </ParagraphNormal>
        </div>
      </div>
    </Container>
  );
};

export default TouringTips;