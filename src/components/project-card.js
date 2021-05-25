import React from "react";

import '../sass/_project-card.scss'

const ProjectCard = ({project}) => (
  <div className="main-card">
    <h3>
        {project.name}
    </h3>
    <p>
        {project.description}
    </p>
    <div className="cardPicture">
        <img src={project.picture[0]} alt="product"></img>
    </div>

  </div>
);

export default ProjectCard;