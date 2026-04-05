import Link from "next/link";
import React from "react";

const SecondaryBtn = ({ btnText, href, custom }) => {
  return (
    <Link href={href ? href : "/contact"}>
      <button className={`${custom} cursor-pointer font-serif  font-extralight text-[12px] bg-secondary hover:bg-[#00234c] text-light-blue rounded-full px-8 transition-all ease-in-out duration-300 min-w-[200px] md:min-w-[220px] min-h-[50px]`}>
        {btnText}
      </button>
    </Link>
  );
};

export default SecondaryBtn;