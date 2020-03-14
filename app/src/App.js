import React from 'react';


import GlobalStyle from './theme/GlobalStyle';
import ProjectCard from './components/molecules/ProjectCard/ProjectCard';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default App;
