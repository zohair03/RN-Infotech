import React from "react";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import SubpageHero from "@/components/sections/subpageHero";
import { Content } from "next/font/google";

export const metadata = {
  title: "About Us | RN Infotech",
  description: "Computer reparing shop and refurbhish laptop selling",
};

const AboutUs = () => {
  return (
    <>
      <SubpageHero
        title="Mumbai's Most Trusted Laptop Repair & Services Centre"
        subtitle="Serving customers across Mumbai with honest, reliable and expert laptop solutions since 2008. We are not just a repair shop — we are your trusted tech partner."
        breadcrumb="About Us"
        image="/images/rn-infotech-17.webp"
        cta1="Schedule Now"
        cta2="Our Services"
        href2="/services"
      />
      <TextAndImageSection
        label="Who We Are"
        heading="A Legacy of Trust & Expertise"
        description={
          <div className="flex flex-col gap-3">
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              Established in 2008, RN Infotech is one of Mumbai's most trusted
              and experienced laptop repair and computer service centres.
              Located at Tara Temple Lane, Leamington Road, Grant Road — we have
              been serving thousands of customers across Mumbai for over three
              decades.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              What started as a small repair shop has grown into a one-stop
              destination for all laptop and computer needs. From quick repairs
              to second-hand laptop sales and genuine spare parts — we do it all
              under one roof.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              Our team of skilled technicians and friendly staff are committed
              to delivering honest, high-quality service at affordable prices.
              We believe that every customer deserves the best — and that belief
              has been the foundation of our journey.
            </p>
          </div>
        }
        cta="Repair Your Machine"
        href="/services"
        imageSrc="/images/rn-infotech-shop-02.webp"
      />
      <TextAndImageSection
        label="Our Story"
        heading="From Humble Beginnings to Mumbai's Trusted Name"
        description={
          <div className="flex flex-col gap-3">
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              RN Infotech was founded in 2008 with a simple goal — to provide
              honest and reliable computer repair services to the people of
              Mumbai. Over the years, as technology evolved, so did we. We
              expanded our services, grew our team and built lasting
              relationships with thousands of customers across the city.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              Today, RN Infotech stands as one of the most recognized names in
              laptop repair and services in Grant Road, Mumbai. Our journey has
              been built on hard work, dedication and an unwavering commitment
              to customer satisfaction.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              We are proud of where we started and excited about where we are
              headed — with plans to expand our services and reach even more
              customers across Mumbai in the coming years.
            </p>
          </div>
        }
        cta="Contact Us"
        href="/contact"
        imageSrc="/images/rn-infotech-shop-01.webp"
        imageLeft={true}
        bgColor="bg-section-bg"
      />
    </>
  );
};

export default AboutUs;