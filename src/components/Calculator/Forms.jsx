import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Container from 'elements/Container';
import Button from 'elements/Button';
import Select from 'elements/Form/Select';
import TextField from 'elements/Form/Textfield';

const TicketAddonsCard = () => {
  return (
    <div className='mb-9 md:mb-0 bg-gradient-to-r from-tp-jacarta to-blue-800 rounded-xl p-5 min-h-[90px] text-white'>
      <div className="xs:text-15 md:text-18 font-bold">
        Option 1: Total Cost of $1,112.88
      </div>
      <div className="text-15 leading-6">
        <ul >
          <li className='border-b-[1px] border-white py-4'>
            <p className='mb-2'><b className='uppercase bold mr-1'>Ticket</b> 4-Day 1 Park Per Day Ticket - Adult - Start Date of 12/27/2022 (valid 12/27/2022-01/02/2023)</p>
            <p className='mb-2'><b className='uppercase bold mr-1'>Quantity/Price</b> 1 ticket for $565.41</p>
            <p><b className='uppercase bold mr-1'>Vendor</b>
              <a href="/" alt="tripstes" className=''>Tripster (Special Link) <FontAwesomeIcon className="mx-1" icon={faArrowRight} /></a>
            </p>
          </li>
          <li className='py-4'>
            <p className='mb-2'><b className='uppercase bold mr-1'>Ticket</b> 4-Day 1 Park Per Day Ticket - Adult - Start Date of 12/27/2022 (valid 12/27/2022-01/02/2023)</p>
            <p className='mb-2'><b className='uppercase bold mr-1'>Quantity/Price</b> 1 ticket for $565.41</p>
            <p ><b className='uppercase bold mr-1'>Vendor</b> <a href="/" alt="tripstes" className=''>Tripster (Special Link) <FontAwesomeIcon className="mx-1" icon={faArrowRight} /></a></p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Forms = () => {
  const [advanceSearch, setAdvanceSearch] = useState(false);
  return (
    <Container bg="bg-tp-neutral" className="xs:pt-[51px] md:pt-[100px] xs:pb-[69px] md:pb-[117px]">
      <div className='xs:mb-10 md:mb-14'>
        <h3 className='font-groteskBold text-tp-purple font-semibold	xs:text-20 md:text-30 text-center xs:leading-7 md:leading-10'>
          Disney Ticket Discount Search
        </h3>
      </div>
      <div className='grid xs:grid-cols-1 md:grid-cols-2'>
        <div className=''>
          <Select
            label="How Many Adults? (Ages 10+)"
            name="adults"
            options={["0 Adults", "1 Adults"]}
            className="md:min-w-[500px]"
          />
        </div>
        <div className=' md:flex md:justify-end'>
          <Select
            label="How Many Children? (Ages 3-9)"
            name="chd"
            options={["0 Children", "1  Children"]}
            className="md:min-w-[500px]"
          />
        </div>
      </div>

      <div className='grid xs:grid-cols-1 md:grid-cols-2'>
        <div className=''>
          <Select
            label="How Many Days In The Parks? (not including water parks)"
            name="prk"
            options={["0 Days", "1  Days"]}
            className="md:min-w-[500px]"
          />
        </div>
        <div className=' flex justify-end'>
          <Select
            label="Choose Dates for Your Trip?"
            name="trp"
            options={["Yes", "No"]}
            hint=" Tip: Pick dates, if possible! Date-specific tickets are cheaper than 'Flexible Dates' tickets."
            className="md:min-w-[500px] "
          />
        </div>
      </div>

      <div className='grid xs:grid-cols-1 md:grid-cols-2'>
        <div className=''>
          <TextField
            label="First Day in a Park"
            name="firstDay"
            type="date"
            className="md:min-w-[500px] "
          />
        </div>
        <div className=' flex justify-end'>
          <TextField
            label="Last Day in a Park"
            name="lastDay"
            type="date"
            className="md:min-w-[500px] "
          />
        </div>
      </div>

      <div className='grid xs:grid-cols-1 md:grid-cols-2'>
        <div className=''>
          <Select
            label="Visit More Than One Park per Day?"
            name="prk"
            options={["Yes", "No"]}
            className="md:min-w-[500px]"
          />
        </div>
        <div className=''></div>
      </div>

      <p
        class={`text-tp-purple cursor-pointer xs:text-15 md:text-18 font-bold mb-1 ${advanceSearch ? "hidden" : ""}`}
        onClick={() => setAdvanceSearch(true)}
      >
        Show Advanced Options<FontAwesomeIcon icon={faArrowRight} className="ml-3" />
      </p>
      <div className={`${advanceSearch ? "" : "hidden"}`}>
        <div className='grid xs:grid-cols-1 md:grid-cols-2'>
          <div className=''>
            <Select
              label="How Many Days At The Water Parks?"
              name="prk2"
              options={["0 Water Parks Day", "1  Water Parks Day"]}
              className="md:min-w-[500px]"
              hint="Make sure water parks are open during your visit!"
            />
          </div>
          <div className=' flex justify-end'>
            <Select
              label="Are You a Florida Resident?"
              name="trp1"
              options={["Yes", "No"]}
              className="md:min-w-[500px]"
            />
          </div>
        </div>
        <div className='grid xs:grid-cols-1 md:grid-cols-2'>
          <div className=''>
            <Select
              label="Are You Going To Return Within 12 Months?"
              name="prk2"
              options={["Yes", "No"]}
              className="md:min-w-[500px]"
            />
          </div>
          <div className=' flex justify-end'>
            <Select
              label="Are Third-Party Ticket Vendors OK?"
              name="trp21"
              options={["Yes", "No"]}
              className="md:min-w-[500px]"
            />
          </div>
        </div>
      </div>

      <Button className="bg-black">Submit</Button>

      <div className='pt-16 pb-8'>
        <h6 className='text-tp-purple cursor-pointer xs:text-15 md:text-18 font-bold mb-1 '>Ticket Calculator Results</h6>
        <p>Matching ticket purchase options are listed below, sorted from low-to-high total cost. Each option may include tickets from different vendors, so read the results carefully. All prices shown include taxes and fees, even if the vendor does not add these until checkout.</p>
      </div>

      <div className="mb-8 p-5 text-center bg-tp-bluish-300/50 rounded-xl">
        <h4 className='font-groteskBold text-tp-purple-500 cursor-pointer xs:text-15 md:text-18 font-bold mb-4 '>Save Time and Money!</h4>
        <p className=' mb-2'>This will save you more than $215 on tickets! You can also save up to 7 hours in line during your trip.</p>
        <p className=' mb-2'>Our 365-day Crowd Calendar shows you the best park to visit every day.</p>
        <p className=' mb-2'>Our step-by-step Touring Plans keep you one step ahead of the crowds!</p>
        <a href="/" alt="join" className='text-tp-purple text-18 font-bold'>Join Now <FontAwesomeIcon className="ml-1" icon={faArrowRight} /></a>
      </div>

      <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-x-11 gap-y-11 w-full mb-16">
        <TicketAddonsCard />
        <TicketAddonsCard />
        <TicketAddonsCard />
        <TicketAddonsCard />
        <TicketAddonsCard />

      </div>

      <div className="xs:text-12 md:text-[16px] italic xs:font-bold md:font-medium text-tp-purple text-center">
        NOTE: If you compare disneyworld.com ticket prices, they do not include tax except in the 'Current Selections' area at the bottom. With this calculator, we include it automatically!
      </div>
    </Container>
  );
};

export default Forms;