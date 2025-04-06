import SharedHero from '@/components/Hero/SharedHero/SharedHero';
import React from 'react'

function page() {
  const NavInfo = [
    // {
    //   title: "Service",
    //   url: "/service",
    // },
    {
      title: "Agile/ Digital Transformation",
      url: "/agile",
    },
  ];
  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText="Agile/ Digital Transformation" />
    </div>
  );
}

export default page