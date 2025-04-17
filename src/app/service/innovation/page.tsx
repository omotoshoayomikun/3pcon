import SharedHero from '@/components/Hero/SharedHero/SharedHero';
import React from 'react'
import { InnovationData } from '../../../../utils/OurServiceData';
import ServiceContent from '@/components/Service/ServiceContent';

function page() {
  const NavInfo = [
    // {
    //   title: "Service",
    //   url: "/service",
    // },
    {
      title: "Innovation Management",
      url: "/innovation",
    },
  ];
  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText="Innovation Management" />
      <ServiceContent datas={InnovationData} />
    </div>
  );
}

export default page