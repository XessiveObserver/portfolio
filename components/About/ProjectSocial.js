import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import utils from '../../styles/utils';

const ProjectSocialContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;

    @media (min-width: 1024px) {
        flex-wrap: nowrap;
    }
   
`;

const ProjectContainer = styled.div`
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
`;

const Media = styled.div`
    text-align: center;
    margin: 1em;
    a{
        text-decoration: none;
    }
    @media (min-width: 1024px) {
            font-size: 1.5rem;
  }
`;
const MediaName = styled.div`
    font-weight: bolder;
    font-size: 1.5em;
    color: darkgreen;
    text-align: center;
    margin: 1em;
    @media (min-width: 1024px) {
            font-size: 1.1rem;
  }
`;

const SocialContainer = styled.div`
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
`;



const Project = styled.div`
    margin-left: 1em;
    text-align: center;
    align-items: center;
`;
const ProjectName = styled.h2`
    color: #020214;
    margin: 1em;
    a {
        text-decoration: none;
    }
    @media (min-width: 1024px) {
            font-size: 1.5rem;
  }
`;
const ProjectImage = styled.div`
    margin: 1em;
    &:Image{
        border-radius: 0.5em;
    }
    @media (min-width: 1024px) {
            font-size: 1.1rem;
  }
`;


export const ProjectSocial = () => {
    return (
        <ProjectSocialContainer>
            <ProjectContainer>
                
                <Project>
                    <ProjectName><a href="http://rock-news.herokuapp.com">Rock Ent</a> </ProjectName>
                    <ProjectImage>
                        <a href="http://rock-news.herokuapp.com">
                            <Image
                                src='/about-images/rock-ent.png'
                                alt="Rock Ent"
                                width={100}
                                height={80}
                            />
                        </a>
                    </ProjectImage>

                </Project>
                <Project>
                    <ProjectName><a href="http://shoppaholix.netlify.app">Shoppaholix</a></ProjectName>
                    <ProjectImage>
                        <a href="http://shoppaholix.netlify.app">
                            <Image
                                src='/about-images/shoppaholix.jpg'
                                alt="Shoppaholix"
                                width={100}
                                height={80}
                            />
                        </a>
                    </ProjectImage>
                </Project>
            </ProjectContainer>

            <SocialContainer>
                <Media>
                    <MediaName><a href="http://github.com/XessiveObserver">Git hub</a></MediaName>
                </Media>
                <Media>
                    <MediaName>WhatsApp</MediaName>
                </Media>
            </SocialContainer>
        </ProjectSocialContainer>
    )
}
