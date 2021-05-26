import React from "react";
import {Link} from "react-router-dom";

import '../sass/_project-card.scss'

const ProjectCard = ({project}) => (
  <div className="main-card">
    <div className='card-Text'>
      <h3>
          {project.name}
      </h3>
      <p>
          {project.description}
      </p>
    </div>
    <div className="cardPicture">
        <img src={project.picture[0]} className="projectPic" alt="product"></img>
    </div>
    <a href={project.repo} rel="stylesheet" target='_blank'>Go to repo</a> 
  </div>
);

export default ProjectCard;