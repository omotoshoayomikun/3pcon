import SharedHero from "@/components/Hero/SharedHero/SharedHero";
import React from "react";
import { SoftwareDevData } from "../../../../utils/OurServiceData";
import ServiceContent from "@/components/Service/ServiceContent";

function page() {
  const NavInfo = [
    // {
    //   title: "Service",
    //   url: "/service",
    // },
    {
      title: "Software Development",
      url: "/software-development",
    },
  ];
  return (
    <div className={`mt-[var(--fixed-h-value)]`}>
      <SharedHero value={NavInfo} headerText="Software Develoment" />
      <ServiceContent datas={SoftwareDevData} />
    </div>
  );
}

export default page;
