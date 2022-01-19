import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import shoppaholix from './AboutImages/shoppaholix.jpg'
import rockent from './AboutImages/rock-ent.png'

const ProjectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    align-items: center;
    @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Project = styled.div`
    flex-basis: 50%;
    margin: 2em;
    text-align: center;
`;
const ProjectName = styled.h2`
    color: #0b0b64;
`;
const ProjectImage = styled.div`

        Image{
            border-radius: 0.5em;
        }
    
`;

export const Projects = () => {
    return (
        <ProjectContainer>
            
            <Project>
                <ProjectName><a href="http://rock-news.herokuapp.com">Rock Ent</a> </ProjectName>
                <ProjectImage>
                    <a href="http://rock-news.herokuapp.com">
                        <Image
                            src={rockent}
                            alt="API"
                            width={200}
                            height={180}
                        />
                    </a>
                </ProjectImage>

            </Project>
            <Project>
                <ProjectName><a href="http://shoppaholix.netlify.app">Shoppaholix</a></ProjectName>
                <ProjectImage>
                    <a href="http://shoppaholix.netlify.app">
                        <Image
                            src={shoppaholix}
                            alt="API"
                            width={200}
                            height={180}
                        />
                    </a>
                </ProjectImage>
            </Project>
        </ProjectContainer>
    )
}
