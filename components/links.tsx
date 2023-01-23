import styles from "../styles/links.module.css"
import Link from "next/link"

export default function Links(){
    return <div className={styles.link_container}>
    <Link href="/projects/projects">
        <div className={styles.link}>
        <img src="/images/icons/soft-projects.png" className={styles.icon}></img>
        <p>Projects</p>
        </div>
    </Link>
    <Link href="/aboutme/aboutme">
        <div className={styles.link}>
        <img src="/images/icons/soft-typing-hand.png" className={styles.icon}></img>
        <p>About Me</p>
        </div>
    </Link>
    <div className={styles.link}>
      <img src="/images/icons/soft-envelopes.png" className={styles.icon}></img>
      <p>Contact</p>
    </div>
  </div>
}