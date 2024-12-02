import React from 'react'
import Header from '../components/Header'
import Features from '../components/Features'
import Work from '../components/Work'
import Process from '../components/Process'
import Clients from '../components/Clients'
import BrandLogo from '../components/BrandLogo'
import Blog from '../components/Blog'

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