import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | RN Infotech",
  description: "Computer repairing shop and refurbished laptop selling",
};

const ContactUs = () => {
  return (
    <>
      <SubpageHero
        title="Get In Touch With Us"
        subtitle="Have a question, need a repair, or want to book a home service? We're here to help! Reach out to us and our friendly team will get back to you as soon as possible."
        breadcrumb="Contact Us"
        image="/images/rn-infotech-25.webp"
        cta1="Call Us Now"
        cta2="Vist Us"
        href2="/service-area"
      />
      <TextAndImageSection
        label="Our Details"
        socialLinks={true}
        heading="Here's How You Can Reach Us"
        description={
          <div className="flex flex-col gap-3 whitespace-pre-line text-color-bodytext text-lg font-sans leading-relaxed">
            <p className="flex gap-3 flex-col font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start">
              <div className="flex gap-2">
                <div>📍</div>
                <div>
                  Address: Tara Temple Lane, Leamington Road, Grant Road,
                  Mumbai.
                </div>
              </div>
              <div className="flex gap-2">
                <div>📞</div>
                <div>
                  Phone: +91 88797 32594
                </div>
              </div>
              <div className="flex gap-2">
                <div>📧</div>
                <div>
                  Email: Drop us an email and we'll respond at the earliest.
                </div>
              </div>
            </p>

            <p className="flex gap-2 font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start">
              <div>🕙</div>
              <div>
                Business Hours:
                <br />
                Monday – Saturday: 10:00 AM – 9:00 PM
                <br />
                Sunday: By Appointment Only
              </div>
            </p>

            <p className="flex gap-2 font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <div>💳</div>
              <div>
                Payment Methods Accepted: Cash, UPI, Visa | Mastercard | RuPay,
                Net Banking, Cheque | Demand Draft
              </div>
            </p>
          </div>
        }
        cta="Repair Your Machine"
        isClickToCall={true}
        customBtn="w-[255px]"
        imageSrc="/images/rn-infotech-53.webp"
      />
    </>
  );
};

export default ContactUs;
