import React from 'react'

import styled from 'styled-components'

const SiteFooter = styled.div`
    height: 10vh;
    background-color: #030e31;
    border-top: 0.1em solid black;
    p{
        text-align: center;
        color: whitesmoke;
    }
`;

const Footer = () => {
    return (
        <SiteFooter>
            <p>All righst reserved &copy; 2022, Xessive Observer ... powered by Olabs Technologies</p>
        </SiteFooter>
    )
}

export default Footer
