import React from "react";
import { faker } from "@faker-js/faker";
import roomdetails from "assets/images/roomdetails.png";
import { SectionHeading } from "elements/Headings";
import Container from "components/ParkLanding/elements/Container";

const TableRow = ({ col1, col2, col3, col4, className }) => {
  return (
    <div
      className={`flex flex-row ${className} gap-x-5 py-14 xs:text-15 md:text-18 items-center min-w-fit justify-center`}
    >
      <div className="xs:min-w-[80px] md:min-w-[120px] text-right xs:text-[11px] md:text-[13px] uppercase">
        {col1}
      </div>
      <div className="xs:min-w-[150px] xs:w-[150px] md:w-auto md:flex-1">{col2}</div>
      <div className="xs:min-w-[150px] xs:w-[150px] md:w-auto md:flex-1">{col3}</div>
      <div className="xs:min-w-[150px] xs:w-[150px] md:w-auto md:flex-1">{col4}</div>
    </div>
    
  );
};

const TouringPicks = () => {
  return (
    <Container
      bg="bg-white"
      className=" w-[100vw]"
    >
      <SectionHeading className="text-center xs:text-20 md:text-30 leading-10 mb-7">
        Touring Plans’ Picks
      </SectionHeading>
      <div className="max-w-1085 relative">
        <div className="flex flex-col relative mb-10 whitespace-nowrap overflow-auto w-full">
          <TableRow
            col1={<></>}
            col2={
              <>
                <img src={roomdetails} alt="arrows" className="w-auto" />
              </>
            }
            col3={
              <>
                <img src={roomdetails} alt="arrows" className="w-auto" />
              </>
            }
            col4={
              <>
                <img src={roomdetails} alt="arrows" className="w-auto" />
              </>
            }
          />
          <TableRow
            col1={<>Room #</>}
            col2={<span className="text-tp-purple">6732</span>}
            col3={<span className="text-tp-purple">6733</span>}
            col4={<span className="text-tp-purple">6734</span>}
          />
          <TableRow
            className="bg-tp-purple/20"
            col1={<>Building</>}
            col2={<>{faker.random.word()}</>}
            col3={<>{faker.random.word()}</>}
            col4={<>{faker.random.word()}</>}
          />
          <TableRow
            col1={<>Type</>}
            col2={<>{faker.random.word()}</>}
            col3={<>{faker.random.word()}</>}
            col4={<>{faker.random.word()}</>}
          />
          <TableRow
            className="bg-tp-purple/20"
            col1={<>Floor</>}
            col2={<>{faker.random.word()}</>}
            col3={<>{faker.random.word()}</>}
            col4={<>{faker.random.word()}</>}
          />
        </div>
      </div>
    </Container>
  );
};

export default TouringPicks;
