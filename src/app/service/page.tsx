import SharedHero from '@/components/Hero/SharedHero/SharedHero'
import OurSolutions from '@/components/OurSolutions/OurSolution'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: "Service"
}

function page() {
  const NavInfo = [
     {
      title: "Service",
      url: "/service",
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