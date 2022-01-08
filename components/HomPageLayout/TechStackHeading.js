import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        text-align: center;
    }
`;

export const TechStackHeading = () => {
    return (
        <Container>
            <h1> Tech Stack</h1>
        </Container>
    )
}
