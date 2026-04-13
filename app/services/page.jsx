import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "@/components/ui/buttons/primaryBtn";
import CallButton from "@/components/ui/buttons/callButton";

export const metadata = {
  title: "Services | RN Infotech",
  description: "Computer repairing shop and refurbished laptop selling",
};

const services = [
  // Repair Services
  {
    id: "01",
    title: "Laptop Screen Replacement",
    description:
      "Cracked or damaged screen? We replace screens for all major laptop brands quickly and at affordable prices.",
    image: "/images/rn-infotech-52.webp",
    href: "/services/laptop-repair",
  },
  {
    id: "02",
    title: "Keyboard Repair & Replacement",
    description:
      "Sticky, broken or unresponsive keys? We repair and replace laptop keyboards for all models.",
    image: "/images/rn-infotech-32.webp",
    href: "/services/laptop-repair",
  },
  {
    id: "03",
    title: "Battery Replacement",
    description:
      "Is your laptop battery draining too fast or not charging? We replace batteries with genuine, compatible parts.",
    image: "/images/rn-infotech-30.webp",
    href: "/services/laptop-repair",
  },
  {
    id: "04",
    title: "Charging Port Repair",
    description:
      "Laptop not charging properly? We diagnose and fix all charging port issues quickly and efficiently.",
    image: "/images/hero-img.webp",
    href: "/services/laptop-repair",
  },
  {
    id: "05",
    title: "Motherboard Repair",
    description:
      "Experienced in diagnosing and repairing complex motherboard issues for all major laptop brands.",
    image: "/images/rn-infotech-57.webp",
    href: "/services/laptop-repair",
  },
  {
    id: "06",
    title: "RAM & Storage Upgrade",
    description:
      "Boost your laptop's performance with a RAM or storage upgrade. We recommend and install the best compatible options for your device.",
    image: "/images/rn-infotech-36.webp",
    href: "/services/ram-and-storage-upgrade",
  },
  // Second Hand Laptops
  {
    id: "07",
    title: "Second Hand Laptops for Students",
    description:
      "Affordable, quality-tested laptops perfect for students. Great performance without burning a hole in your pocket.",
    image: "/images/rn-infotech-66.webp",
    href: "/services/second-hand-laptops",
  },
  {
    id: "08",
    title: "Second Hand Laptops for Professionals",
    description:
      "Need a reliable work laptop on a budget? We have a range of tested and verified laptops suited for professionals.",
    image: "/images/rn-infotech-11.webp",
    href: "/services/second-hand-laptops",
  },
  {
    id: "09",
    title: "Bulk Laptops for Businesses",
    description:
      "Looking to equip your team? We offer bulk second-hand laptops for businesses at competitive prices. Contact us for bulk pricing.",
    image: "/images/rn-infotech-67.webp",
    href: "/services/second-hand-laptops",
  },
  // Laptop Parts & Accessories
  {
    id: "10",
    title: "Laptop Screens & Displays",
    description:
      "Genuine replacement screens for all major laptop brands and models. Get a crystal clear display again.",
    image: "/images/rn-infotech-07.webp",
    href: "/services/laptop-repair",
  },
  {
    id: "11",
    title: "Laptop Batteries",
    description:
      "Original and compatible replacement batteries for all major laptop brands. Long-lasting and reliable.",
    image: "/images/rn-infotech-12.webp",
    href: "/services/laptop-repair",
  },
  {
    id: "12",
    title: "Chargers & Adapters",
    description:
      "Original and compatible laptop chargers and adapters for all brands. Safe, durable and fairly priced.",
    image: "/images/rn-infotech-78.webp",
    href: "/services/laptop-repair",
  },
  {
    id: "13",
    title: "Hard Drives & SSDs",
    description:
      "Upgrade your storage with quality hard drives and SSDs. We stock a wide range of compatible options.",
    image: "/images/rn-infotech-77.webp",
    href: "/services/ram-and-storage-upgrade",
  },
  {
    id: "14",
    title: "RAM Modules",
    description:
      "Boost your laptop's speed and multitasking ability with compatible RAM upgrades. Available for all major models.",
    image: "/images/rn-infotech-ram.webp",
    href: "/services/ram-and-storage-upgrade",
  },
  {
    id: "15",
    title: "Keyboards & Touchpads",
    description:
      "Replacement keyboards and touchpads for all major laptop brands. Genuine parts, smooth typing experience.",
    image: "/images/rn-infotech-54.webp",
    href: "/services/laptop-repair",
  },
  // Home Service
  {
    id: "16",
    title: "Laptop Repair at Home",
    description:
      "Can't visit us? Our expert technician will come to your home and repair your laptop right at your doorstep.",
    image: "/images/rn-infotech-56.webp",
    href: "/services/laptop-repair",
  },
  {
    id: "17",
    title: "Office Visit Service",
    description:
      "We also offer office visit services for businesses. Get your team's laptops repaired without disrupting your workflow.",
    image: "/images/rn-infotech-55.webp",
    href: "/services/laptop-repair",
  },
];

const Services = () => {
  return (
    <section className="py-8 px-6 sm:px-8 lg:py-12 lg:px-16 2xl:px-35">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-8 md:mb-10">
        <div className="flex flex-col sm:gap-2">
          <p className="label text-center font-semibold">What We Offer</p>
          <h2 className="max-[380px]:text-2xl text-h2 md:text-3xl lg:text-4xl  font-serif sm:text-3xl text-center max-[380px]:leading-12 leading-11">
            Our Complete Range of Services
          </h2>
        </div>
        <p className="text-black/80 text-center font-sans max-[380px]:text-sm text-lg md:text-lg lg:text-xl w-[90%] md:w-auto">
          We offer a wide range of laptop and computer solutions to meet every need and budget.
        </p>
      </div>

      {/* Cards — flex-wrap for 2 rows of 3 on desktop */}
      <div className="flex flex-col xl:flex-row sm:flex-wrap gap-6 justify-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="transition-transform duration-400 hover:-translate-y-2 relative w-full xl:w-[calc(33.333%-16px)] h-[450px] md:h-[380px] lg:h-[425px] xl:h-[500px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0"
          >
            {/* Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1280px) 100vw, 33vw"
              className="object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col lg:items-start lg:text-start gap-2 md:pb-8">
              <h3 className="text-white text-start font-serif normal-case max-[380px]:text-2xl text-2xl md:text-3xl lg:text-3xl xl:text-3xl max-[380px]:leading-11 leading-11 xl:leading-14">
                {service.title}
              </h3>
              <p className="text-white/80 font-sans text-base md:tex-base  leading-6 lg:max-xl:w-[85%] max-[380px]:leading-6">
                {service.description}
              </p>
              <Link href={service.href} className="pt-2">
                <button className="cursor-pointer font-semibold text-[16px] border border-white text-white rounded-full bg-transparent hover:bg-white/30 hover:backdrop-blur-lg px-8 transition-all ease-in-out duration-300 w-[200px] min-h-[50px]">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom button */}
      <div className="flex justify-center mt-6 md:mt-10">
        <CallButton custom="w-[240px]" btnText="Shedule Now" />
      </div>
    </section>
  );
};

const ServicesHub = () => {
  return (
    <>
      <SubpageHero
        title="Everything Your Laptop Needs — Under One Roof"
        subtitle="From quick repairs to quality second-hand laptops and genuine spare parts — RN Infotech has been Mumbai's most trusted laptop service destination since 1990."
        breadcrumb="Service Hub"
        image="/images/rn-infotech-57.webp"
        cta1="Call Us Now"
        cta2="Book Home Service"
        href2="/contact"
      />
      <Services/>
    </>
  );
};

export default ServicesHub;