import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Container from 'components/ParkLanding/elements/Container';
import { SectionHeading } from 'components/ParkLanding/elements/Headings';
import HorizontalCard from 'components/ParkLanding/elements/HorizontalCard';
import SmallHeadings from 'components/ParkLanding/elements/Headings';
import photoCard from "assets/images/photo-card.png"


const AppleStore = () => (
  <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.2975 4.91984C15.7858 4.33888 16.1581 3.66406 16.3931 2.93415C16.628 2.20424 16.721 1.43361 16.6666 0.666504C15.1675 0.79142 13.7759 1.51925 12.7916 2.69317C12.3203 3.2558 11.9631 3.91034 11.7413 4.61803C11.5194 5.32572 11.4374 6.07216 11.5 6.81317C12.2312 6.81946 12.9541 6.65196 13.6126 6.32365C14.2711 5.99533 14.8476 5.515 15.2975 4.91984ZM18.5525 14.8398C18.5611 13.8182 18.8218 12.8156 19.31 11.9268C19.7982 11.038 20.4976 10.2922 21.3425 9.75984C20.8093 8.96682 20.1045 8.31295 19.2839 7.85007C18.4633 7.38719 17.5495 7.12804 16.615 7.09317C14.6 6.87984 12.74 8.3065 11.6679 8.3065C10.5958 8.3065 9.08456 7.11984 7.40539 7.1465C6.30764 7.18383 5.238 7.51421 4.3008 8.10542C3.36361 8.69663 2.59084 9.52848 2.05789 10.5198C-0.215439 14.5998 1.47664 20.6665 3.74998 23.9598C4.78331 25.5732 6.07498 27.3998 7.77998 27.3332C9.48498 27.2665 10.0404 26.2398 12.0166 26.2398C13.9929 26.2398 14.6 27.3332 16.2791 27.2932C17.9583 27.2532 19.1466 25.6398 20.2316 24.0265C21.0002 22.8552 21.6006 21.5753 22.0141 20.2265C20.9905 19.7759 20.1171 19.0255 19.5019 18.0683C18.8867 17.111 18.5566 15.9886 18.5525 14.8398Z" fill="#F65766" />
  </svg>
)
const AndroidStore = () => (
  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.1422 9.65151C18.8199 9.4815 16.0563 7.91619 15.0193 7.32701L15.0163 7.32501L2.45554 0.246045C2.24155 0.118528 2.0016 0.0381943 1.75248 0.0106632C1.50336 -0.0168679 1.25109 0.00906871 1.01331 0.0866585C0.986478 0.0960636 0.961264 0.105529 0.935179 0.117185C0.874613 0.136455 0.81541 0.159591 0.757953 0.186442C0.51779 0.326572 0.32076 0.527303 0.187596 0.767513C0.0544318 1.00772 -0.00994302 1.27853 0.0012452 1.55144V20.5471C-0.0063773 20.8013 0.0553089 21.053 0.179996 21.2763C0.304684 21.4997 0.487899 21.6867 0.710907 21.8183C0.762343 21.8428 0.815336 21.8641 0.869561 21.882C0.899213 21.8954 0.927481 21.907 0.958077 21.9176C1.10486 21.9695 1.25945 21.9974 1.41557 22C1.71536 21.9968 2.00906 21.917 2.26737 21.7684C2.66574 21.5427 15.0163 14.5819 15.0163 14.5819L19.1372 12.2594C19.392 12.1348 19.607 11.9446 19.7591 11.7093C19.9111 11.4741 19.9945 11.2028 20 10.9247C19.9875 10.6568 19.9012 10.3971 19.7502 10.1731C19.5992 9.94903 19.3892 9.76885 19.1422 9.65151ZM2.05117 18.8425V3.09683L10.1895 10.9601L2.05117 18.8425ZM7.19442 16.6796L11.6463 12.3677L12.8246 13.5062C11.5284 14.2368 9.33837 15.4713 7.19442 16.6797V16.6796ZM11.6446 9.55078L7.13695 5.19543L12.8292 8.40347L11.6446 9.55078ZM14.6649 12.469L13.1015 10.9584L14.6673 9.44181C15.4056 9.86031 16.5562 10.5117 17.3485 10.9569L14.6649 12.469Z" fill="#F65766" />
  </svg>
)


const MinuteAccess = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[49px] md:pt-[100px] xs:pb-[100px] md:pb-[117px]">
      <SectionHeading className="text-center xs:leading-7 xs:mb-11 md:mb-73 md:leading-46">
        Up-to-the minute access to maximize your time
      </SectionHeading>
      <div className='flex xs:flex-col md:flex-row justify-between'>
        <div className='xs:mb-10 md:mb-0'>
          <HorizontalCard img={photoCard} title="Touring Plans">
            <p className='mb-5'>Save up to 4 hours a day, using our researched and tested plans, or create and customize your own.</p>
            <SmallHeadings>View our Touring Plans <FontAwesomeIcon icon={faArrowRight} className="ml-3" /></SmallHeadings>
          </HorizontalCard>
        </div>
        <div>
          <HorizontalCard img={photoCard} title="Lines App">
            <p className='mb-5'>Use our app to keep you updated throughout your stay with the latest park hours, closures and wait times.</p>
            <SmallHeadings className="flex">
              Download the Lines app
              <a href="/" className='mx-2'><AppleStore /></a>
              <a href="/" className='mt-1'><AndroidStore /></a>
            </SmallHeadings>
          </HorizontalCard>
        </div>
      </div>
    </Container>
  );
};

export default MinuteAccess;