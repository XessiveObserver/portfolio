import React from 'react'
import styled from 'styled-components'

const ServicesContainer = styled.div`
    display: flext;
    flex-wrap: wrap;
    background-color: azure;
    max-width: 100%;
    @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
  h1{
      align-items: center;
      color: green;
  }
`;


export const Services = () => {
    return (
        <ServicesContainer>
        <h1>Services</h1>
            
        </ServicesContainer>
    )
}
