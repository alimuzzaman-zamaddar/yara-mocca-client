import React from 'react'
import WhoWeServePage from '../components/WhoWeSearvePage'
import HowWeWorkPage from '../components/HowWeWork'
import OurPresence from '../components/OurPresence'
import TrustCompliance from '../components/TrustCompliance'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import NavbarArabic from '../components/NavbarArabic'
import Bannerarabic from '../components/Bannerarabic'
import Whowearearabic from '../components/Whowearearabic'
import Ourvisionandmissionarabic from '../components/Ourvisionandmissionarabic'
import DivisionsPageArabic from '../components/DivisionsPageArabic'

export default function page() {
  return (
    <div>
        <NavbarArabic/>
        <Bannerarabic></Bannerarabic>
        <Whowearearabic/>
        <Ourvisionandmissionarabic/>
        <DivisionsPageArabic/>
        <WhoWeServePage/>
        <HowWeWorkPage/>
        <OurPresence/>
        <TrustCompliance/>
        <ContactUs/>
        <Footer/>
      
    </div>
  )
}
