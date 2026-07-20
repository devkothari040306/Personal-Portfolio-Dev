import React, { useState, useEffect, useRef } from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight, BsLink45Deg } from "react-icons/bs";

const ProjectCard = ({
  title,
  image,
  stack,
  content,
  github,
  link,
}) => {
  return (
    <div className="project-card flex-shrink-0 w-[340px] sm:w-[430px] md:w-[500px] mr-8 rounded-2xl feature-card border border-gray-700 p-7 hover:scale-[1.02] transition-all duration-300">
      <div className="flex flex-col h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] object-cover rounded-xl mb-6 border border-gray-700"
        />

        <h2 className="font-poppins font-semibold text-[26px] text-gradient mb-4">
          {title}
        </h2>

        <h3 className="font-poppins text-dimWhite mb-3">
          Tech Stack
        </h3>

        <div className="flex flex-wrap gap-4 mb-6">
          {stack.map((tech) => {
            const key = tech?.id ?? tech?.name ?? tech;
            const label = tech?.name ?? tech;

            return (
              <div
                key={key}
                className="tooltip flex items-center justify-center rounded-full bg-[#111827] p-3 text-[22px] text-white hover:text-teal-300 transition-colors"
              >
                {tech?.icon ? (
                  React.createElement(tech.icon)
                ) : (
                  <span className="text-sm font-medium">{label}</span>
                )}
                <span className="tooltiptext">
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <p className="font-poppins text-dimWhite leading-7 flex-grow">
          {content}
        </p>

        <div className="flex gap-6 mt-8">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-teal-300 transition-colors"
            >
              <AiFillGithub size={28} />
              <span className="font-poppins">GitHub</span>
            </a>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-teal-300 transition-colors"
            >
              <BsLink45Deg size={28} />
              <span className="font-poppins">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current) return;

      const card =
        containerRef.current.querySelector(".project-card");

      if (!card) return;

      const style = window.getComputedStyle(card);

      setCardWidth(
        card.offsetWidth + parseInt(style.marginRight, 10)
      );
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () =>
      window.removeEventListener("resize", updateWidth);
  }, []);

  const nextProject = () => {
    if (currentIndex < projects.length - 1)
      setCurrentIndex((prev) => prev + 1);
  };

  const previousProject = () => {
    if (currentIndex > 0)
      setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section id="projects" className="overflow-hidden">
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-poppins font-semibold text-white ss:text-[55px] text-[42px]">
          Featured Projects
        </h1>

        <div className="flex gap-3">
          <button
            onClick={previousProject}
            disabled={currentIndex === 0}
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-40 transition-colors"
          >
            <BsArrowLeft className="text-white" />
          </button>

          <button
            onClick={nextProject}
            disabled={currentIndex === projects.length - 1}
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-40 transition-colors"
          >
            <BsArrowRight className="text-white" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;