"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SubpageHero from "@/components/sections/subpageHero";


const galleryImages = [
  { id: 1, src: "/images/rn-infotech-40.avif", alt: "Gallery Image 1" },
  { id: 2, src: "/images/rn-infotech-46.avif", alt: "Gallery Image 2" },
  { id: 3, src: "/images/rn-infotech-47.avif", alt: "Gallery Image 3" },
  { id: 4, src: "/images/rn-infotech-49.avif", alt: "Gallery Image 4" },
  { id: 5, src: "/images/rn-infotech-50.jpg", alt: "Gallery Image 5" },
  { id: 6, src: "/images/rn-infotech-51.jpg", alt: "Gallery Image 6" },
  { id: 7, src: "/images/rn-infotech-42.avif", alt: "Gallery Image 7" },
  { id: 8, src: "/images/rn-infotech-43.avif", alt: "Gallery Image 8" },
  { id: 8, src: "/images/rn-infotech-44.jpg", alt: "Gallery Image 9" },
  { id: 8, src: "/images/rn-infotech-01.avif", alt: "Gallery Image 10" },
  { id: 8, src: "/images/rn-infotech-02.avif", alt: "Gallery Image 11" },
  { id: 8, src: "/images/rn-infotech-344.jpg", alt: "Gallery Image 12" },
  { id: 8, src: "/images/rn-infotech-03.jpg", alt: "Gallery Image 13" },
  { id: 8, src: "/images/rn-infotech-07.jpg", alt: "Gallery Image 14" },
  { id: 8, src: "/images/rn-infotech-05.jpg", alt: "Gallery Image 15" },
  { id: 8, src: "/images/rn-infotech-06.avif", alt: "Gallery Image 16" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const goPrev = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );

  const goNext = () =>
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <SubpageHero
        title="A Glimpse Into Our Workshop"
        subtitle="Take a look inside RN Infotech — our workspace, our team at work and the laptops we've repaired and restored. Trusted by thousands of customers across Mumbai since 1990."
        breadcrumb="Gallery"
        image="/images/rn-infotech-17.jpg"
        cta1="Schedle A Repair"
        cta2="Contact Us"
        href2="/contact"
      />
      <section className="bg-[#f5f0eb] p-8 lg:py-12 lg:px-16">
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-[100] bg-black flex flex-col">
            {/* Top Bar */}
            <div className="flex justify-between items-center px-4 md:px-8 py-4 text-white">
              {/* Counter */}
              <p className="text-sm md:text-base font-medium">
                {selectedIndex + 1} / {galleryImages.length}
              </p>

              {/* Close button */}
              <button
                onClick={closeImage}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Image Area */}
            <div className="flex-1 flex items-center justify-center relative px-10 md:px-20">
              {/* Prev Button */}
              <button
                onClick={goPrev}
                className="absolute left-2 md:left-6 text-white hover:text-gray-300 transition-colors z-10 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Main Image */}
              <div className="relative w-full max-w-4xl h-[55vh] sm:h-[65vh] md:h-[75vh]">
                <Image
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={goNext}
                className="absolute right-2 md:right-6 text-white hover:text-gray-300 transition-colors z-10 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Click outside to close */}
            <div className="absolute inset-0 z-[-1]" onClick={closeImage} />
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;
