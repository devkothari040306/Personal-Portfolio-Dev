import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./style";

import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  Footer,
  Projects,
  Loading,
  Achievements,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      window.clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className="bg-primary min-h-screen w-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.main
            key="portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {/* Navbar */}
            <header
              className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}
            >
              <div className={styles.boxWidth}>
                <Navbar />
              </div>
            </header>

            {/* Hero */}
            <div className={`bg-primary ${styles.flexStart} pt-[80px]`}>
              <div className={styles.boxWidth}>
                <Hero />
              </div>
            </div>

            {/* Skills and Education */}
            <div
              className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}
            >
              <div className={styles.boxWidth}>
                <SkillsAndExperience />
                <Education />
              </div>
            </div>

            {/* Achievements */}
            <Achievements />

            {/* Projects */}
            <div
              className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}
            >
              <div className={styles.boxWidth}>
                <Projects />
              </div>
            </div>

            {/* Contact and Footer */}
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;