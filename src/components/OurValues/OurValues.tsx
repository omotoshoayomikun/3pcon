"use client"

import Image from "next/image";
import React from "react";
import { OurValuesData } from "../../../utils/OurServiceData";
import { Button } from "../Form/Button/Button";
import { usePathname, useRouter } from "next/navigation";
import styles from "./OurValues.module.css"

function OurValues() {
  const router = useRouter();
   const pathName = usePathname();

   const handleContact = () => {
    router.push("/contact")
   }
  return (
    <section className={`bg-[#ECE9CC] px-[var(--shared-px)]  ${pathName !== "/" ? "py-[var(--shared-py)]" : "py-[80px]"} w-full relative ${styles.container}`}>
      {/*  */}
      <div 
      className={`${styles.edge}`}
      style={{ display: pathName !== "/" ? "none" : "flex" }}
      >
        <h1 className="md:text-[35px] text-2xl font-semibold text-center text-white tracking-wider z-10">
          Have any Project?
        </h1>
        <div className="mx-auto w-[max-content]">
          <Button
            title="Get Started"
            icon={"/images/arrow2.svg"}
            btnStyle={{
              backgroundColor: "white",
              color: "var(--bg-dark-blue)",
            }}
            iconStyle={{ color: "var(--bg-dark-blue)" }}
            handleClick={handleContact}
          />
        </div>
      </div>
      {/*  */}
      <div className="relative z-[1]">
      <h1 className="text-[40px] font-extrabold text-center ">Our Values</h1>
      <p className="text-center mb-10">
        We are guided by our core Values of Customer Centricity, Courage,
        Respect and Collaboration
      </p>
      </div>
      <div className={styles.container_val}>
        {OurValuesData.map((value, index) => (
          <div key={index} className={`${styles.value_card}`}>
            <div className={styles.value_card_box}>
            <div className="relative w-[40px] h-[40px] mb-5">
              <Image src={value.icon} alt="" fill />
            </div>
            <div className="font-bold text-2xl mb-5">{value.title}</div>
            <p>{value.des}</p>
            </div>
            <div className={styles.clip}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurValues;
