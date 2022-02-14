import React from 'react'
import { AboutHero } from '../components/About/AboutHero'
import styled from 'styled-components'
import { Agenda } from '../components/About/Agenda'
import { ProjectSocial } from '../components/About/ProjectSocial'

const ContainerAbout = styled.div`
    background-color: #d4d6d8;
`;

const About = () => {
    return (
        <ContainerAbout>
            <AboutHero />
            <Agenda />
            <ProjectSocial />
        </ContainerAbout>
    )
}

export default About
