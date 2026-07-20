import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { TiNews } from "react-icons/ti";

import { LinkPreview } from "./LinkPreview";
import { achievements } from "../constants";
import styles from "../style";

const AchievementLink = ({ url, label, children }) => {
  if (!url) return null;

  return (
    <LinkPreview
      url={url}
      className="inline-flex items-center"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="inline-flex items-center text-dimWhite transition-all duration-300 hover:scale-110 hover:text-teal-200"
      >
        {children}
      </a>
    </LinkPreview>
  );
};

const AchievementCard = ({
  icon,
  event,
  position,
  content1,
  content2,
  content3,
  article,
  youtube,
  github,
  project,
}) => {
  const content = [content1, content2, content3].filter(Boolean);
  const bullets = ["🚀", "⚡", "🔥"];

  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="flex h-full flex-col rounded-[20px] border border-gray-700 bg-black-gradient px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-200/20"
    >
      <img
        src={icon}
        alt={`${event} logo`}
        className="mb-4 h-[52px] w-[52px] rounded-full object-contain"
      />

      <div className="flex flex-1 flex-col">
        <h3 className="mb-2 font-poppins text-xl font-semibold leading-7 text-white">
          {event}
        </h3>

        <p className="mb-4 font-poppins text-base font-medium italic text-gradient">
          {position}
        </p>

        <div className="space-y-3">
          {content.map((item, index) => (
            <p
              key={`${event}-${index}`}
              className="font-poppins text-sm leading-6 text-dimWhite"
            >
              <span className="mr-2" aria-hidden="true">
                {bullets[index] || "•"}
              </span>
              {item}
            </p>
          ))}
        </div>
      </div>

      {(article || youtube || github || project) && (
        <div className="mt-6 flex items-center gap-4 border-t border-gray-800 pt-4">
          <AchievementLink
            url={article}
            label={`Read more about ${event}`}
          >
            <TiNews size="1.5rem" />
          </AchievementLink>

          <AchievementLink
            url={youtube}
            label={`Watch ${event} video`}
          >
            <FaYoutube size="1.5rem" />
          </AchievementLink>

          <AchievementLink
            url={github}
            label={`View ${event} on GitHub`}
          >
            <AiFillGithub size="1.5rem" />
          </AchievementLink>

          <AchievementLink
            url={project}
            label={`Open ${event} project`}
          >
            <BsLink45Deg size="1.5rem" />
          </AchievementLink>
        </div>
      )}
    </motion.article>
  );
};

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative mt-10 scroll-mt-24 bg-primary text-white"
    >
      <div className="absolute bottom-40 -left-[50%] z-[0] h-[60%] w-[60%] rounded-full blue__gradient" />

      <div
        className={`${styles.flexCenter} ${styles.paddingX} relative z-[1]`}
      >
        <div className={styles.boxWidth}>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-poppins text-[42px] font-semibold leading-tight text-white ss:text-[55px]"
          >
            Achievements
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <AchievementCard
                key={`${achievement.event}-${achievement.position}`}
                {...achievement}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;