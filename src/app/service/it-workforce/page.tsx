import SharedHero from '@/components/Hero/SharedHero/SharedHero';
import React from 'react'

function page() {
  const NavInfo = [
    {
      title: "Service",
      url: "/service",
    },
    {
      title: "Managed Workforce/ IT Workforce",
      url: "/innovation",
    },
  ];
  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText="Managed Workforce/ IT Workforce" />
    </div>
  );
}

export default page