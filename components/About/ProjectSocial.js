import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import shoppaholix from './AboutImages/shoppaholix.jpg'
import rockent from './AboutImages/rock-ent.png'

const ProjectSocialContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    align-items: center;
    @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const ProjectContainer = styled.div`
    flex-basis: 50%;
    display: inline-flex;
    margin: 2em;
    border-radius: 0.5em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
     0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SocialContainer = styled.div`
    flex-basis: 50%;
    display: inline-flex;
    margin: 3em;
    border-radius: 0.5em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
     0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Media = styled.div`
    text-align: center;
    margin: 1.8em;
`;
const MediaName = styled.div`
    font-weight: bolder;
    font-size: 1.5em;
    color: darkgreen;
    text-align: center;
    margin: 1.5em;
`;


const Project = styled.div`
    margin: 1.5em;
    text-align: center;
    align-items: center;
`;
const ProjectName = styled.h2`
    color: #020214;
    margin: 1.5em;
`;
const ProjectImage = styled.div`
    margin: 1.5em;
    &:Image{
        border-radius: 0.5em;
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
                                src={rockent}
                                alt="API"
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
                                src={shoppaholix}
                                alt="API"
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
