import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import Faqs from "@/components/sections/faqSection";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import FinalCta from "@/components/sections/finalCtaSection";

export const metadata = {
  title: "Ram & Storage Upgrade | RN Infotech",
  description: "Computer repairing shop and refurbished laptop selling",
};

const faqs = [
  {
    id: 1,
    question: "How do I know if my laptop needs a RAM upgrade?",
    answer:
      "If your laptop feels slow, freezes frequently, or struggles with multitasking — a RAM upgrade is likely to help. Visit our store and our technician will assess your device and recommend the best upgrade.",
  },
  {
    id: 2,
    question: "What is the difference between HDD and SSD?",
    answer:
      "An HDD (Hard Disk Drive) is a traditional storage drive that uses spinning disks — it is slower but more affordable. An SSD (Solid State Drive) has no moving parts — it is significantly faster, more durable and energy efficient.",
  },
  {
    id: 3,
    question: "Will upgrading RAM or storage delete my data?",
    answer:
      "No, upgrading your RAM will not affect your data at all. For storage upgrades, we offer data migration services to safely transfer all your existing data to the new drive.",
  },
  {
    id: 4,
    question: "How long does a RAM or storage upgrade take?",
    answer:
      "Most upgrades are completed within the same day or a few hours depending on the device and the type of upgrade required.",
  },
  {
    id: 5,
    question: "How do I know which RAM or SSD is compatible with my laptop?",
    answer:
      "Don't worry — our expert technicians will assess your laptop and recommend the best compatible options for your specific model and usage requirements.",
  },
  {
    id: 6,
    question: "Is an SSD upgrade worth it?",
    answer:
      "Absolutely! An SSD upgrade is one of the most impactful upgrades you can make to an older laptop. Faster boot times, quicker app loading and improved overall performance — all at an affordable cost.",
  },
];

const LaptopRepair = () => {
  return (
    <>
      <SubpageHero
        title="Supercharge Your Laptop's Performance"
        subtitle="Is your laptop feeling slow and sluggish? A RAM or storage upgrade could be all it needs. Fast, affordable and done by expert technicians in Mumbai."
        breadcrumb="Ram & Storage Upgrade"
        isServicesPage={true}
        image="/images/rn-infotech-69.jpg"
        cta1="Call Us Now"
        cta2="Book Home Service"
        href2="/contact"
      />
      <TextAndImageSection
        label="What We Do"
        heading="Give Your Old Laptop a New Life"
        description={
          <div className="flex flex-col gap-3">
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              You don't always need to buy a new laptop when your old one starts
              slowing down. In most cases, a simple RAM or storage upgrade can
              make a world of difference — faster boot times, smoother
              multitasking and better overall performance.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              At RN Infotech, our expert technicians assess your laptop and
              recommend the best compatible RAM and storage options to suit your
              usage and budget. We source quality parts and handle the
              installation — so you get maximum performance without the hassle.
            </p>
          </div>
        }
        isCtaBtn={false}
        imageSrc="/images/rn-infotech-77.jpg"
      />
      <TextAndImageSection
        label="What's Included"
        heading="Upgrade Services We Offer"
        description={
          <div className="flex flex-col gap-3">
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">RAM Upgrade: </span>Boost your
              laptop's speed and multitasking ability with a compatible RAM
              upgrade. We recommend and install the best option for your device
              and budget.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">HDD to SSD Upgrade: </span>Switch
              from a slow hard drive to a lightning-fast SSD. Experience
              dramatically faster boot times, app loading and overall
              performance.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Storage Expansion: </span>Running
              out of storage space? We help you expand your laptop's storage
              capacity with quality hard drives and SSDs.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Data Migration: </span>Upgrading
              your storage? We safely migrate all your existing data to the new
              drive — no data loss, no hassle.
            </p>
          </div>
        }
        isCtaBtn={false}
        imageSrc="/images/rn-infotech-71.jpg"
        imageLeft={true}
        bgColor="bg-section-bg"
      />
      <TextAndImageSection
        label="Benefits of Upgrading"
        heading="Why Upgrade Your RAM & Storage?"
        description={
          <div className="flex flex-col gap-3">
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Faster Performance: </span>A RAM
              upgrade means faster multitasking, smoother browsing and quicker
              app loading — a noticeably snappier experience.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Lightning Fast Boot Times: </span>
              Upgrading to an SSD can reduce your boot time from minutes to
              seconds. Your laptop will feel brand new.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Cost Effective: </span>An upgrade
              costs a fraction of buying a new laptop — and delivers a
              dramatically improved experience.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Better Efficiency: </span>SSDs
              consume less power than traditional hard drives, resulting in
              better battery life and less heat generation.
            </p>
          </div>
        }
        isCtaBtn={false}
        imageSrc="/images/rn-infotech-68.jpg"
      />
      <Faqs
        faqs={faqs}
        image="/images/rn-infotech-36.jpg"
        title="RAM & Storage Upgrade — Frequently Asked Questions"
      />
      <FinalCta
        label="Upgrade Today"
        title="Ready to Give Your Laptop a Speed Boost?"
        subtitle="Don't buy a new laptop just yet! Visit RN Infotech at Grant Road, Mumbai and let our experts upgrade your existing device for a fraction of the cost."
        cta1="Call Us Now"
        cta2="Book Home Service"
        href2="/service-area"
        image="bg-[url('/images/rn-infotech-69.jpg')]"
      />
    </>
  );
};

export default LaptopRepair;
