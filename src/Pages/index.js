import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'
import Bottom from '../Components/Bottom'
import HeroSection from '../Components/HeroSection'
import InfoSection from '../Components/InfoSection'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../Components/InfoSection/Data'
import Footer from '../Components/Footer'
const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <Bottom />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Footer />
        </>
    )
}

export default Home
