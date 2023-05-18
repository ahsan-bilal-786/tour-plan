import React from "react";
import ListItem from "./ListItems";

const CrossIcon = () => {
  return (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 20L12 11L3 2"
        stroke="#BA272F"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 20L12 11L21 2"
        stroke="#BA272F"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const LinesIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.339844"
      width="59.2315"
      height="59.2315"
      rx="12"
      fill="#F65766"
    />
    <g clip-path="url(#clip0_7144_5687)">
      <path
        d="M23.7958 39.2489V26.2013H30.234C31.4276 26.2234 32.386 27.19 32.386 28.3818C32.386 29.5735 31.4232 30.5402 30.234 30.5622H28.1797V34.9232H30.234C33.868 34.9232 36.8098 31.9924 36.8098 28.3818C36.8098 24.7712 33.8636 21.8403 30.234 21.8403H16.4746C15.8268 23.1954 15.3698 24.6608 15.1479 26.2013H19.412V39.0811C20.6721 40.3479 22.1541 41.3984 23.7958 42.162V39.2489V39.2489Z"
        fill="white"
      />
      <path
        d="M30.2874 13.1626C26.1387 13.1626 22.376 14.809 19.6206 17.475H30.2386C36.273 17.4971 41.1627 22.37 41.1627 28.3774C41.1627 34.3847 36.2774 39.2621 30.2386 39.2798V39.2886H28.1842V43.4509C28.8719 43.5436 29.5774 43.5966 30.2918 43.5966C38.74 43.5966 45.5909 36.7815 45.5909 28.3774C45.5909 19.9733 38.74 13.1626 30.2874 13.1626Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_7144_5687">
        <rect
          width="30.4384"
          height="30.4384"
          fill="white"
          transform="translate(15.1479 13.1626)"
        />
      </clipPath>
    </defs>
  </svg>
);

const DiscussionIcon = () => (
  <svg
    width="103"
    height="103"
    viewBox="0 0 103 103"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M75 9H27C23.8174 9 20.7652 10.2643 18.5147 12.5147C16.2643 14.7652 15 17.8174 15 21V65C15 68.1825 16.2643 71.2348 18.5147 73.4852C20.7652 75.7357 23.8174 76.9999 27 76.9999H37.36L48.16 87.8399C48.5338 88.2107 48.977 88.504 49.4644 88.703C49.9517 88.9021 50.4736 89.003 51 88.9999C51.9534 89 52.8754 88.6596 53.6 88.0399L66.48 76.9999H75C78.1826 76.9999 81.2348 75.7357 83.4853 73.4852C85.7357 71.2348 87 68.1825 87 65V21C87 17.8174 85.7357 14.7652 83.4853 12.5147C81.2348 10.2643 78.1826 9 75 9ZM79 65C79 66.0608 78.5786 67.0782 77.8284 67.8284C77.0783 68.5785 76.0609 69 75 69H65C64.0466 68.9999 63.1246 69.3403 62.4 69.9599L51.2 79.5599L41.84 70.1599C41.4662 69.7892 41.023 69.4959 40.5356 69.2969C40.0483 69.0978 39.5264 68.9969 39 69H27C25.9391 69 24.9217 68.5785 24.1716 67.8284C23.4214 67.0782 23 66.0608 23 65V21C23 19.9391 23.4214 18.9217 24.1716 18.1716C24.9217 17.4214 25.9391 17 27 17H75C76.0609 17 77.0783 17.4214 77.8284 18.1716C78.5786 18.9217 79 19.9391 79 21V65Z"
      fill="#661E46"
    />
    <g clip-path="url(#clip0_4009_2623)">
      <path
        d="M43.5121 56.7096V40.8494H51.3382C52.7891 40.8762 53.9541 42.0512 53.9541 43.4999C53.9541 44.9486 52.7837 46.1236 51.3382 46.1504H48.841V51.4515H51.3382C55.7555 51.4515 59.3315 47.8888 59.3315 43.4999C59.3315 39.111 55.7501 35.5483 51.3382 35.5483H34.6127C33.8252 37.1955 33.2697 38.9768 33 40.8494H38.1832V56.5057C39.715 58.0456 41.5165 59.3226 43.5121 60.2508V56.7096Z"
        fill="white"
      />
      <path
        d="M51.4029 25C46.3599 25 41.7862 27.0013 38.4368 30.242H51.3436C58.6789 30.2689 64.6226 36.1923 64.6226 43.4946C64.6226 50.797 58.6843 56.7258 51.3436 56.7472V56.758H48.8464V61.8176C49.6824 61.9302 50.54 61.9946 51.4083 61.9946C61.6777 61.9946 70.0054 53.7104 70.0054 43.4946C70.0054 33.2789 61.6777 25 51.4029 25Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_4009_2623">
        <rect
          width="37"
          height="37"
          fill="white"
          transform="translate(33 25)"
        />
      </clipPath>
    </defs>
  </svg>
);

const Notification = ({ children }) => {
  return (
    <div className="bg-tp-purple text-center xs:text-15 md:text-lg text-white rounded-lg w-full xs:py-4 xs:px-7 md:px-4 md:py-4 relative">
      {children}
      <div className="absolute xs:top-3 xs:right-2 md:top-[35%] md:w-6 md:h-6 xs:w-18 xs:h-18">
        <CrossIcon />
      </div>
    </div>
  );
};

const EditLink = ({ children }) => {
  return (
    <div className="uppercase text-tp-gray-300  xs:text-[10px] md:text-13 ml-3"></div>
  );
};

const BasicInfo = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="uppercase text-13">
        My profile<EditLink>Edit</EditLink>
      </div>
      <div className="flex flex-col gap-y-1">
        <div>
          Username:{" "}
          <span className="font-semibold font-eucliarSemiBold">
            cameronking
          </span>
        </div>
        <div>
          Email:{" "}
          <span className="font-semibold font-eucliarSemiBold">
            cameron.king@mac.com
          </span>
        </div>
        <div>
          Joined:{" "}
          <span className="font-semibold font-eucliarSemiBold">
            June 2, 2016
          </span>
        </div>
        <div>
          Send Alert?{" "}
          <span className="font-semibold font-eucliarSemiBold">Yes</span>
        </div>
        <div className=" font-semibold font-eucliarSemiBold text-tp-purple">
          Manage Newsletters
        </div>
      </div>
    </div>
  );
};

const Subscription = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="uppercase text-13 mb-2">My Subscription</div>
      <ListItem
        isChecked={true}
        headingText="Walt Disney World Resort"
        headingClass="!font-semibold font-eucliarSemiBold"
        isHeadingCutted={false}
        bodyText={
          <div className="xs:text-13 md:text-15 text-tp-gray-200 font-eucliarLight">
            Premium expires Apr 17, 2023{" "}
          </div>
        }
      />
      <ListItem
        isCrossed={true}
        headingText="Disneyland Resort"
        headingClass="!font-semibold font-eucliarSemiBold"
        isHeadingCutted={false}
        bodyText={
          <>
            <div className="xs:text-13 md:text-15 font-light text-tp-gray-200 font-eucliarLight">
              Expired Dec 3, 2020{" "}
            </div>
            <div className="xs:text-13 md:text-15 font-light text-tp-purple font-eucliarLight">
              Renew Now for $7.95
            </div>
          </>
        }
      />
    </div>
  );
};

const CardItems = ({ color, icon, className }) => {
  return (
    <div
      className={`flex flex-row flex-1 bg-${color} py-4 px-6 text-white rounded-lg justify-between`}
    >
      <div className="flex flex-col gap-y-1">
        <p className="text-[16px] font-semibold font-eucliarSemiBold">
          Discussion Forums
        </p>
        <p className="text-[16px] font-medium">Join our online discussions</p>
      </div>
      <div className={`flex items-center ${className}`}>{icon}</div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="flex flex-col flex-1 gap-y-3">
      <CardItems color="tp-purple-500" className="mr-[-20px]" icon={<DiscussionIcon />} />
      <CardItems color="tp-redoxide-500" className=""  icon={<LinesIcon />} />
    </div>
  );
};

const Accounts = () => {
  return (
    <div className="bg-white border-b-2 border-black pt-7 pb-68 w-full flex justify-center">
      <div className=" xs:w-[90%] md:w-[70%] justify-center items-center">
        <div className="flex flex-col gap-y-3 mb-45">
          <Notification>
            Please fill out our survey about your recently completed vacation.
            <span className="font-medium">– Created 09/25/22</span>
          </Notification>
          <Notification>
            Tomorrow (Mar 13): Start Making Dining and Recreation Reservations
            for Unnamed WDW Trip{" "}
            <span className="font-medium">– Created 09/25/22</span>
          </Notification>
        </div>
        <h2 className="font-semibold font-groteskSemiBold text-tp-purple text-30 mb-9">
          My Account<EditLink>Hide</EditLink>
        </h2>
        <div className="flex xs:flex-col md:flex-row xs:gap-y-7 md:gap-y-0">
          <BasicInfo />
          <Subscription />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Accounts;
