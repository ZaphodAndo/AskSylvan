import React from "react";

type EyeIconProps = {
  className?: string;
};

function EyeIcon(props: EyeIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 50 28"
      className={props.className}
    >
      <path fill="none" d="M0 .569h50v27.29H0z"></path>
      <path
        fill="none"
        stroke="#e291ac"
        strokeWidth="3.23"
        d="M615.712 203.519c6.196 0 18.053 11.227 18.053 11.227s-11.857 11.227-18.053 11.227c-6.196 0-17.143-11.227-17.143-11.227s10.947-11.227 17.143-11.227z"
        transform="matrix(1.31103 0 0 1.00896 -782.813 -202.457)"
      ></path>
      <circle
        cx="623.924"
        cy="222.657"
        r="8.64"
        fill="none"
        stroke="#e291ac"
        strokeWidth="2.88"
        transform="translate(-792.883 -277.696) scale(1.31103)"
      ></circle>
      <circle
        cx="623.924"
        cy="222.657"
        r="8.64"
        fill="#e291ac"
        transform="translate(-322.263 -109.748) scale(.55674)"
      ></circle>
    </svg>
  );
}

export default EyeIcon;
