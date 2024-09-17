import React from 'react'
import Image from "next/image";
import styles from './ProjectCard.module.css'
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

interface ProjectDetails {
  title: string
  imgPath: string
  description: string
  github: string
  projectPage?: string
}

const ProjectCard : React.FunctionComponent<ProjectDetails> = (props) => {
  return (
    <div className={styles.card}>
      <Image 
        src={props.imgPath}
        width={100}
        height={100}
        alt="Screenshot of project."
      />
      <h3>{props.title}</h3>
      <a href={props.github} target="_blank" rel="noopener noreferrer">
        <FaGithub size={"2rem"}/>
      </a>
      <p>{props.description}</p>
      { props.projectPage && <Link href={props.projectPage}>More Info</Link> }
    </div>
  )
}

export default ProjectCard