import styles from "@/styles/desktop/links.module.css"
import Link from "next/link"

export default function Links(){

    function refreshPage() {
      if(window.location.pathname === "/projects") {
        window.location.reload()
      }
    }

    return <div className={styles.link_container}>
    <Link href="/projects">
        <div className={styles.link} onClick={refreshPage}>
        <img src="/images/icons/soft-projects.png" className={styles.icon}></img>
        <p>Projects</p>
        </div>
    </Link>
    <Link href="/about">
        <div className={styles.link}>
        <img src="/images/icons/soft-typing-hand.png" className={styles.icon}></img>
        <p>About Me</p>
        </div>
    </Link>
    <Link href="/contact">
      <div className={styles.link}>
        <img src="/images/icons/soft-envelopes.png" className={styles.icon}></img>
        <p>Contact</p>
      </div>
    </Link>
  </div>
}