import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image 
          src="/profile_cropped.png"
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
        />
      </div>
      <div className={styles.details}>
        <h1>Brittany Mueller</h1>
        <p>
          Welcome to my page! I'm Brittany Mueller, a recent Computer Science graduate and aspiring backend developer.
        </p>
      </div>
    </div>
  );
}
