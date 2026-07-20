import { motion } from "framer-motion";

import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} mb-8 flex flex-wrap justify-center gap-6 sm:mb-20`}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id || stat.title}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
          }}
          className="min-w-[160px] rounded-2xl border border-gray-800 bg-black-gradient px-6 py-5 text-center transition-all duration-300 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
        >
          <h3 className="font-poppins text-[34px] font-bold text-white sm:text-[42px]">
            {stat.value}
          </h3>

          <p className="mt-2 font-poppins text-sm uppercase tracking-wider text-gradient sm:text-base">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </section>
  );
};

export default Stats;