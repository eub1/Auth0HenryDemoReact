import React from "react";
import {NavLink} from "react-router-dom";
import projects from '../data/projects'

import ProjectCard from './project-card'

import '../sass/_home-content.scss'

const HomeContent = () => (
  <div className="next">
    <div className='aboutMe'>
      <h1>Hi, I'm Pía Cherni</h1>
      <p>Full Stack Developer, passionate about solving problems, learning new technologies and mastering the ones I already know: JavaScript, React, Redux, HTML5, CSS, NodeJs, Express, Sequelize, and PostgreSQL as a database. Currently adding Typescript to the list and assisting a group of Full-Stack development students as a coding tutor at Henry.
        I studied Architecture which gave me a set of skills in design, abstract thinking, understanding of user experience and team work!</p>
      <NavLink
        to="/contact-info"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Contact me!
      </NavLink>
    </div>
    {projects && projects.map((project) => (
      <ProjectCard className='projectCard' project={project}/>
    ))}

  </div>
);

export default HomeContent;
