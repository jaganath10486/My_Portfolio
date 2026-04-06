import React from 'react'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import profilePic from '../../images/jaganath_profilepic.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <SocialMediaIcons>
                            <SocialMediaIcon href={Bio.linkedin} target="_blank" aria-label="LinkedIn">
                                <LinkedInIcon />
                            </SocialMediaIcon>
                            <SocialMediaIcon href={Bio.github} target="_blank" aria-label="GitHub">
                                <GitHubIcon />
                            </SocialMediaIcon>
                        </SocialMediaIcons>
                        <ResumeButton href={Bio.resume} target='display'>Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={profilePic} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection