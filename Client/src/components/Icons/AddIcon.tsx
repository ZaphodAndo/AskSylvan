import React from "react";

type AddIconProps = {
  className?: string;
};

function AddIcon(props: AddIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 51 50"
      className={props.className}
    >
      <path
        fill="none"
        stroke="#e291ac"
        strokeWidth="1.6"
        d="M612.365 684.615h11.188"
        transform="matrix(3.9289 0 0 2.93333 -2401.969 -1983.202)"
      ></path>
      <path
        fill="none"
        stroke="#e291ac"
        strokeWidth="1.59"
        d="M612.365 684.615h11.188"
        transform="matrix(0 -3.93274 2.93047 0 -1980.31 2455.264)"
      ></path>
    </svg>
  );
}

export default AddIcon;
