import React from 'react'
import Footer from '../../components/Footer/Footer'
import { NavBar } from '../../components/Nav/NavBar'
import { AboutHero } from '../../components/About/AboutHero'
import styled from 'styled-components'
import { Agenda } from '../../components/About/Agenda'
import { ProjectSocial } from '../../components/About/ProjectSocial'

const ContainerAbout = styled.div`
    background-color: #d4d6d8;
`;

const AboutIndex = () => {
    return (
        <ContainerAbout>
            <NavBar />
            <AboutHero />
            <Agenda />
            <ProjectSocial />
            <Footer />
        </ContainerAbout>
    )
}

export default AboutIndex
