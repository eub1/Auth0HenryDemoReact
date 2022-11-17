import React from "react";
import {NavLink} from "react-router-dom";
import projects from '../data/projects'

import ProjectCard from './project-card'

import '../sass/_home-content.scss'

const HomeContent = () => {
  return (
  <div className="next">
    <div className='aboutMe'>
      <h1>Hi, This is a sample portfolio</h1>
      <p>Auth0 is a popular management platform that provides authentication and authorization services. It advertises itself as a way to keep your customer's data secure and safe without needing to be a security expert yourself.</p>
    </div>
    {projects && projects.map((project) => (
      <ProjectCard className='projectCard' project={project}/>
    ))}

  </div>
);
}

export default HomeContent;
