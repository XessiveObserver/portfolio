import Head from 'next/head'
import { HomeHero } from '../components/HomPage/HomeHero'
import { Services } from '../components/HomPage/Services'
import TechStack from '../components/HomPage/TechStack'
import styled from 'styled-components'

const Heading = styled.h1`
  text-align: center;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Xessive Observer-Home Page.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHero />
      <Heading>Services</Heading>
      <Services />
      <Heading>Tech Stack</Heading>
      <TechStack />
    </div>
  )
}
