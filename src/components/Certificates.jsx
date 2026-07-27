import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";

import { certificates } from "../constants";
import styles from "../style";

const CertificateCard = ({ title, issuer, date }) => {
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
      <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-dimBlue">
        <HiBadgeCheck className="text-teal-300" size="1.6rem" />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="mb-2 font-poppins text-xl font-semibold leading-7 text-white">
          {title}
        </h3>

        <p className="mb-1 font-poppins text-base font-medium italic text-gradient">
          {issuer}
        </p>

        <time className="font-poppins text-sm leading-6 text-dimWhite">
          {date}
        </time>
      </div>
    </motion.article>
  );
};

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="mb-16 scroll-mt-24"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-poppins text-[42px] font-semibold leading-tight text-white ss:text-[55px]"
      >
        Certificates
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            {...certificate}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
