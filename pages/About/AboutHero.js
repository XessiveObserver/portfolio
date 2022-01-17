import styled from "styled-components";
import React from 'react'

const AboutHeroContainer = styled.div`
    background-color: #080d57;
    display: flex;
    flex-wrap: wrap;
    height: 50vh;
    max-width: 100%;
    @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;
const AboutLeftHero = styled.div`
    vertical-align: middle;
     h1{
        text-align: left;
        color: white;
        font-size: 3em;
    }
    h3{
        color: green;
    }
    p{  
        margin: 3em;
        text-align: left;
        color: #b3f5dc;
        line-height: 2em;
        font-size: 1em;
    }
    em{
        color: darkgreen;
    }
`;

const AboutRightHero = styled.div`

`;

export const AboutHero = () => {
    return (
        <AboutHeroContainer>
            <AboutLeftHero>
            <p>
            <h1>About Me</h1>
            <h3>Hi, I am Xessive Observer.</h3>A full stack web developer from <em><b>Uganda</b></em>,
             specializing in <u><b>python</b></u> and <u><b>javascript</b></u>.<br />
             With python I have <u><b> over 3 years of experience</b></u> working with django
             and django restful frame work. <br />
             With javascript I have <u><b>over a year of experience</b></u> working with react and
             and next js.</p>
            </AboutLeftHero>
            <AboutRightHero>

            </AboutRightHero>
        </AboutHeroContainer>
    )
}
