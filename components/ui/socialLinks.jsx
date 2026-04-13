import React from "react";
import Link from "next/link";
import Image from "next/image";

const socilLinks = () => {
  return (
    <div className="flex gap-4 mt-2">
      <Link
        href="https://www.justdial.com/Mumbai/RN-Infotech-Tara-Temple-Lane-Grant-Road/022PXX22-XX22-220226172349-L7Q7_BZDET"
        target="_blank"
        className="transition-transform duration-600 hover:-translate-y-1 text-white hover:text-primary transition-colors flex flex-col items-center justify-center"
      >
        <Image
          src="/icons/just-dial-logo.webp"
          alt="Just Dial Nasir Khan RN Infotech"
          width={70}
          height={70}
          style={{ width: 'auto', height: 'auto' }}
          className=""
        />
      </Link>
    </div>
  );
};

export default socilLinks;
