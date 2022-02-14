import React from 'react';
import styled from 'styled-components';
import utils from '../../styles/utils';

const AgendaContainer = styled.div`
    background-color: aliceblue;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;

    @media (min-width: 1024px) {
        flex-wrap: nowrap;
    }

`;

const VisionStatement = styled.div`
    flex:50%;
    margin: 2em;
    border-radius: 0.8em;
    display: flex;
    width: ${utils(320, 320)};
    min-height: ${utils(200, 320)};
    flex-direction: column;
    padding: ${utils(20)};
    margin: ${utils(20)};
    background-color: ${props => props.bgColor};

    @media (min-width: 768px) {
        min-height: ${utils(200, 768)};
    }

    @media (min-width: 1024px) {
        min-height: ${utils(300)}; 
    }


    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
     0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: darkblue;
   
     h2{
        margin: 1.1em;
        @media (min-width: 1024px) {
            font-size: 1.5rem;
  }
    }
    p {
        font-size: 1rem;

        margin: 2em;
        @media (min-width: 1024px) {
            font-size: 1.1rem;
  }
    }
`;
const MissionStatement = styled.div`
    flex: 50%;
    display: flex;
    width: ${utils(320, 320)};
    min-height: ${utils(200, 320)};
    flex-direction: column;
    padding: ${utils(20)};
    margin: ${utils(20)};
    background-color: ${props => props.bgColor};

    @media (min-width: 768px) {
        min-height: ${utils(200, 768)};
    }

    @media (min-width: 1024px) {
        min-height: ${utils(300)}; 
    }


    border-radius: 0.8em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
     0 6px 20px 0 rgba(0, 0, 0, 0.19);
 
  
    width: auto;
    color: darkblue;
     h2{

        margin: 1.5em;
        @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
    }
    p {
        margin: 2em;
        @media (min-width: 1024px) {
    font-size: 1.1rem;
        
    }
}
   
`;

export const Agenda = () => {
    return (
        <AgendaContainer>
            <VisionStatement>
                <h2>Vision</h2>
                <p>I consistently work on our development <br />
                    process to provide an informative, user-friendly <br />
                    and effective strategy to provide companies <br />
                    with the message or goal they are hoping to accomplish. <br />
                    This development process is tailored to meet the needs of small,
                    <br /> medium and large size businesses and enterprises.</p>
            </VisionStatement>
            <MissionStatement>
                <h2>Mission</h2>
                <p>My mission is to ensure the best relationship <br />
                    with our clients, both during and after their <br />
                    goals have been met. I keep this in mind whether <br />
                    designing print media, creating custom maps, <br />
                    producing multimedia or building websites.</p>
            </MissionStatement>


        </AgendaContainer>)
};
