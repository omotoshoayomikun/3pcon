import ContactUs from '@/components/ContactUs/ContactUs'
import SharedHero from '@/components/Hero/SharedHero/SharedHero'
import React from 'react'

function page() {
  const NavInfo = [
    {
     title: "Contact",
     url: "/contact",
   }
 ]

  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText='Contact' />
      <ContactUs />
      </div>
  )
}

export default page