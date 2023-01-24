import styles from "@/styles/mobile/links_mobile.module.css"
import Link from "next/link"

export default function LinksMobile(){
    return <div className={styles.link_container}>
    <Link href="/projects">
        <div className={styles.link}>
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