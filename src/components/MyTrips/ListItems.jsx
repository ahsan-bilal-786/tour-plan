const CheckedIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86"
      stroke="#369589"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 4L12 14.01L9 11.01"
      stroke="#369589"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Unchecked = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="11"
      cy="11"
      r="10"
      fill="white"
      stroke="#F65766"
      stroke-width="2"
    />
  </svg>
);

const CrossedIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#BA272F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 9L9 15"
      stroke="#BA272F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 9L15 15"
      stroke="#BA272F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ListItem = ({
  isChecked,
  isCrossed,
  headingText,
  headingClass,
  isHeadingCutted,
  bodyText,
}) => {
  return (
    <div className=" mb-4">
      <div className="flex flex-row relative">
        <div className="absolute">
          {isCrossed ? (
            <CrossedIcon />
          ) : (
            <>{isChecked ? <CheckedIcon /> : <Unchecked />}</>
          )}
        </div>
        <h3
          className={`font-bold xs:text-15 md:text-lg leading-7 text-tp-purple ml-9 mb-1 ${headingClass} ${
            isHeadingCutted ? "line-through" : ""
          }`}
        >
          {headingText}
        </h3>
      </div>
      <p className="font-normal xs:text-15 md:text-lg leading-7 text-black pl-9">
        {bodyText}
      </p>
    </div>
  );
};
export default ListItem;
