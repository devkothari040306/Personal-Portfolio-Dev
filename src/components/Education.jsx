import { motion } from "framer-motion";
import Lottie from "react-lottie-player";

import styles, { layout } from "../style";
import { educationList } from "../constants";
import animationData from "../lotties/quiz-mode-teal-dark.json";

const lottieOptions = {
  loop: true,
  play: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const EducationCard = ({
  icon,
  title,
  degree,
  duration,
  content1,
  content2,
}) => {
  const details = [content1, content2].filter(Boolean);

  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="feature-card flex flex-col gap-5 rounded-[20px] p-6 sm:flex-row"
    >
      <div
        className={`h-[64px] w-[64px] shrink-0 rounded-full bg-dimBlue ${styles.flexCenter}`}
      >
        <img
          src={icon}
          alt={`${title} logo`}
          className="h-[80%] w-[80%] object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="mb-1 font-poppins text-[20px] font-semibold leading-[30px] text-gradient">
          {title}
        </h3>

        <p className="mb-1 font-poppins text-[16px] font-medium leading-[28px] text-white">
          {degree}
        </p>

        <time className="mb-3 font-poppins text-[14px] leading-[26px] text-dimWhite">
          {duration}
        </time>

        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li
              key={`${title}-${index}`}
              className="flex gap-3 font-poppins text-[15px] leading-6 text-dimWhite"
            >
              <span
                aria-hidden="true"
                className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300"
              />

              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

const Education = () => {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-24"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-poppins text-[42px] font-semibold leading-tight text-white ss:text-[55px]"
      >
        Education
      </motion.h2>

      <motion.div
        className={`${layout.sectionReverse} items-center gap-10`}
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div className={`${layout.sectionImgReverse} relative`}>
          <div className="relative z-[5] h-[80%] w-[80%]">
            <Lottie {...lottieOptions} />
          </div>

          <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full" />

          <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full" />
        </div>

        <div className={`${layout.sectionInfo} flex-col gap-6`}>
          {educationList.map((education) => (
            <EducationCard
              key={education.id || education.title}
              {...education}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;