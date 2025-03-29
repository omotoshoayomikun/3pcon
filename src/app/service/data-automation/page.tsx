import SharedHero from '@/components/Hero/SharedHero/SharedHero';
import React from 'react'

function page() {
    const NavInfo = [
      {
        title: "Service",
        url: "/service",
      },
      {
        title: "Data-Automation",
        url: "/data-automation",
      },
    ];
    return (
      <div className="mt-[var(--fixed-h-value)]">
        <SharedHero value={NavInfo} headerText="Data & Automation" />
      </div>
    );
}

export default page