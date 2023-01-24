import styles from "@/styles/desktop/contact.module.css"

export default function Contact() {
    return <div className={styles.contact_container}>
                <div className={styles.icon_container}>
                    <div className={styles.link}>
                        <img src="/images/icons/soft-github.png"></img>
                        <a href="https://github.com/keirastanley">GitHub</a></div>
                    <div className={styles.link}>
                        <img src="/images/icons/soft-linkedin.png"></img>
                        <a href="https://linkedin.com/in/keirastanley">LinkedIn</a></div>
                    <div className={styles.link}>
                        <img src="/images/icons/soft-envelopes.png"/>
                        <p>keiraestanley@gmail.com</p>
                    </div>
                </div>
    </div>
}