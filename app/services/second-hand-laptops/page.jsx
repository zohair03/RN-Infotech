import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import Faqs from "@/components/sections/faqSection";
import TextAndImageSection from "@/components/sections/textAndImageSection";
import FinalCta from "@/components/sections/finalCtaSection";

export const metadata = {
  title: "Second Hand Laptops | RN Infotech",
  description: "Computer repairing shop and refurbished laptop selling",
};

const faqs = [
  {
    id: 1,
    question: "Are the second-hand laptops tested before sale?",
    answer:
      "Yes, every laptop goes through a thorough quality check by our expert technicians before it is put up for sale. We ensure all laptops are in good working condition.",
  },
  {
    id: 2,
    question: "Do second-hand laptops come with a warranty?",
    answer:
      "Yes, we provide a warranty on our second-hand laptops. Please visit our store or call us for details on warranty terms and conditions.",
  },
  {
    id: 3,
    question: "Can I exchange my old laptop?",
    answer:
      "Yes, we accept old laptops for exchange. Visit our store and our team will assess your device and offer you the best deal possible.",
  },
  {
    id: 4,
    question: "What laptop brands do you have available?",
    answer:
      "We stock a wide range of brands including Dell, HP, Lenovo, Acer, Asus and more. Availability may vary so we recommend calling us or visiting the store for the latest stock.",
  },
  {
    id: 5,
    question: "Do you offer bulk laptops for businesses?",
    answer:
      "Yes, we offer bulk second-hand laptops for businesses at competitive prices. Contact us directly for bulk pricing and availability.",
  },
  {
    id: 6,
    question: "Can I get a demo before buying?",
    answer:
      "Absolutely! You are welcome to visit our store and test the laptop before making a purchase. We encourage you to inspect the device thoroughly.",
  },
];

const LaptopRepair = () => {
  return (
    <>
      <SubpageHero
        title="Affordable, Quality-Tested Second Hand Laptops in Mumbai"
        subtitle="Get a reliable second-hand laptop that fits your budget — tested, verified and ready to use. Perfect for students, freelancers and small businesses."
        breadcrumb="Second Hand Laptops"
        isServicesPage={true}
        image="/images/rn-infotech-66.jpg"
        cta1="Call Us Now"
        cta2="Visit Our Store"
        href2="/service-area"
      />
      <TextAndImageSection
        label="Why Buy Second Hand"
        heading="Get More Value for Your Money"
        description={
          <div className="flex flex-col gap-3">
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              Why pay full price when you can get a quality laptop for a
              fraction of the cost? At RN Infotech, we offer a wide selection of
              thoroughly tested and verified second-hand laptops — so you get
              great performance without stretching your budget.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              Every laptop we sell goes through a rigorous quality check by our
              expert technicians before it reaches you. From students needing a
              reliable study companion to professionals looking for a work
              laptop on a budget — we have the right device for everyone.
            </p>
          </div>
        }
        isCtaBtn={false}
        imageSrc="/images/rn-infotech-21.jpg"
      />
      <TextAndImageSection
        label="Who It's For"
        heading="The Perfect Laptop for Every Need"
        description={
          <div className="flex flex-col gap-3">
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Students: </span>Affordable and
              reliable laptops for study, assignments and online classes. Great
              performance without burning a hole in your pocket.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Professionals: </span>Need a
              dependable work laptop on a budget? We have a range of tested and
              verified laptops suited for everyday professional use.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Businesses: </span>Looking to
              equip your team without overspending? We offer bulk second-hand
              laptops for businesses at highly competitive prices.
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
        imageSrc="/images/rn-infotech-60.jpg"
        imageLeft={true}
        bgColor="bg-section-bg"
      />
      <TextAndImageSection
        label="Our Promise"
        heading="Why Buy Your Second Hand Laptop from RN Infotech?"
        description={
          <div className="flex flex-col gap-3">
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Thoroughly Tested: </span>Every
              laptop is rigorously tested and verified by our expert technicians
              before sale. No surprises — just quality.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Honest Pricing: </span>We offer
              fair and transparent pricing on all our second-hand laptops. No
              hidden costs, no gimmicks.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Trusted Since 1990: </span>With
              over 30 years in the business, RN Infotech is a name Mumbai
              trusts. Buy with complete confidence.
            </p>
            <p className="font-sans max-[380px]:text-sm text-lg 2xl:text-xl text-start font-sans">
              <span className="font-semibold">Exchange Available: </span>Have an
              old laptop? Exchange it for a second-hand or new one. Visit our
              store and get the best deal.
            </p>
          </div>
        }
        isCtaBtn={false}
        imageSrc="/images/rn-infotech-66.jpg"
      />
      <Faqs image="/images/rn-infotech-23.jpg" faqs={faqs} title="Second Hand Laptops — Frequently Asked Questions" />
      <FinalCta
        label="Find Your Laptop Today"
        title="Looking for an Affordable Laptop in Mumbai?"
        subtitle="Visit RN Infotech at Grant Road and browse our wide range of quality-tested second-hand laptops. The right laptop at the right price — guaranteed."
        cta1="Call Us Now"
        cta2="Visit Our Store"
        href2="/service-area"
        image="bg-[url('/images/rn-infotech-59.jpg')]"
        height="max-sm:h-[80vh]"
      />
    </>
  );
};

export default LaptopRepair;
