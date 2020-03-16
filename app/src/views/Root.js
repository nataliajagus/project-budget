import React from 'react';
import styled from 'styled-components';

import GlobalStyle from 'theme/GlobalStyle';
import ProjectCard from 'components/molecules/ProjectCard/ProjectCard';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import GreenButton from 'components/atoms/GreenButton/GreenButton';
import Plus from 'assets/plus.svg';

import Project from 'views/Project.js'
import AllProjects from 'views/AllProjects.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


const Root = () => (
    <Router>  
        <Switch>
            <Route exact path="/" component={AllProjects} />
            <Route path="/project" component={Project} />
        </Switch>
    </Router>
)

export default Root;