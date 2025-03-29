import SharedHero from '@/components/Hero/SharedHero/SharedHero';
import React from 'react'

function page() {
  const NavInfo = [
    {
      title: "Service",
      url: "/service",
    },
    {
      title: "Innovation Management",
      url: "/innovation",
    },
  ];
  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText="Innovation Management" />
    </div>
  );
}

export default page