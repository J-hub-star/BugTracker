import React,{ useState } from 'react'
import ProjectItem from './Project/ProjectItem';

const Projects = (props) => {
    return(
        <div>
         {Array.isArray(props.projects) && props.projects.map((project) => (<ProjectItem key={project.id} project={project} ></ProjectItem>))}
        </div>
    )
}

export default Projects;