import SharedHero from "@/components/Hero/SharedHero/SharedHero";
import React from "react";
import { SoftwareDevData } from "../../../../utils/OurServiceData";
import ServiceContent from "@/components/Service/ServiceContent";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Software Development",
  description: "Help businesses transform ideas into successful software products. From concept to deployment, our development services ensure a scalable, high-quality solution tailored to your needs"
}

function page() {
  const NavInfo = [
    {
      title: "Service",
      url: "/services",
    },
    // {
    //   title: "Software Development",
    //   url: "/software-development",
    // },
  ];
  return (
    <div className={`mt-[var(--fixed-h-value)]`}>
      <SharedHero value={NavInfo} headerText="Software Development" />
      <ServiceContent datas={SoftwareDevData} />
    </div>
  );
}

export default page;
