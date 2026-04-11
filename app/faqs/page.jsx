"use client";
import { useState } from "react";
import SubpageHero from "@/components/sections/subpageHero";
import PrimaryBtn from "@/components/ui/buttons/primaryBtn";


const faqs = [
  {
    id: 1,
    question: "How long will it take to repair my laptop?",
    answer:
      "It generally takes 2 to 3 business days to repair a laptop. However, the exact time may vary depending on the complexity of the issue. We recommend discussing the estimated service time before dropping off your device.",
  },
  {
    id: 2,
    question: "Do you repair all laptop brands?",
    answer:
      "Yes, we repair all major laptop brands including Dell, HP, Lenovo, Acer, Asus, Apple, Sony, Toshiba and more. Our technicians are experienced in handling all brands and models.",
  },
  {
    id: 3,
    question: "Do I need to bring my AC adapter for repair?",
    answer:
      "Yes, it is recommended to bring your AC adapter along. This helps our technician check the voltage and current for a more accurate diagnosis of the issue.",
  },
  {
    id: 4,
    question: "Can I get a repair estimate over the phone?",
    answer:
      "Yes, we do provide rough estimates over the phone. However, for a more accurate assessment, we recommend visiting our store so our technician can inspect the device in person.",
  },
  {
    id: 5,
    question: "What types of repairs do you handle?",
    answer:
      "We handle a wide range of repairs including screen replacement, keyboard repair, motherboard repair, battery replacement, virus removal, software installation, data recovery, charging port repair and more.",
  },
  {
    id: 6,
    question: "Will my data be safe during the repair?",
    answer:
      "Yes, we take data privacy very seriously. Our technicians handle your data with complete confidentiality. However, we always recommend taking a backup of your important data before submitting your device for repair.",
  },
  {
    id: 7,
    question: "Do you offer home service?",
    answer:
      "Yes, we offer home service for your convenience. Our technician will visit your location and repair your laptop right at your doorstep.",
  },
  {
    id: 8,
    question: "Do you charge extra for home service?",
    answer:
      "No, we do not charge additionally for home service. You only need to pay the standard visiting charges. No hidden fees.",
  },
  {
    id: 9,
    question: "How do I book a home service?",
    answer:
      "You can call us directly to book a home service. Our team will schedule a visit at a time that is convenient for you.",
  },
  {
    id: 10,
    question: "Do you sell second-hand laptops?",
    answer:
      "Yes, we have a wide range of quality-tested second-hand laptops available at affordable prices. All laptops are checked and verified before sale.",
  },
  {
    id: 11,
    question: "Do second-hand laptops come with a warranty?",
    answer:
      "Yes, we provide a warranty on our second-hand laptops. Please visit our store or call us for details on the warranty terms and conditions.",
  },
  {
    id: 12,
    question: "Can I exchange my old laptop for a new or second-hand one?",
    answer:
      "Yes, we do accept old laptops for exchange. Visit our store at Grant Road, Mumbai and our team will assess your device and offer you the best deal.",
  },
  {
    id: 13,
    question: "Do you sell genuine laptop spare parts?",
    answer:
      "Yes, we stock a wide range of genuine laptop spare parts including screens, keyboards, batteries, chargers, RAM, hard drives and more. We ensure all parts are authentic and compatible with your device.",
  },
  {
    id: 14,
    question: "Can I purchase parts without getting a repair done?",
    answer:
      "Absolutely! You are welcome to purchase spare parts directly from our store without availing any repair service.",
  },
  {
    id: 15,
    question: "Where is RN Infotech located?",
    answer:
      "We are located at Tara Temple Lane, Leamington Road, Grant Road, Mumbai. We are easily accessible by all modes of transport.",
  },
  {
    id: 16,
    question: "What are your business hours?",
    answer:
      "We are open Monday to Saturday from 10:00 AM to 9:00 PM. On Sundays, we are available by appointment only.",
  },
  {
    id: 17,
    question: "Do you serve customers outside Grant Road?",
    answer:
      "Yes, we serve customers from all across Mumbai. You can either visit our store or book a home service and we will come to you.",
  },
  {
    id: 18,
    question: "What payment methods do you accept?",
    answer:
      "We accept multiple payment methods including Cash, UPI, Visa / Mastercard / RuPay, Net Banking and Cheque / Demand Draft. We make payments as convenient as possible for our customers.",
  },
  {
    id: 19,
    question: "Do you provide a receipt or invoice for repairs?",
    answer:
      "Yes, we provide a proper receipt and invoice for all repairs and purchases made at RN Infotech.",
  },
];

const FaqItem = ({ faq, isOpen, onToggle }) => (
  <div
    className="border-b border-gray-300 py-4 md:py-5 cursor-pointer"
    onClick={onToggle}
  >
    <div className="flex justify-between items-center gap-4">
      <p className="font-extralight font-serif max-[380px]:text-sm max-[380px]:leading-8 text-lg leading-10 md:text-xl md:leading-12  text-gray-800">
        {faq.question}
      </p>
      {/* + / - button */}
      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-300">
        <span className="text-white text-xl font-light leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </div>
    </div>

    {/* Answer - smooth animation */}
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="mt-3 font-sans max-[380px]:text-sm text-base md:text-lg text-gray-800 max-[380px]:leading-5 leading-relaxed pr-8">
        {faq.answer}
      </p>
    </div>
  </div>
);

const Faqs = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <SubpageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to the most common questions about our laptop repair and computer services in Mumbai. Still have questions? We're just a call away!"
        breadcrumb="FAQs"
        image="/images/rn-infotech-25.webp"
        cta1="Call Us Now"
        cta2="Vist Us"
        href2="/service-area"
      />
      <section className="bg-gray-50 p-8 lg:py-12 lg:px-16">
        <div className="flex flex-col gap-8 md:gap-12 items-center">
          {/* Header */}
          <div className="flex flex-col gap-2 text-center items-center">
            <p className="label">SERVICE CENTER</p>
            <h2 className="max-[380px]:text-2xl text-h2 md:text-3xl lg:text-4xl  font-serif sm:text-3xl text-center max-[380px]:leading-11 leading-14">
              Expert Laptop Solutions & FAQs
            </h2>
          </div>

          {/* Content - stacked on mobile, side by side on desktop */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-start">
            {/* FAQ List */}
            <div className="w-full">
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => handleToggle(faq.id)}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center w-full sm:w-auto">
            <PrimaryBtn href={"/contact"} btnText="Contact Us"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
