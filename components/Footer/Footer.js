import React from 'react'

import styled from 'styled-components'

const SiteFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 10vh;
    background-color: #030e31;
    justify-content: space-evenly;
    
    p{
        text-align: center;
        color: whitesmoke;
        vertical-align: middle;
    }
`;

export const Footer = () => {
    return (
        <SiteFooter>
            <p>All righst reserved &copy; 2022, Xessive Observer ... powered by Olabs Technologies</p>
        </SiteFooter>
    )
}


