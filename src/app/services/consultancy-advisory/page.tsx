import SharedHero from '@/components/Hero/SharedHero/SharedHero';
import React from 'react'
import { ConsultancyData } from '../../../../utils/OurServiceData';
import ServiceContent from '@/components/Service/ServiceContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Consultancy & Advisory",
  description: "3PCON IT company help businesses align their technology strategy with their overall business goals"
}

function page() {
  const NavInfo = [
    {
      title: "Service",
      url: "/services",
    },
    // {
    //   title: "Consultancy-Advisory",
    //   url: "/consultancy",
    // },
  ];
  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText="Consultancy & Advisory" />
      <ServiceContent datas={ConsultancyData} />
    </div>
  );
}

export default page