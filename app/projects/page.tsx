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
          imgPath="/placeholder.jpg"
          github={project.github}  
          projectPage={project.projectPage}
        />
      ))}
    </div>
  )
}

export default ProjectPage;