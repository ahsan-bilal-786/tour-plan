import React from "react";
import { SectionHeading } from "elements/Headings";
import { faker } from "@faker-js/faker";
import Button from "elements/Button";
import Container from "components/ParkLanding/elements/Container";

const PrivateNotes = () => {
  return (
    <Container
      bg="bg-white"
      className="xs:pt-[49px] md:pt-[98px] xs:pb-[80px] md:pb-[117px]"
    >
      <div className="border-b border-tp-purple leading-10 flex justify-between mb-[72px]">
        <SectionHeading>My Private Comments</SectionHeading>
        <p>
          Mark rooms as favorites, leave comments, compare rooms, and much more!
        </p>
      </div>

      <div className="flex">
        <div className="flex-1">
          <Button className="bg-black">Subscribe Now</Button>
        </div>
      </div>
    </Container>
  );
};


export default PrivateNotes;
