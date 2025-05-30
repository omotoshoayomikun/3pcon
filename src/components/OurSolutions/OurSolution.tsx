import React from "react";
import styles from "./OurSolution.module.css";
import Image from "next/image";
import { OurServiceData } from "../../../utils/OurServiceData";
import Link from "next/link";

function OurSolutions() {
  return (
    <section id="main-content" className="px-[var(--shared-px)] py-[var(--shared-py)]">
      <h1 className="special-text">OUR SERVICES</h1>
      <h2 className="text-heading mb-10">We Deliver The Best Solution</h2>
      <div className={`md:mx-0 ${styles.card_container}`}>
        {OurServiceData.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.card_box}>
              <div className={styles.img}>
                <Image
                  src={service.img}
                  alt={service.title}
                  title={service.title}
                  fill
                />
              </div>
              <div className={styles.showText}>
                <Image
                  src={service.showText.icon}
                  alt={service.showText.text}
                  width={50} height={50}
                  className="mx-auto mb-4"
                  />
                  <h3 className="text-white font-bold text-[20px] mb-4">{service.showText.text}</h3>
                  <ul className="list-disc ml-[15px] p-0">
                    {service.showText.list.map((item, index) => (
                      <li key={index} className="text-white">{item}</li>
                    ))}
                  </ul>
                  {/* <div className="mt-auto"> */}
                  <Link href={service.url} className={styles.more_link}>
                  Read More 
                  <Image src="/images/arrow.svg" width={16} height={16} alt="" />
                  </Link>
                  {/* </div> */}
              </div>
              <div className={styles.img_txt}></div>
            </div>
            <div className={styles.card_b_title}>
              <div className="relative w-10 h-10">
                <Image src={service.icon} alt={service.icon} fill />
              </div>
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurSolutions;
