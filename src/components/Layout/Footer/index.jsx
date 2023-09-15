import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="grid md:grid-cols-3 bg-primary w-full px-[3%] py-[3%] items-center justify-center justify-items-center">
      <div className="text-base md:text-lg text-third">
        <p className="py-4 text-center md:text-start">
          2023 AVA REAL ESTATE, LLC. All rights reserved
        </p>
      </div>
      <a
        className="text-third max-lg:py-4 text-center md:text-start"
        href="https://avarealestate.ae/privacy-policy/"
        target="_blank"
      >
        Privacy Policy
      </a>
      <div className="text-base w-[80%] md:w-[50%] text-third max-md:py-4">
        <div className="flex justify-between px-4 text-2xl ">
          <a
            href="https://www.facebook.com/avarealestate.ae"
            aria-label="Visit Our Facebook Page"
            target="_blank"
          >
            <FaFacebook cursor={"pointer"} />
          </a>
          <a
            href="https://www.instagram.com/ava.realestate/"
            aria-label="Visit Our Instegram Page"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/ava-realestate/"
            aria-label="Visit Our Linkedin Page"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.tiktok.com/@avarealestate"
            aria-label="Visit Our tiktok Page"
            target="_blank"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.youtube.com/@avarealestate"
            aria-label="Visit Our Youtube Channel"
            target="_blank"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
