"use client";

import React, { useEffect, useState } from "react";


import styles from "./Hero.module.css";

const SliderData = [
  {
    header: "Power Your Digital Future with the Right Solutions",
    des: "Whether you're starting out or scaling up, we’ll help you achieve real, measurable success. Let's talk today.",
  },
  {
    header: "Drive Growth Faster with smarter, streamlined solutions.",
    des: "3PCON delivers simple, effective digital solutions tailored to help your business grow, streamline operations, and achieve measurable success.",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleSlider = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicator = (index: number) => {
    // Clear the existing interval
    if (intervalId) {
      clearInterval(intervalId);
    }

    setCurrentIndex(index);

    // Restart the auto-slide interval
    const newInterval = setInterval(handleSlider, 5000);
    setIntervalId(newInterval);
  };

  useEffect(() => {
    const interval = setInterval(handleSlider, 5000);
    setIntervalId(interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-x-hidden">
      <div
        className={`${styles.hero}`}
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {SliderData.map((data, index) => (
          <div className={styles.hero_container} key={index}>
            <div className={styles.side}>
              <h1>{data.header}</h1>
              <p>
                {data.des}
              </p>
            </div>
            <div className={styles.side}>
              {/* <div className={styles.clip}>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.indicator_container}>
        {SliderData.map((data, index) => (
          <div
            key={index}
            onClick={() => handleIndicator(index)}
            className={styles.indicator}
            style={{
              width: `${index == currentIndex ? "35px" : "14px"}`,
              borderRadius: `${index == currentIndex ? "30px" : "50%"}`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
