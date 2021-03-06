import Head from 'next/head'
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
            <Head>
                <title>Xessive Observer-About Page.</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AboutHero />
            <Agenda />
            <ProjectSocial />
        </ContainerAbout>
    )
}

export default About
