import SharedHero from '@/components/Hero/SharedHero/SharedHero'
import OurSolutions from '@/components/OurSolutions/OurSolution'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: "Services",
  description: "Our Services include Software Development - Data & Automation - Agile/ Digital Transformation - Consultancy & Advisory - Innovation Management - Managed IT Workforce/ IT Workforce"
}

function page() {
  const NavInfo = [
     {
      title: "Service",
      url: "/services",
    }
  ]
  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText="Service" />
      <OurSolutions />
      </div>
  )
}

export default page