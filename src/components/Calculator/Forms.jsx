import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Container from 'elements/Container';
import Button from 'elements/Button';
import Select from 'elements/Form/Select';
import TextField from 'elements/Form/Textfield';

const Forms = () => {
  const [advanceSearch, setAdvanceSearch] = useState(false);
  return (
    <Container bg="bg-tp-neutral" className="xs:pt-[51px] md:pt-[100px] xs:pb-[69px] md:pb-[117px]">
      <div className='xs:mb-10 md:mb-14'>
        <h3 className='font-groteskBold text-tp-purple font-semibold	xs:text-20 md:text-30 text-center xs:leading-7 md:leading-10'>
          Disney Ticket Discount Search
        </h3>
      </div>
      <div className='flex xs:grid-cols-1 md:grid-cols-2'>
        <div className='flex-1'>
          <Select
            label="How Many Adults? (Ages 10+)"
            name="adults"
            options={["0 Adults", "1 Adults"]}
            className="md:min-w-[500px]"
          />
        </div>
        <div className='flex-1 flex justify-end'>
          <Select
            label="How Many Children? (Ages 3-9)"
            name="chd"
            options={["0 Children", "1  Children"]}
            className="md:min-w-[500px]"
          />
        </div>
      </div>

      <div className='flex xs:grid-cols-1 md:grid-cols-2'>
        <div className='flex-1'>
          <Select
            label="How Many Days In The Parks? (not including water parks)"
            name="prk"
            options={["0 Days", "1  Days"]}
            className="md:min-w-[500px]"
          />
        </div>
        <div className='flex-1 flex justify-end'>
          <Select
            label="Choose Dates for Your Trip?"
            name="trp"
            options={["Yes", "No"]}
            hint=" Tip: Pick dates, if possible! Date-specific tickets are cheaper than 'Flexible Dates' tickets."
            className="md:min-w-[500px]"
          />
        </div>
      </div>

      <div className='flex xs:grid-cols-1 md:grid-cols-2'>
        <div className='flex-1'>
          <TextField
            label="First Day in a Park"
            name="firstDay"
            type="date"
            className="md:min-w-[500px]"
          />
        </div>
        <div className='flex-1 flex justify-end'>
          <TextField
            label="Last Day in a Park"
            name="lastDay"
            type="date"
            className="md:min-w-[500px]"
          />
        </div>
      </div>

      <div className='flex xs:grid-cols-1 md:grid-cols-2'>
        <div className='flex-1'>
          <Select
            label="Visit More Than One Park per Day?"
            name="prk"
            options={["Yes", "No"]}
            className="md:min-w-[500px]"
          />
        </div>
        <div className='flex-1'></div>
      </div>

      <p 
        class={`text-tp-purple cursor-pointer text-18 font-bold mb-1 ${advanceSearch ? "hidden" : ""}`} 
        onClick={() => setAdvanceSearch(true)}
      >
        Show Advanced Options<FontAwesomeIcon icon={faArrowRight} className="ml-3" />
      </p>
      <div className={`${advanceSearch ? "" : "hidden"}`}>
        <div className='flex xs:grid-cols-1 md:grid-cols-2'>
          <div className='flex-1'>
            <Select
              label="How Many Days At The Water Parks?"
              name="prk2"
              options={["0 Water Parks Day", "1  Water Parks Day"]}
              className="md:min-w-[500px]"
              hint="Make sure water parks are open during your visit!"
            />
          </div>
          <div className='flex-1 flex justify-end'>
            <Select
              label="Are You a Florida Resident?"
              name="trp1"
              options={["Yes", "No"]}
              className="md:min-w-[500px]"
            />
          </div>
        </div>
        <div className='flex xs:grid-cols-1 md:grid-cols-2'>
          <div className='flex-1'>
            <Select
              label="Are You Going To Return Within 12 Months?"
              name="prk2"
              options={["Yes", "No"]}
              className="md:min-w-[500px]"
            />
          </div>
          <div className='flex-1 flex justify-end'>
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
    </Container>
  );
};

export default Forms;