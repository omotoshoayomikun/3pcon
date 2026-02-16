"use client"

import EventsService from '@/components/Events/EventsService'
import SharedHero from '@/components/Hero/SharedHero/SharedHero'
import React from 'react'

function Events() {
  const NavInfo = [
    {
      title: "Events",
      url: "/events",
    }
  ]

  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText='Events' />
      <EventsService />
    </div>
  )
}

export default Events