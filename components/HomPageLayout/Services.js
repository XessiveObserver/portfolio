import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import restapi from './IndexImages/REST-API.png'
import uiux from './IndexImages/UI-UX.png'
import seo from './IndexImages/SEO.png'
import devops from './IndexImages/DevOps.jpg'
import webops from './IndexImages/WebOps.jpg'

const ServicesContainer = styled.div`
    display: flext;
    flex-wrap: wrap;
    max-width: 100%;
    margin: 3em;
    border-radius: 0.3em;
    align-items: center;
    @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
  
`;


const Service = styled.div`
    flex-basis: 20%;
    margin: 2em;
    border-radius: 0.8em;
    cursor: pointer;
    background-color: #eaecf1;
`;

const ServiceName = styled.div`
    color: #2f2283;
    font-weight: bolder;
    text-align: center;
`;

const ServiceImage = styled.div`
margin-top: 1em;

    :Image{
        border-radius: 0.5em;
        margin: 1em;
    }
`;




export const Services = () => {
    return (

        <ServicesContainer>
            <Service>
                <ServiceName>API Development</ServiceName>
                <ServiceImage>
                    <Image
                        src={restapi}
                        alt="API"
                        width={200}
                        height={150}
                    />
                </ServiceImage>
            </Service>
            <Service>
                <ServiceName>UI/UX Design</ServiceName>
                <ServiceImage>
                    <Image
                        src={uiux}
                        alt="API"
                        width={200}
                        height={150}
                    />
                </ServiceImage>
            </Service>
            <Service>
                <ServiceName>SEO</ServiceName>
                <ServiceImage>
                    <Image
                        src={seo}
                        alt="API"
                        width={200}
                        height={150}
                    />
                </ServiceImage>
            </Service>
            <Service>
                <ServiceName>DevOps</ServiceName>
                <ServiceImage>
                    <Image
                        src={devops}
                        alt="API"
                        width={200}
                        height={150}
                    />
                </ServiceImage>
            </Service>
            <Service>
                <ServiceName>WebOps</ServiceName>
                <ServiceImage>
                    <Image
                        src={webops}
                        alt="API"
                        width={200}
                        height={150}
                    />
                </ServiceImage>
            </Service>

        </ServicesContainer>
    )
}
