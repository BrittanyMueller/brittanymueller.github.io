import React from 'react'
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import styles from "./Projects.module.css";


const ProjectPage = () => {

  return (
    <div className={styles.projectGrid}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          images={project.images}
          github={project.github}  
          projectPage={project.projectPage}
          isMobile={project.isMobile}
        />
      ))}
    </div>
  )
}

export default ProjectPage;