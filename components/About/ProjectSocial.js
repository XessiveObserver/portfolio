import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import shoppaholix from './AboutImages/shoppaholix.jpg'
import rockent from './AboutImages/rock-ent.png'

const ProjectSocialContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
   
`;

const ProjectContainer = styled.div`
    flex: 1;
    display: inline-flex;
    margin: 0.5em;
    border-radius: 0.5em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
     0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SocialContainer = styled.div`
    flex: 1;
    display: inline-flex;
    margin: 0.8em;
    border-radius: 0.5em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
     0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Media = styled.div`
    text-align: center;
    margin: 1em;
`;
const MediaName = styled.div`
    font-weight: bolder;
    font-size: 1.5em;
    color: darkgreen;
    text-align: center;
    margin: 1em;
`;


const Project = styled.div`
    margin-left: 1em;
    text-align: center;
    align-items: center;
`;
const ProjectName = styled.h2`
    color: #020214;
    margin: 1em;
`;
const ProjectImage = styled.div`
    margin: 1em;
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
