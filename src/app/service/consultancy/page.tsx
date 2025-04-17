import SharedHero from '@/components/Hero/SharedHero/SharedHero';
import React from 'react'
import { ConsultancyData } from '../../../../utils/OurServiceData';
import ServiceContent from '@/components/Service/ServiceContent';

function page() {
  const NavInfo = [
    // {
    //   title: "Service",
    //   url: "/service",
    // },
    {
      title: "Consultancy-Advisory",
      url: "/consultancy",
    },
  ];
  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText="Consultancy & Advisory" />
      <ServiceContent datas={ConsultancyData} />
    </div>
  );
}

export default page