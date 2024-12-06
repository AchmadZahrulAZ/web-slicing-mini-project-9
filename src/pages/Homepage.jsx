import React from 'react'
import Header from '../components/Homepage/Header'
import Features from '../components/Homepage/Features'
import Work from '../components/Homepage/Work'
import Process from '../components/Homepage/Process'
import Clients from '../components/Homepage/Clients'
import BrandLogo from '../components/BrandLogo'
import Blog from '../components/Homepage/Blog'

const Homepage = () => {
  return (
    <>
        <h1>Homepage</h1>
        <Header />
        <Features />
        <Work />
        <Process />
        <Clients />
        <BrandLogo />
        <Blog />
    </>
  )
}

export default Homepage