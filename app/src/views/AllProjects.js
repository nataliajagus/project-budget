import React from 'react';
import styled from 'styled-components';

import GlobalStyle from 'theme/GlobalStyle';
import ProjectCard from 'components/molecules/ProjectCard/ProjectCard';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import GreenButton from 'components/atoms/GreenButton/GreenButton';
import Plus from 'assets/plus.svg';

import Project from 'views/Project.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const ProjectsWrapper = styled.div`
    
    display: flex;
    margin: 0 auto;
    @media (min-width: 992px) {
        justify-content: space-between;
    }

    margin-top: 50px;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 950px;
`;

const RowWrapper = styled.div`
    max-width: 300px;
    display: flex;
    align-items: center;
    margin: 50px auto;
    justify-content: space-between;

    @media (min-width: 666px) {
        max-width: 620px;
    }

    @media (min-width: 992px) {
        max-width: 950px;
    }
`;

const AllProjects = () => (
    <>  
        <RowWrapper>
            <SearchBar placeholder="Szukaj projektu..." />
            <GreenButton icon={Plus} />
        </RowWrapper>
        
        <ProjectsWrapper>
            <GlobalStyle />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </ProjectsWrapper>

    </>
)

export default AllProjects;