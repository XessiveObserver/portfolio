import React from 'react'
import Footer from '../../components/Footer/Footer'
import { NavBarIndex } from '../../components/Nav/NavBarIndex'
import { AboutHero } from './AboutHero'
import { Agenda } from './Agenda'
import { ProjectSocial } from './ProjectSocial'
import styled from 'styled-components'

const ContainerAbout = styled.div`
    background-color: #d4d6d8;
`;

const AboutIndex = () => {
    return (
        <ContainerAbout>
            <NavBarIndex />
            <AboutHero />
            <Agenda />
            <ProjectSocial />
            <Footer />
        </ContainerAbout>
    )
}

export default AboutIndex
