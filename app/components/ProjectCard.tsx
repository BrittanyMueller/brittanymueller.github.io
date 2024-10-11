'use client'

import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import styles from './ProjectCard.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';

interface ProjectDetails {
  title: string
  images: string[]
  description: string[]
  github: string
  projectPage?: string
  isMobile?: boolean
}

const ProjectCard : React.FunctionComponent<ProjectDetails> = (props) => {
  return (
    <div className={styles.card}>
      <Carousel 
        className={`${styles.carousel} ${props.isMobile && styles.mobileProject}`}
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
      <div className={styles.detailsWrapper}>
        <div className={styles.titleContainer}>
          <h2>{props.title}</h2>
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={"1.5rem"}/>
          </a>
          { props.projectPage && <Link href={props.projectPage}>
            <FaPlayCircle size={"1.5rem"}/>
          </Link> }
        </div>
        <ul className={styles.descriptionList}>
          { props.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
