import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';

const ServicesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.3em;
    justify-content: center;
  
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
                        src="/index-images/REST-API.png"
                        alt="Rest API"
                        width={200}
                        height={150}
                    />
                </ServiceImage>
            </Service>
            <Service>
                <ServiceName>UI/UX Design</ServiceName>
                <ServiceImage>
                    <Image
                        src="/index-images/UI-UX.png"
                        alt="UI/UX Design"
                        width={200}
                        height={150}
                    />
                </ServiceImage>
            </Service>
            <Service>
                <ServiceName>SEO</ServiceName>
                <ServiceImage>
                    <Image
                        src="/index-images/SEO.png"
                        alt="SEO"
                        width={200}
                        height={150}
                    />
                </ServiceImage>
            </Service>
            <Service>
                <ServiceName>DevOps</ServiceName>
                <ServiceImage>
                    <Image
                        src="/index-images/DevOPs.jpg"
                        alt="DevOps"
                        width={200}
                        height={150}
                    />
                </ServiceImage>
            </Service>
            <Service>
                <ServiceName>WebOps</ServiceName>
                <ServiceImage>
                    <Image
                        src="/index-images/WebOps.jpg"
                        alt="WebOps"
                        width={200}
                        height={150}
                    />
                </ServiceImage>
            </Service>

        </ServicesContainer>
    )
}
