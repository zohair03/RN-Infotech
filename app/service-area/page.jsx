import React from "react";
import SubpageHero from "@/components/sections/subpageHero";
import FinalCta from "@/components/sections/finalCtaSection";

export const metadata = {
  title: "Service Area | RN Infotech",
  description: "Computer repairing shop and refurbished laptop selling",
};

const areas = [
  {
    id: 1,
    icon: "🏙️",
    title: "South Mumbai",
    localities: [
      "Colaba",
      "Churchgate",
      "Fort",
      "Marine Lines",
      "Nariman Point",
      "Cuffe Parade",
      "Malabar Hill",
      "Breach Candy",
      "Tardeo",
      "Grant Road (Our Home Base 📍)",
      "Byculla",
      "Mazgaon",
    ],
  },
  {
    id: 2,
    icon: "🏙️",
    title: "Central Mumbai",
    localities: [
      "Dadar",
      "Parel",
      "Worli",
      "Lower Parel",
      "Sewri",
      "Matunga",
      "Sion",
      "Kurla",
      "Chembur",
      "Ghatkopar",
      "Vikhroli",
      "Mulund",
    ],
  },
  {
    id: 3,
    icon: "🏙️",
    title: "Western Suburbs",
    localities: [
      "Bandra",
      "Khar",
      "Santacruz",
      "Vile Parle",
      "Andheri",
      "Jogeshwari",
      "Goregaon",
      "Malad",
      "Kandivali",
      "Borivali",
      "Dahisar",
    ],
  },
  {
    id: 4,
    icon: "🏙️",
    title: "Eastern Suburbs",
    localities: [
      "Govandi",
      "Mankhurd",
      "Trombay",
      "Bhandup",
      "Kanjurmarg",
      "Nahur",
      "Tilaknagar",
      "Chembur",
      "Ghatkopar East",
      "Vikhroli East",
    ],
  },
  {
    id: 5,
    icon: "🏙️",
    title: "Navi Mumbai & Thane",
    subtitle: "Selected Areas",
    localities: ["Thane", "Vashi", "Nerul", "Belapur", "Kharghar", "Airoli"],
  },
];

const ServiceArea = () => {
  return (
    <>
      <SubpageHero
        title="Serving Customers All Across Mumbai"
        subtitle="Based in Grant Road, RN Infotech proudly serves customers from every corner of Mumbai. Whether you visit our store or book a home service — we've got you covered!"
        breadcrumb="Ram & Storage Upgrade"
        isServicesPage={true}
        image="/images/mumbai-city.webp"
        cta1="Call Us Now"
        cta2="Book Home Service"
        href2="/contact"
      />
      <section className="p-8 lg:py-12 lg:px-16 bg-section-bg">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-8 md:mb-12">
          <p className="label">Our Coverage</p>
          <h2 className="max-[380px]:text-2xl text-h2 md:text-3xl lg:text-4xl  font-serif sm:text-3xl text-center max-[380px]:leading-12 leading-11">
            Areas We Serve in Mumbai
          </h2>
          <p className="text-black/80 text-center font-sans max-[380px]:text-sm text-lg md:text-lg lg:text-xl w-[90%] md:w-auto">
            We serve customers from all major neighbourhoods and localities
            across Mumbai city.
          </p>
        </div>

        {/* Area Cards */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-stretch">
          {areas.map((area) => (
            <div
              key={area.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-4 flex-shrink-0"
            >
              {/* Card Header */}
              <div className="flex flex-col gap-1 border-b border-gray-200 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{area.icon}</span>
                  <h3 className="text-headings font-bold text-lg md:text-xl normal-case text-left">
                    {area.title}
                  </h3>
                </div>
                {area.subtitle && (
                  <p className="text-xs text-gray-400 font-medium pl-8">
                    {area.subtitle}
                  </p>
                )}
              </div>

              {/* Localities List */}
              <ul className="flex flex-col gap-2">
                {area.localities.map((locality, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm md:text-base text-bodytext"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {locality}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="bg-primary/10 border border-primary/30 rounded-2xl px-6 py-4 flex items-center gap-3 max-w-xl text-center">
            <span className="text-2xl flex-shrink-0">📍</span>
            <p className="text-sm md:text-base text-secondary font-medium">
              Based at{" "}
              <span className="font-bold">
                Tara Temple Lane, Grant Road, Mumbai
              </span>{" "}
              — conveniently located to serve all of Mumbai!
            </p>
          </div>
        </div>
      </section>
      <FinalCta
        label="We're Just Around the Corner"
        title="Wherever You Are in Mumbai — We're Here for You!"
        subtitle="Visit our store at Grant Road or book a home service today. Fast, reliable and affordable laptop repair — right at your doorstep."
        cta1="Call Us Now"
        cta2="Book Home Service"
        href2="/contact"
        image="bg-[url('/images/rn-infotech-19.webp')]"
      />
    </>
  );
};

export default ServiceArea;
