import React from "react";
import { SectionHeading } from "elements/Headings";
import SmallCard, { BigCard } from "components/MyTrips/TripCard";
import Accordion from "components/MyTrips/Accordion";
import Collapsible from "components/MyTrips/Collapsible";
import Event from "components/MyTrips/Event";
import ListItem from "components/MyTrips/ListItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const DashboardTrips = () => {
  return (
    <>
      <div className="flex-1 flex flex-row ">
        <div className=" flex-1   bg-tp-neutral pt-60 ">
          <div className="flex justify-center">
            <div className="max-w-[500px] w-full flex flex-col gap-y-2">
              <SectionHeading>My Trips</SectionHeading>
              <SmallCard />
              <BigCard />
              <SmallCard />
              <SmallCard />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Accordion />
          <div className="flex justify-center w-full">
            <div className="max-w-[70%] w-full mb-[70px]">
              <h2 className="font-semibold text-3xl leading-[46px] text-tp-purple text-center">
                3 months 2 days to go!
              </h2>
              <Collapsible
                isOpen={false}
                heading="9-12 months before"
              ></Collapsible>

              <Collapsible isOpen={true} heading="7-8 months before">
                <ListItem
                  isChecked={false}
                  headingText="Get familiar with Disney World restaurants"
                  headingClass=""
                  isHeadingCutted={false}
                  bodyText="We have current menus and prices at every Disney World restaurant, all searchable.
                Check the best days to visit each park"
                />
                <ListItem
                  isChecked={true}
                  headingText="Get familiar with Disney World restaurants"
                  headingClass=""
                  isHeadingCutted={false}
                  bodyText="We have current menus and prices at every Disney World restaurant, all searchable.
                Check the best days to visit each park"
                />
                <ListItem
                  isChecked={true}
                  headingText="Get familiar with Disney World restaurants"
                  headingClass=""
                  isHeadingCutted={true}
                  bodyText="We have current menus and prices at every Disney World restaurant, all searchable.
                Check the best days to visit each park"
                />
              </Collapsible>
            </div>
          </div>
          <div className="border-b-2 border-black mb-[54px]"></div>
          <div className="flex justify-center w-full">
            <div className="max-w-[70%] w-full mb-[70px]">
              <Event />
              <Event />
              <Event />
              <Event />
              <p className="border-t-2 border-black pt-3 font-bold text-lg text-tp-purple">
                Add a Custom Touring Plan for these dates
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTrips;