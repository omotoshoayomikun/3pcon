import SharedHero from '@/components/Hero/SharedHero/SharedHero';
import React from 'react'
import { InnovationData } from '../../../../utils/OurServiceData';
import ServiceContent from '@/components/Service/ServiceContent';
import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "Innovation Management",
  description: "3PCON IT company Innovation Hub is a collaborative space where businesses, startups, and experts come together to drive innovation"
}

function page() {
  const NavInfo = [
    {
      title: "Service",
      url: "/service",
    },
    // {
    //   title: "Innovation Management",
    //   url: "/innovation",
    // },
  ];
  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText="Innovation Management" />
      <ServiceContent datas={InnovationData} />
    </div>
  );
}

export default page