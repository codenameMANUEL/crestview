import Navbar from "../components/Navbar"
import WhatWeDo from "../components/WhatWeDo"
import WhereWeWork from "../components/WhereWeWork"
import OurTeam from "../components/OurTeam"
import Footer from "../components/Footer"
import LandingContact from "../components/LandingContact"

export default function Home() {
    return (
        <>
            <Navbar />
            <WhatWeDo />
            <WhereWeWork />
            <OurTeam />
            <LandingContact />
            <Footer />
        </>
    )
}