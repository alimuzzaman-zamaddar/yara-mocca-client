import React from 'react'
import OurPresence from '../components/OurPresence'
import TrustCompliance from '../components/TrustCompliance'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import NavbarArabic from '../components/NavbarArabic'
import Bannerarabic from '../components/Bannerarabic'
import Whowearearabic from '../components/Whowearearabic'
import Ourvisionandmissionarabic from '../components/Ourvisionandmissionarabic'
import DivisionsPageArabic from '../components/DivisionsPageArabic'
import WhoWeServePageArabic from '../components/WhoWeServePagearabic'
import HowWeWorkPageArabic from '../components/HowWeworkArabic'

export default function page() {
  return (
    <div>
        <NavbarArabic/>
        <Bannerarabic></Bannerarabic>
        <Whowearearabic/>
        <Ourvisionandmissionarabic/>
        <DivisionsPageArabic/>
        <WhoWeServePageArabic></WhoWeServePageArabic>
        <HowWeWorkPageArabic/>
        <OurPresence/>
        <TrustCompliance/>
        <ContactUs/>
        <Footer/>
      
    </div>
  )
}
