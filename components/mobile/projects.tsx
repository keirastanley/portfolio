import styles from "@/styles/mobile/projects_mobile.module.css"
import { projects } from "@/data/projects"
import { useState } from "react"
import { projectObjType } from "@/data/types"
import Link from "next/link"
import Project from "./project"

export default function Projects() {
    const [singleProjectView, setSingleProjectView] = useState(false)
    const [projectIndex, setProjectIndex] = useState(0)

    console.log("hey", singleProjectView)

    return <div className={styles.projects_container}>
        <div className={styles.project_content}>
            <Link href="/">
                <div className={styles.close_button}>
                    <button></button>
                </div>
            </Link>
            <div className={styles.project_icons}>
                {singleProjectView ? 
                    <Project setSingleProjectView={setSingleProjectView} projectIndex={projectIndex} setProjectIndex={setProjectIndex}/> 
                    : 
                    projects.map((project, index) => 
                        <div className={styles.hover_container} onClick={() => {setSingleProjectView(true); setProjectIndex(index)}} key={project.name}>
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
                                    {project.link ? 
                                        <a href={project.link}>
                                            <img src="/images/icons/soft-internet.png" className={styles.internet_logo}></img>
                                        </a> 
                                        : null}
                                </div>
                            </aside>
                        </div>)}
            </div>
        </div>
    </div>
}