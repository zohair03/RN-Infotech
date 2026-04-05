import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import Faqs from "@/components/sections/faqSection";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import FinalCta from "@/components/sections/finalCtaSection";

export const metadata = {
  title: "Laptop Repair | RN Infotech",
  description: "Computer repairing shop and refurbished laptop selling",
};

const faqs = [
  {
    id: 1,
    question: "Q1. How long will it take to repair my laptop?",
    answer:
      "Most repairs are completed within 2 to 3 business days. However, the exact time may vary depending on the complexity of the issue. We recommend discussing the estimated time before dropping off your device.",
  },
  {
    id: 2,
    question: "Do you repair all laptop brands?",
    answer:
      "Yes, we repair all major brands including Dell, HP, Lenovo, Acer, Asus, Apple, Sony, Toshiba and more.",
  },
  {
    id: 3,
    question: "Will my data be safe during the repair?",
    answer:
      "Yes, we take data privacy very seriously. Our technicians handle your data with complete confidentiality. However, we always recommend taking a backup before submitting your device.",
  },
  {
    id: 4,
    question: "Do I need to bring my AC adapter?",
    answer:
      "Yes, it is recommended to bring your AC adapter so our technician can check the voltage and current for a more accurate diagnosis.",
  },
  {
    id: 5,
    question: "Can I get a repair estimate over the phone?",
    answer:
      "Yes, we provide rough estimates over the phone. For a more accurate quote, we recommend visiting our store for an in-person inspection.",
  },
  {
    id: 6,
    question: "Do you offer a warranty on repairs?",
    answer:
      "Yes, we offer a warranty on our repairs and parts. Please visit our store or call us for details on warranty terms.",
  },
];

const LaptopRepair = () => {
  return (
    <>
      <SubpageHero
        title="Fast & Reliable Laptop Repair in Mumbai"
        subtitle="From hardware failures to software crashes, our expert technicians diagnose and fix all laptop issues quickly and efficiently. Most repairs done within 2–3 business days."
        breadcrumb="Laptop Repair"
        isServicesPage={true}
        image="/images/rn-infotech-54.jpg"
        cta1="Schedule Now"
        cta2="Contact Us"
        href2="/contact"
      />
      <TextAndImageSection
        label="What We Do"
        heading="Complete Laptop Repair Solutions"
        description={
          <p className="flex flex-col gap-3 font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              At RN Infotech, we understand how important your laptop is to your
              daily life. Whether you are a student, a professional or a
              business owner — a broken laptop can bring everything to a halt.
              That's why we offer fast, reliable and affordable laptop repair
              services in Mumbai.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              Our team of experienced and skilled technicians can diagnose and
              fix a wide range of laptop issues — from minor software glitches
              to complex hardware failures. We service all major laptop brands
              including Dell, HP, Lenovo, Acer, Asus, Apple, Sony, Toshiba and
              more.
            </p>
          </p>
        }
        isCtaBtn={false}
        imageSrc="/images/rn-infotech-53.jpg"
      />
      <TextAndImageSection
        label="What's Included"
        heading="Repair Services We Offer"
        description={
          <div className="flex flex-col gap-3">
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Screen Replacement:</span> Cracked
              or damaged screen? We replace screens for all major laptop brands
              quickly and at affordable prices.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">
                Keyboard Repair & Replacement:
              </span>{" "}
              Sticky, broken or unresponsive keys? We repair and replace laptop
              keyboards for all models.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Battery Replacement:</span>{" "}
              Battery draining too fast or not charging? We replace batteries
              with genuine, compatible parts.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Charging Port Repair:</span>{" "}
              Laptop not charging properly? We diagnose and fix all charging
              port issues quickly.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Motherboard Repair:</span> We
              diagnose and repair complex motherboard issues for all major
              laptop brands.
            </p>
          </div>
        }
        isCtaBtn={false}
        imageSrc="/images/rn-infotech-55.jpg"
        imageLeft={true}
        bgColor="bg-section-bg"
      />
      <TextAndImageSection
        label="Our Process"
        heading="How Our Repair Process Works"
        description={
          <div className="flex flex-col gap-3">
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Step 1: </span>Contact Us Call us
              or walk into our store at Grant Road, Mumbai. Describe your issue
              and get a quick estimate.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Step 2: </span>Diagnosis Our expert
              technician will thoroughly inspect and diagnose your laptop to
              identify the exact issue.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Step 3: </span>Repair Once you
              approve the estimate, we get to work. Most repairs are completed
              within 2–3 business days.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Step 4: </span>Delivery Your
              repaired laptop is handed back to you in perfect working condition
              — fully tested and verified.
            </p>
          </div>
        }
        isCtaBtn={false}
        imageSrc="/images/rn-infotech-32.jpg"
      />
      <Faqs image="/images/rn-infotech-57.jpg" faqs={faqs} title="Laptop Repair — Frequently Asked Questions" />
      <FinalCta image="bg-[url('/images/rn-infotech-26.jpg')]" label="Let's Fix It" title="Got a Laptop Problem? We've Got the Solution!" subtitle="Don't let a broken laptop slow you down. Visit us at Grant Road or book a home service today — our expert technicians are ready to help."/>
    </>
  );
};

export default LaptopRepair;
