import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../ui/buttons/primaryBtn";

const services = [
  {
    id: "01",
    title: "Laptop Repair & Services",
    description:
      "From hardware failures to software crashes, our expert technicians diagnose and fix all laptop issues quickly and efficiently. Most repairs done within 2–3 business days.",
    image: "/images/rn-infotech-30.jpg",
    href: "/services/laptop-repair",
  },
  {
    id: "02",
    title: "Second Hand Laptops",
    description:
      "Get a quality-tested, affordable second-hand laptop that fits your budget. Perfect for students, freelancers, and small businesses looking for value.",
    image: "/images/rn-infotech-11.jpg",
    href: "/services/second-hand-laptops",
  },
  {
    id: "03",
    title: "RAM & Storage Upgrade",
    description:
      "Boost your laptop's performance with a RAM or storage upgrade. We recommend and install the best compatible options for your device.",
    image: "/images/rn-infotech-36.jpg",
    href: "/services/ram-and-storage-upgrade",
  },
];

const Services = () => {
  return (
    <section className="py-8 px-6 sm:px-8 lg:py-12 lg:px-16 2xl:px-35 shadow-[inset_0_50px_40px_-10px_#bfdbfe]">
      
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-8 md:mb-10">
        <div className="flex flex-col gap-2">
          <p className="label text-center font-semibold">What We Do</p>
          <h2 className="text-black text-h2 font-serif sm:text-3xl lg:text-4xl">
            Our Services
          </h2>
        </div>

        <p className="text-black/80 text-center font-sans text-lg lg:text-xl max-w-2xl">
          Reliable laptop & computer solutions — all under one roof.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="group relative transition-transform duration-400 hover:-translate-y-2 h-[420px] rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Optimized Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority={index === 0} // only first image is priority
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1280px) 50vw,
                     33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 p-6 flex flex-col gap-2">
              <h3 className="text-white text-left font-serif max-[380px]:text-2xl text-2xl md:text-3xl lg:text-3xl xl:text-3xl leading-11 sm:leading-14 xl:leading-13">
                {service.title}
              </h3>

              <p className="text-white/80 font-sans text-sm md:text-base leading-6 line-clamp-3">
                {service.description}
              </p>

              <Link href={service.href} className="pt-2">
                <button className="cursor-pointer font-serif font-semibold font-extralight text-[12px] border border-white text-white rounded-full bg-transparent hover:bg-white/30 hover:backdrop-blur-lg px-8 transition-all ease-in-out duration-300 w-[200px] min-h-[50px]">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom button */}
      <div className="flex justify-center mt-8">
        <PrimaryBtn href="/services" btnText="View All Services" />
      </div>
    </section>
  );
};

export default Services;