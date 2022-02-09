import React from 'react'

import styled from 'styled-components'

const SiteFooter = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width:600px){
        flex-direction: coulumn;
    }
    align-items: center;
    height: 10vh;
    background-color: #030e31;
    
    p{
        text-align: center;
        color: whitesmoke;
        vertical-align: middle;
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
