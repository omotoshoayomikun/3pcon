import SharedHero from '@/components/Hero/SharedHero/SharedHero';
import ServiceContent from '@/components/Service/ServiceContent';
import React from 'react'
import { DataAutomationData } from '../../../../utils/OurServiceData';

function page() {
    const NavInfo = [
      // {
      //   title: "Service",
      //   url: "/service",
      // },
      {
        title: "Data-Automation",
        url: "/data-automation",
      },
    ];
    return (
      <div className="mt-[var(--fixed-h-value)]">
        <SharedHero value={NavInfo} headerText="Data & Automation" />
        <ServiceContent datas={DataAutomationData} />
      </div>
    );
}

export default page