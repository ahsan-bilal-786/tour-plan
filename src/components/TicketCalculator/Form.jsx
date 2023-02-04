import React from 'react';
import Container from 'elements/Container';
import Button from 'elements/Button';
import Select from 'elements/Form/Select';
import TextField from 'elements/Form/Textfield';
import Radio from 'elements/Form/Radio';

const TicketDetails = () => (
  <div className='xs:text-15 md:text-18 mb-8'>
    <p className='mb-2'>
      <b className='uppercase mr-1 font-eucliarMedium font-medium'>Adult Tickets:</b>
      4-Day 1 Park Per Day Ticket
    </p>
    <p className='mb-2'>
      <b className=' font-eucliarMedium uppercase  font-medium mr-1'>Start Date of 07/11/2022</b>
      <br />
      (valid 07/11/2022 - 08/11/2022)
    </p>
    <p className='mb-2'>
      <b className='font-eucliarMedium  font-medium uppercase mr-1'>Quantity/Price:</b>
      {'5 tickets @ $565.75 each = $2,828.75'}
    </p>
    <p>
      <b className='font-eucliarMedium  font-medium uppercase mr-1'>Vendor:</b>
      <a href="/" className='text-tp-purple ml-1 font-semibold underline'>Boardwalk Ticketing</a>
    </p>
  </div>
)

const Forms = () => (
  <Container bg="bg-white" className="xs:pt-7 md:pt-[57px] xs:pb-0 md:pb-[78px] xs:px-0 md:px-0">
    <div className='xs:mb-8 md:mb-14 xs:mx-7 md:mx-0'>
      <h3 className='text-tp-black-300 font-light	xs:text-18 md:text-30 text-center xs:leading-7 md:leading-46'>
        Answer a few questions and well identify your cheapest ticket options.
      </h3>
    </div>
    <div className='grid xs:grid-cols-1 md:grid-cols-2'>
      <div className='xs:mx-7 md:mx-0 xs:pb-[68px] md:pb-0'>
        <Select
          label="How Many Adults? (Ages 10+)"
          name="adults"
          options={["0 Adults", "1 Adults"]}

        />
        <Select
          label="How Many Children? (Ages 3-9)"
          name="chd"
          options={["0 Children", "1  Children"]}

        />
        <Select
          label="How Many Days In The Parks? (not including water parks)"
          name="prk"
          options={["0 Days", "1  Days"]}

        />
        <Radio
          label="Choose Dates for Your Trip?"
          name="trp"
          options={["Yes", "No"]}
          hint=" Tip: Pick dates, if possible! Date-specific tickets are cheaper than 'Flexible Dates' tickets."

        />
        <div className='flex xs:gap-2 md:gap-10 md:max-w-[500px]'>
          <div classNamSubmite='flex-1'>
            <TextField
              label="First Day in a Park"
              name="firstDay"
              type="date"
              className="bg-tp-neutral rounded-2xl font-eucliarMedium xs:text-4 md:text-6 py-4 border border-tp-neutral"

            />
          </div>
          <div className='flex-1'>
            <TextField
              label="Last Day in a Park"
              name="lastDay"
              type="date"
              className="bg-tp-neutral rounded-2xl font-eucliarMedium xs:text-4 md:text-6 py-4 border border-tp-neutral"

            />
          </div>
        </div>
        <Select
          label="How Many Days At The Water Parks?"
          name="prk2"
          options={["0 Water Parks Day", "1  Water Parks Day"]}

          hint="Make sure water parks are open during your visit!"
        />
        <Radio
          label="Are You a Florida Resident?"
          name="trp1"
          options={["Yes", "No"]}

        />
        <Radio
          label="Are You Going To Return Within 12 Months?"
          name="prk2"
          options={["Yes", "No"]}

        />

        <Radio
          label="Are Third-Party Ticket Vendors OK?"
          name="trp21"
          options={["Yes", "No"]}

        />
        <Button className="bg-black">Find My Best Priced Tickets</Button>
      </div>
      <div className='xs:bg-tp-neutral md:bg-white xs:pt-12 md:pt-0 xs:pb-11 md:pb-0 xs:px-7 md:px-0'>
        <h3 className='text-2xl font-medium leading-7 tracking-normal text-left mb-4'>Ticket Calculator Results</h3>
        <div className='text-tp-numeric-8 xs:text-15 md:text-lg font-normal leading-7 text-left mb-5'>
          <p className='font-bold mb-4'>Each option may include tickets from different vendors, so read the results carefully. All prices shown include taxes and fees, even if the vendor does not add these until checkout.</p>
          <p>Note that some start dates are DIFFERENT from your first day  in the parks. That’s okay, because all of your park days are included in the period for which the ticket is valid, and it may be cheaper!</p>
        </div>

        <div>

          <div className='border-tp-purple-500 border-t py-7 '>
            <div className="text-3xl font-light text-tp-black-300 mb-4 relative xs:pl-[24px] md:pl-[54px]">
              <span className='text-tp-purple font-groteskBold xs:text-[24px] md:text-[30px] absolute left-0 xs:top-[2px] md:top-1'>
                1
              </span>
              Total Cost of $1,112.88
            </div>
            <div className='xs:pl-[24px] md:pl-[54px]'>
              <TicketDetails />
              <TicketDetails />
            </div>
          </div>
          <div className='border-tp-purple-500 border-t py-7'>
            <div className="text-3xl font-light text-tp-black-300 mb-4 relative xs:pl-[24px] md:pl-[54px]">
              <span className='text-tp-purple font-groteskBold xs:text-[24px] md:text-[30px] absolute left-0 xs:top-[2px] md:top-1'>
                2
              </span>
              Total Cost of $1,112.88
            </div>
            <div className='xs:pl-[24px] md:pl-[54px]'>
              <TicketDetails />
            </div>
          </div>


        </div>


      </div>
    </div>

  </Container> 
  );

 
export default Forms;