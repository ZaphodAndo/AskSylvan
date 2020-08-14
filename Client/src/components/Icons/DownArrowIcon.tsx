import React from "react";

type DownArrowIconProps = {
  className?: string;
};

function DownArrowIcon(props: DownArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 51 26"
      className={props.className}
    >
      <g transform="matrix(.87655 0 0 .48611 -134.092 44.09)">
        <path fill="none" d="M153.633-90.519h57.042v53.016h-57.042z"></path>
        <clipPath id="a">
          <path d="M153.633-90.519h57.042v53.016h-57.042z"></path>
        </clipPath>
        <g clipPath="url(#a)">
          <path
            fill="none"
            stroke="#e291ac"
            strokeWidth="6.22"
            d="M482.765 38.255l14.604-29.209 14.605 29.209"
            transform="matrix(-1.67943 0 0 -1.31051 1017.45 -33.13)"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default DownArrowIcon;
