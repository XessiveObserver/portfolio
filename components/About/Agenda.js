import React from 'react';
import styled from 'styled-components';

const AgendaContainer = styled.div`
    background-color: aliceblue;
    display: flex;
    flex-wrap: wrap;
    @media(max-width:600px){
        flex-direction: coulumn;
    }
`;

const VisionStatement = styled.div`
    flex: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
     0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.8em;
    color: darkblue;
    margin: 3em;
     h2{
        text-align: center;
    }
    p {
        font-size: 1.2em;
        text-align: start;
        margin: 2em;
        
    }
`;
const MissionStatement = styled.div`
    flex: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
     0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.8em;
    margin: 3em;
    width: auto;
    color: darkblue;
     h2{
        text-align: center;
    }
    p {
        font-size: 1.2em;
        text-align: start;
        margin: 2em;
        
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
