import React from 'react'
import styled from 'styled-components'

const TechStackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    
    align-items: center;
    @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Stack = styled.div`
    flex-basis: 40%;
    border: 0.1em darkcyan solid;
    border-radius: 0.5em;
    background-color: #eef2f5;
    margin: 0.3em;
    cursor: pointer;
    transition: all .5s ease;
    :hover{
        transform: scale(1.0);
        background-color: #adc5b3;
        color: #557555cc;
    }
    h2{
        word-break: break-all;
        letter-spacing: 0.2em;
        text-align: center;
        font-size: 2em;
        color: #2f2283;
        font-family: -apple-system,
         BlinkMacSystemFont,
          'Segoe UI', Roboto
          , Oxygen, Ubuntu,
           Cantarell, 'Open Sans'
           , 'Helvetica Neue', 
           sans-serif;
        margin-left: 1em;
        &:hover{
            transform: scale(1.1);
            color: white;
        }
    }
    li{
        margin: 1em;
        text-align: center;
        list-style: upper-roman;
        font-weight: bold;
        font-size: 1.3em;
        word-spacing: 0.3em;
        letter-spacing: 0.1em;
        color: #2f2283;
        &:hover{
            transform: scale(1.1);
            color: white;
        }
    }
    
`;

const TechStack = () => {
    return (
        <TechStackContainer>
            <Stack>
                <h2>Back End</h2>
                <ul>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Django Restful API</li>
                    <li>Django Admin</li>
                </ul>
            </Stack>
            <Stack>
                <h2>Front End</h2>
                <ul>
                    <li>Java Script</li>
                    <li>React Js</li>
                    <li>Next Js</li>
                    <li>Node Js</li>
                </ul>
            </Stack>
            <Stack>
                <h2>DevOps/WebOps</h2>
                <ul>
                    <li>CI/CD</li>
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>GCP</li>
                </ul>
            </Stack>
        </TechStackContainer>
    )
}

export default TechStack
