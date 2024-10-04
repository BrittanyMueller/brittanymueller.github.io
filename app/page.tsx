import Image from "next/image";
import styles from "./Home.module.css";

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
          Welcome to my page! I'm Brittany Mueller, a recent Computer Science graduate and aspiring backend developer.
        </p>
        <a href="/resume.pdf" target="_blank"><button>View Resume</button></a>
      </div>
    </div>
  );
}

export default HomePage;
