import SharedHero from '@/components/Hero/SharedHero/SharedHero'
import OurSolutions from '@/components/OurSolutions/OurSolution'
import React from 'react'

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