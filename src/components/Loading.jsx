import { motion } from "framer-motion";

import styles from "../style";
import { profilePic } from "../assets";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-screen h-screen ${styles.flexCenter} bg-primary`}
      initial={{ scale: 1, opacity: 0.3 }}
      animate={{ scale: 1.3, opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <motion.img
        src={profilePic}
        alt="Dev Kothari"
        className="w-24 h-24 rounded-full object-cover border-4 border-teal-400 shadow-lg shadow-teal-500/30"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 1.6,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

export default Loading;