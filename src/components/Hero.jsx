import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col-reverse md:flex-row items-center ${styles.paddingY}`}
    >
      {/* Left Section */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <header className="w-full">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-poppins font-medium text-white text-[22px]">
                👋 Hello, I'm
              </p>

              <h1 className="font-poppins font-bold ss:text-[72px] text-[52px] leading-tight text-gradient mt-2">
                {aboutMe.name}
              </h1>

              <h2 className="font-poppins font-medium text-[24px] text-[#5ce1e6] mt-3">
                {aboutMe.tagLine}
              </h2>

              <p className={`${styles.paragraph} max-w-[620px] mt-6`}>
                {aboutMe.intro}
              </p>
            </div>

            <div className="hidden ss:flex">
              <LetsConnect />
            </div>
          </div>
        </header>
      </div>

      {/* Right Section */}
      <div
        className={`flex-1 flex ${styles.flexCenter} relative mb-10 md:mb-0`}
      >
        <div
          className="relative z-[5] w-full max-w-[500px]"
          aria-hidden="true"
        >
          <Lottie
            loop
            play
            animationData={animationData}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient" />
      </div>

      {/* Mobile Button */}
      <div className={`ss:hidden ${styles.flexCenter} mt-6`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;