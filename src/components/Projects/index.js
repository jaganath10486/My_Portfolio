import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>ALL</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Web App' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP</ToggleButton>
          }
          <Divider />
          {toggle === 'Android App' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP</ToggleButton>
          }
          <Divider />
          {toggle === 'Data Science' ?
            <ToggleButton active value="Data Science" onClick={() => setToggle('Data Science')}>DATA SCIENCE</ToggleButton>
            :
            <ToggleButton value="Data Science" onClick={() => setToggle('Data Science')}>DATA SCIENCE</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects