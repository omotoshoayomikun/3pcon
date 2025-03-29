import SharedHero from '@/components/Hero/SharedHero/SharedHero';
import React from 'react'

function page() {
  const NavInfo = [
    {
      title: "Service",
      url: "/service",
    },
    {
      title: "Consultancy-Advisory",
      url: "/consultancy",
    },
  ];
  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText="Consultancy & Advisory" />
    </div>
  );
}

export default page