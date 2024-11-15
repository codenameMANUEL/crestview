import Navbar from "../components/Navbar"
import WhatWeDo from "../components/WhatWeDo"
import WhereWeWork from "../components/WhereWeWork"
import OurTeam from "../components/OurTeam"
import Footer from "../components/Footer"
import LandingContact from "../components/LandingContact"
import HeroSection from "./Hero"

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection/>
            <WhatWeDo />
            <WhereWeWork />
            <OurTeam />
            <LandingContact />
            <Footer />
        </>
    )
}