import React from "react";
import { AiFillGithub, AiFillFilePdf } from "react-icons/ai";

import Button from "./Button";
import { profilePic } from "../assets";
import { socialMedia, aboutMe, resumeLink, repoLink } from "../constants";
import { layout } from "../style";

const Footer = () => {
  return (
    <footer
      id="contactMe"
      className="bg-gray-900 sm:px-16 px-6 pt-16"
    >
      <div
        className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-10`}
      >
        {/* Left */}
        <div className={layout.sectionInfo}>
          <h2 className="font-poppins font-bold text-3xl text-white">
            {aboutMe.name}
          </h2>

          <p className="font-poppins text-dimWhite text-[17px] leading-[30px] max-w-[520px] mt-4">
            {aboutMe.tagLine}
          </p>

          <div className="flex flex-wrap gap-5 mt-6">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.id}
                className="text-white text-[28px] hover:text-teal-300 transition-colors duration-300"
              >
                {React.createElement(social.icon)}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                text="Resume"
                icon={AiFillFilePdf}
              />
            </a>

            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                text="GitHub"
                icon={AiFillGithub}
              />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center md:justify-end md:ml-auto">
          <img
            src={profilePic}
            alt={`${aboutMe.name} profile`}
            loading="lazy"
            className="w-[220px] h-[220px] rounded-full object-cover border-4 border-teal-300 shadow-xl"
          />
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 py-6 text-center">
        <p className="font-poppins text-dimWhite text-sm">
          © {new Date().getFullYear()} {aboutMe.name}. All Rights Reserved.
        </p>

        <p className="font-poppins text-gray-400 text-xs mt-2">
          Built with React • Vite • Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;