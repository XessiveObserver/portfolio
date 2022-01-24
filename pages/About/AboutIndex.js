import React from 'react'
import Footer from '../../components/Footer/Footer'
import { NavBarIndex } from '../../components/Nav/NavBarIndex'
import { AboutHero } from '../../components/About/AboutHero'
import styled from 'styled-components'
import { Agenda } from '../../components/About/Agenda'
import { ProjectSocial } from '../../components/About/ProjectSocial'

const ContainerAbout = styled.div`
    display: flex;
    flex-direction: column;
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
