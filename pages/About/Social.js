import React from 'react'
import styled from 'styled-components'

const SocialContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    align-items: center;
    @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Media = styled.div`
    flex-basis: 50%;
    margin: 2em;
    color: green;
    text-align: center;
`;
const MediaName = styled.h2`

`;

export const Social = () => {
    return (
        <SocialContainer>
            <Media>
                <MediaName><a href="http://github.com/XessiveObserver">Git hub</a></MediaName>
            </Media>
            <Media>
                <MediaName>WhatsApp</MediaName>
            </Media>
        </SocialContainer>
    )
}

