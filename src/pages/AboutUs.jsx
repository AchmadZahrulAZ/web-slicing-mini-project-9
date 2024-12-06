import React from 'react'
import Header from '../components/AboutUs/Header'
import WhoWeAre from '../components/AboutUs/WhoWeAre'
import Team from '../components/AboutUs/Team'
import NumberBanner from '../components/AboutUs/NumberBanner'
import BrandNote from '../components/BrandNote'
import BrandLogo from '../components/BrandLogo'

const AboutUs = () => {
  return (
    <>
        <h1>About Us</h1>
        <Header />
        <WhoWeAre />
        <Team />
        <NumberBanner />
        <BrandNote />
        <BrandLogo />
    </>
  )
}

export default AboutUs