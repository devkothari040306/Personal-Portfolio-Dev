import styles from "../style";
import { AiOutlineArrowUp } from "react-icons/ai";
import { callToAction } from "../constants";

const LetsConnect = () => {
  const handleClick = () => {
    window.open(callToAction, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Let's Connect"
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row items-center`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Let's</span>
          </p>

          <AiOutlineArrowUp
            className="w-[23px] h-[23px] ml-1"
            aria-hidden="true"
          />
        </div>

        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Connect</span>
          </p>
        </div>
      </div>
    </button>
  );
};

export default LetsConnect;