import React from 'react'
import Header from '../components/Header'
import WhoWeAre from '../components/WhoWeAre'
import Team from '../components/Team'
import NumberBanner from '../components/NumberBanner'
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