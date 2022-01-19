import React from 'react'
import Footer from '../../components/Footer/Footer'
import { NavBarIndex } from '../../components/Nav/NavBarIndex'
import { AboutHero } from './AboutHero'
import { Projects } from './Projects'
import { Social } from './Social'


const AboutIndex = () => {
    return (
        <div>
            <NavBarIndex />
            <AboutHero />
            <h1>Projects</h1>
            <Projects />
            <h1>Social</h1>
            <Social />
            <Footer />
        </div>
    )
}

export default AboutIndex
