import Link from "next/link";
import React from "react";

const SecondaryBtn = ({ btnText, href, custom }) => {
  return (
    <Link
      href={href ? href : "/contact"}
      className={`${custom} cursor-pointer font-serif font-extralight text-[12px] bg-secondary hover:bg-[#00234c] text-light-blue rounded-full px-8 transition-all ease-in-out duration-300 min-w-[90%] md:min-w-[220px] min-h-[50px] flex items-center justify-center`}
    >
      {btnText}
    </Link>
  );
};

export default SecondaryBtn;