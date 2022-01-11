import React from 'react'
import styled from 'styled-components'

const TechStackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    background-color: #362b7c;
    align-items: center;
    @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Stack = styled.div`
    flex-basis: 40%;
    h3{
        text-align: center;
        font-size: 1.5em;
        color: #a9c8e2;
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 1em;
    }
    li{
        list-style: none;
        text-align: center;
        font-size: 1.3em;
        color: whitesmoke;
        font-family: 'Trebuchet MS',
         'Lucida Sans Unicode', 'Lucida Grande',
          'Lucida Sans', Arial, sans-serif;
    }
`;

const TechStack = () => {
    return (
        <TechStackContainer>
            <Stack>
                <h3>Python</h3>
                <ul>
                    <li>Django</li>
                    <li>Django Restful API</li>
                    <li>Django Admin</li>
                </ul>
            </Stack>
            <Stack>
                <h3>Java Script</h3>
                <ul>
                    <li>React Js</li>
                    <li>Next Js</li>
                    <li>Node Js</li>
                </ul>
            </Stack>
            <Stack>
                <h3>Cloud</h3>
                <ul>
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>GCP</li>
                </ul>
            </Stack>
        </TechStackContainer>
    )
}

export default TechStack
