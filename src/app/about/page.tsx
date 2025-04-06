"use client"

import { Button } from "@/components/Form/Button/Button";
import SharedHero from "@/components/Hero/SharedHero/SharedHero";
import React from "react";
import { AboutData, WhyData } from "../../../utils/OurServiceData";
import OurValues from "@/components/OurValues/OurValues";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./About.module.css"

function page() {
  const router = useRouter();
  const NavInfo = [
    {
     title: "ABOUT US",
     url: "/about",
   }
 ]

 const handleAbout = () => {
  router.push("/service")
 }

  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText="About us" />
      <div className="px-[var(--shared-px)] py-[var(--shared-py)] flex flex-col-reverse md:flex-row gap-10 ">
        <div className="flex-[1.5]">
          <h2 className="mb-7 text-[35px] font-extrabold leading-10">
            Empowering Businesses with Tech and Digital Innovation
          </h2>
          <p>
            A dynamic tech and digital startup committed to helping businesses
            and government organizations stay agile and responsive in a
            fast-changing world. Through the intelligent application of
            technology and digital solutions, we drive innovation, efficiency,
            and sustained growth. Our expertise spans consultancy, advisory
            services, and capability development, empowering organizations to
            navigate challenges and seize new opportunities.
          </p>
          <br />
          <p className="mb-3">
            We recognize the pivotal role of technology in shaping the future of
            products and services. With a strong focus on customer success, we
            deliver tailored solutions that align with each organization&apos;s
            unique goals. By maintaining high professional standards and a
            customer-centric approach, we help businesses achieve both their
            operational and strategic objectives.
          </p>
          <Button title="Expore more" icon={"/images/arrow.svg"} handleClick={handleAbout} />
        </div>
        <div className="flex-1">
          <div className="relative w-full h-[450px]">
            <Image src="/images/solution/man.png" alt="" fill objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="bg-[#F1FFFF] grid md:grid-cols-2 grid-cols-1 gap-8 px-[var(--shared-px)] py-16">
        {AboutData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 bg-[#212C62] text-white rounded-[15px] px-8 py-8"
          >
            <div className="relative w-[60px] h-[60px]">
              <Image
                src={data.icon}
                alt="icon image"
                className=""
                fill
              />
            </div>
            <div>
              <h3 className="text-[20px] font-bold">{data.title}</h3>
              <p>{data.des}</p>
            </div>
          </div>
        ))}
      </div>
      <OurValues />
      <div
        className={`bg-[#ffffff] px-[var(--shared-px)]  py-[var(--shared-py)] w-full relative`}
      >
        <h2 className="mb-7 text-[35px] font-extrabold leading-10 text-center">
          Why 3PCON?
        </h2>
        <div className={styles.why}>
          <div className="flex-1">
            <div className={styles.why_img}>
              <Image src="/images/solution/man2.png" alt="" fill objectFit="contain" /> 
            </div>
          </div>
          <div className="flex-[1.7]">
            {WhyData.map((value, index) => (
              <div className="flex gap-2 mb-3 bg-[#EEF7FF] p-4" key={index}>
                <Image
                  src="/images/solution/checked.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                <p className="font-bold text-[18px]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
