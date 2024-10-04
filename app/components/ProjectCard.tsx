'use client'
import React from 'react'
import Image from "next/image";
import styles from './ProjectCard.module.css'
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

interface ProjectDetails {
  title: string
  images: string[]
  description: string[]
  github: string
  projectPage?: string
}

const ProjectCard : React.FunctionComponent<ProjectDetails> = (props) => {
  return (
    <div className={styles.card}>

      <Carousel 
        className={styles.carousel}
        showStatus={false} 
        showArrows={true} 
        showThumbs={false} 
        autoPlay={true} 
        infiniteLoop={true}
      >
        { props.images.map((image, index) => (
          <Image 
            key={index}
            src={image}
            width={200}
            height={200}
            alt="Screenshot of project."
            unoptimized={true}
          />
        ))} 
      </Carousel>
      <div className={styles.contentWrapper}>
        <h2>{props.title}</h2>
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={"2rem"}/>
        </a>
        { props.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
        { props.projectPage && <Link href={props.projectPage} style={{fontWeight: 'bold', textDecoration: 'underline'}}>Play Game</Link> }
      </div>
    </div>
  )
}

export default ProjectCard
