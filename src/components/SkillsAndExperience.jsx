import React from "react";
import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs";

import { experiences, skills } from "../constants";
import { layout } from "../style";

export const SkillIcon = ({ icon, name }) => {
  return (
    <div className="group flex flex-col items-center text-center">
      <span className="text-[30px] text-white transition-colors duration-300 group-hover:text-teal-200">
        {React.createElement(icon)}
      </span>

      <p className="mt-2 font-poppins text-[12px] text-dimWhite transition-colors duration-300 group-hover:text-white">
        {name}
      </p>
    </div>
  );
};

const SkillCard = ({ title, items }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative mx-2 mb-8 mt-4 border-l border-gray-700 pl-6"
    >
      <div className="absolute -left-[6px] top-3 h-3 w-3 rounded-full border border-gray-900 bg-teal-400" />

      <h3 className="mb-6 font-poppins text-[20px] font-semibold leading-[32px] text-gradient">
        {title}
      </h3>

      <div className="grid grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-3">
        {items.map((item) => (
          <SkillIcon key={item.id || item.name} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const Content = ({ text, link }) => {
  return (
    <p className="mt-3 font-poppins text-[14px] font-normal leading-6 text-dimWhite">
      {text}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open related link"
          className="ml-2 inline-flex align-middle text-white transition-colors duration-300 hover:text-teal-200"
        >
          <BsLink45Deg size="1rem" />
        </a>
      )}
    </p>
  );
};

const ExperienceCard = ({ logo, organisation, positions }) => {
  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full rounded-2xl border border-gray-800 bg-black-gradient p-6"
    >
      <div className="mb-7 flex items-center">
        <img
          src={logo}
          alt={`${organisation} logo`}
          className="h-[52px] w-[52px] rounded-full object-contain"
        />

        <h3 className="ml-4 font-poppins text-[20px] font-semibold leading-[32px] text-gradient">
          {organisation}
        </h3>
      </div>

      <ol className="relative ml-6 border-l border-gray-700">
        {positions.map((position, index) => (
          <li
            key={`${position.title}-${position.duration}`}
            className={`ml-6 ${
              index === positions.length - 1 ? "mb-0" : "mb-8"
            }`}
          >
            <span className="absolute -left-[6px] mt-2 h-3 w-3 rounded-full border border-gray-900 bg-teal-400" />

            <h4 className="font-poppins text-lg font-semibold text-white">
              {position.title}
            </h4>

            <time className="mt-1 block font-poppins text-sm text-gray-400">
              {position.duration}
            </time>

            <div className="mt-3">
              {position.content.map((info, contentIndex) => (
                <Content
                  key={`${position.title}-${contentIndex}`}
                  {...info}
                />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </motion.article>
  );
};

const SkillsAndExperience = () => {
  return (
    <section id="skills" className="mb-16 scroll-mt-24">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-poppins text-[42px] font-semibold leading-tight text-white ss:text-[55px]"
      >
        Skills & Experience
      </motion.h2>

      <div className={`${layout.section} items-start gap-10`}>
        <div className={`mb-6 ml-2 ${layout.sectionInfo}`}>
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              {...skill}
            />
          ))}
        </div>

        <div className="flex flex-1 flex-col items-center justify-start gap-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.organisation}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;