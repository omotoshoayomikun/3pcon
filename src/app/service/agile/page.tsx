import SharedHero from '@/components/Hero/SharedHero/SharedHero';
import React from 'react'
import { AgileData } from '../../../../utils/OurServiceData';
import ServiceContent from '@/components/Service/ServiceContent';
import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "Agile/ Digital Transformation",
  description: "3PCON IT company help businesses transform their operations and culture to become more agile and responsive"
}

function page() {
  const NavInfo = [
    {
      title: "Service",
      url: "/service",
    },
    // {
    //   title: "Agile/ Digital Transformation",
    //   url: "/agile",
    // },
  ];
  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText="Agile/ Digital Transformation" />
      <ServiceContent datas={AgileData} />
    </div>
  );
}

export default page