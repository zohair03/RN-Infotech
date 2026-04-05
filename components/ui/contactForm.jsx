"use client";
import { useState } from "react";
import PrimaryBtn from "./buttons/primaryBtn";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col gap-3 md:gap-4 w-full">

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="*Name:"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-[#9aa1ad] rounded-md p-3 md:p-4 text-base md:text-lg font-medium placeholder-[#2d3a4a] outline-none focus:border-primary"
      />

      {/* Email & Phone - stacked on mobile, side by side on sm+ */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <input
          type="email"
          name="email"
          placeholder="*Email:"
          value={formData.email}
          onChange={handleChange}
          className="w-full sm:w-1/2 border border-[#9aa1ad] rounded-md p-3 md:p-4 text-base md:text-lg font-medium placeholder-[#2d3a4a] outline-none focus:border-primary"
        />
        <input
          type="tel"
          name="phone"
          placeholder="*Phone:"
          value={formData.phone}
          onChange={handleChange}
          className="w-full sm:w-1/2 border border-[#9aa1ad] rounded-md p-3 md:p-4 text-base md:text-lg font-medium placeholder-[#2d3a4a] outline-none focus:border-primary"
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        placeholder="*Message:"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        className="w-full border border-[#9aa1ad] rounded-md p-3 md:p-4 text-base md:text-lg font-medium placeholder-[#2d3a4a] outline-none focus:border-primary resize-none"
      />

      {/* Button */}
      <div className="flex justify-center mt-2 md:mt-4">
        <PrimaryBtn
          onClick={handleSubmit}
          btnText="Send Messege"
        />
      </div>

    </div>
  );
};

export default ContactForm;