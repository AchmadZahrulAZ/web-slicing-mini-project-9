import React from 'react'
import Header from '../components/ContactUs/Header'
import ProposalForm from '../components/ContactUs/ProposalForm'
import OurOffice from '../components/ContactUs/OurOffice'
import NumberBanner from '../components/ContactUs/NumberBanner'
import BrandNote from '../components/BrandNote'
import BrandLogo from '../components/BrandLogo'

const ContactUs = () => {
  return (
    <>
        <h1>Contact Us</h1>
        <Header />
        <ProposalForm />
        <OurOffice />
        <NumberBanner />
        <BrandNote />
        <BrandLogo />
    </>
  )
}

export default ContactUs