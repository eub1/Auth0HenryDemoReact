import React from "react";
import {NavLink} from "react-router-dom";
import projects from '../data/projects'

import ProjectCard from './project-card'

import '../sass/_home-content.scss'

const HomeContent = () => (
  <div className="next">
    <NavLink
      to="/contact-info"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Contact me!
    </NavLink>
    {projects && projects.map((project) => (
      <ProjectCard project={project}/>
    ))}

  </div>
);

export default HomeContent;
