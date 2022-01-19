import React from 'react'
import styled from 'styled-components'

const TechStackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    background-color: #191d4e;
    align-items: center;
    @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Stack = styled.div`
    flex-basis: 60%;
    border-radius: 0.5em;
    margin: 0.3em;
    text-align: center;
    cursor: pointer;
    transition: all .5s ease;
    :hover{
        transform: scale(1.0);

    }
    h2{
        font-weight: bolder;
        word-break: break-all;
        letter-spacing: 0.2em;
        text-align: center;
        font-size: 1.3em;
        color: #090427;
        background-color: #ebf2f3;
        margin: 1em;
        border-radius: 0.3em;
        &:hover{
            transform: scale(1.1);
            color: #277e81;
        }
    }
    li{
        margin: 1em;
        text-align: center;
        list-style: upper-roman;
        font-weight: bold;
        font-size: 1em;
        word-spacing: 0.3em;
        letter-spacing: 0.1em;
        color: #ccc9e4;
        &:hover{
            transform: scale(1.1);
            color: #277e81;
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
