'use client'
import React from 'react'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import Partners from '../components/Partners'
import Info from '../components/Info'


export default function page() {
  return (
    <div>
      <Hero/>
      <Pricing/>
      <Partners/>
      <Info/>
    </div>
  )
}
