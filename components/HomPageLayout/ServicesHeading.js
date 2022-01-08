import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        text-align: center;
    }
`;

const ServicesHeading = () => {
    return (
        <Container>
            <h1> Services</h1>
        </Container>
    )
}

export default ServicesHeading
