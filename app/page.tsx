import Image from "next/image";
import styles from "./Home.module.css";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";


const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image 
          src="/profile_cropped.jpg"
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>
      <div className={styles.details}>
        <h1>Brittany Mueller</h1>
        <p>
          Welcome to my page!  I'm Brittany Mueller, a recent computer science graduate from the University of Guelph.  
          I have experience in a variety of languages and technologies, but my passion is backend development.  
          I enjoy designing and optimizing databases, finding efficient solutions for complex problems, and diving into the details 
          to figure out how systems work. My hobbies include trying new recipes and cuisines, keeping my large collection of house plants, and playing video games.   
        </p>
        <div className={styles.connectWrapper}>
          <a className={styles.resumeBtn} href="/Brittany_Mueller_Resume_2024.pdf" target="_blank">View Resume</a>
          <a href="https://www.linkedin.com/in/brittany-a-mueller/" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.icon} size="2rem" /></a>
          <a href="https://github.com/BrittanyMueller" target="_blank" rel="noopener noreferrer"><FaGithub className={styles.icon} size="2rem" /></a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
