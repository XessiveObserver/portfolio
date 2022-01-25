import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import restapi from './IndexImages/REST-API.png'
import uiux from './IndexImages/UI-UX.png'
import seo from './IndexImages/SEO.png'
import devops from './IndexImages/DevOps.jpg'
import webops from './IndexImages/WebOps.jpg'

const ServicesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.3em;
  
`;


const Service = styled.div`
    margin: 2em;
    text-align: center;
    border-radius: 0.5em;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
     0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ServiceName = styled.div`
    color: #2f2283;
    font-weight: bolder;
    text-align: center;
    margin: 1em;
`;

const ServiceImage = styled.div`
    margin: 0.3em;
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
