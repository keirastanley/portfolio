import styles from "@/styles/desktop/projects.module.css"
import { projects } from "@/data/projects"
import { useState } from "react"
import { projectObjType } from "@/data/types"
import Link from "next/link"
import Project from "./project"

export default function Projects() {
    const [projectView, setProjectView] = useState<projectObjType>()

    return <div className={styles.projects_container}>
        <div className={styles.project_content}>
            <Link href="/"><div className={styles.close_button}><button></button></div></Link><div className={styles.project_icons}>
            {projectView === undefined ? projects.map(project => 
            <div className={styles.hover_container} onClick={() => setProjectView(project)} key={project.name}>
                    <div className={styles.hover_target}>
                        <img src="/images/icons/soft-folder.png" className={styles.folder_icon}></img>
                        <p>{project.name}</p>
                    </div>
                    <aside className={styles.hover_popup}>
                        <p>{project.description}</p>
                        <img src={project.images[0]}></img>
                        <div className={styles.weblinks}>
                        <a href={project.repo}>
                            <img src="/images/icons/soft-github.png" className={styles.github_logo}></img>
                        </a>
                        {project.link ? <a href={project.link}><img src="/images/icons/soft-internet.png" className={styles.internet_logo}></img></a> : null}
                    </div>
                </aside>
                </div>) : <Project projectView={projectView} setProjectView={setProjectView}/>}
            </div>
        </div>
    </div>
}