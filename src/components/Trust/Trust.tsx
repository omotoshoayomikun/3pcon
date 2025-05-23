"use client"

import Image from "next/image";
import React from "react";
import { Button } from "../Form/Button/Button";
import styles from "./Trust.module.css";
import { useRouter } from "next/navigation";

function Trust() {
  const router = useRouter()
  const handleAbout = () => {
    router.push("/about")
  }


  return (
    <section className={`${styles.trust_container}`}>
      <div className="flex-1">
        <div className="flex items-end mb-8">
          <div className="relative w-[80px] h-[80px]">
            <Image src="/images/logo_2.svg" alt="logo image" fill />
          </div>
          <div className="special-text" style={{marginBottom: "0px"}}>ABOUT 3PCON</div>
        </div>
        <h1 className="text-heading">
          Your Trusted Partner <br /> for Tech-Driven Success
        </h1>
        <p className=" my-5">
          A dynamic tech and digital startup with the vision of helping
          businesses and government organisations become more agile and nimble,
          responding to the fast-changing environment and customer needs,
          through the intelligent application of tech and digital for
          pacesetting advantage & sustained prosperity.
        </p>
        <Button title="Read More" icon={"/images/arrow.svg"} handleClick={handleAbout} />

        <div className={`${styles.flex_float}`}>
          <div className="flex items-center gap-3">
            <div className="relative bg-[#D6F0FF] w-[60px] h-[60px] p-5">
              <Image src="/images/solution/x7.svg" alt="arrow image" fill />
            </div>
            <div className="font-bold">
              Business <br /> Growth
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative bg-[#D6F0FF] w-[60px] h-[60px] p-5">
              <Image src="/images/solution/x8.svg" alt="arrow image" fill />
            </div>
            <div className="font-bold">
              Technology <br /> Consultancy
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 md:pt-17 pt-0 relative mb-7">
        <div className={styles.img}>
          <Image src="/images/solution/ladyx.png" alt="" fill objectFit="contain" style={{right: "0"}} />
        </div>
        {/* <div className={styles.background_deco}></div> */}
      </div>
      <div className={styles.vector}></div>
    </section>
  );
}

export default Trust;
