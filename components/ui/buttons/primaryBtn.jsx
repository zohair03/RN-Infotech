import Link from "next/link";
import React from "react";

const primaryBtn = ({ btnText, onClick, href, custom}) => {
  return (
    <Link href={href ? href : "/"}>
      <button
        onClick={onClick}
        className={`${custom} cursor-pointer font-serif  font-extralight text-[12px] bg-primary hover:bg-[#43b1f5] text-secondary rounded-full px-8 transition-all ease-in-out duration-300 min-w-[200px] md:min-w-[220px] min-h-[50px]`}
      >
        {btnText}
      </button>
    </Link>
  );
};

export default primaryBtn;
