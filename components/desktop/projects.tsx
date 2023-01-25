import styles from "@/styles/desktop/projects.module.css"
import { projects } from "@/data/projects"
import { useState } from "react"
import { projectObjType } from "@/data/types"
import Link from "next/link"
import Project from "./project"

export default function Projects() {
    const [singleProjectView, setSingleProjectView] = useState(false)
    const [projectIndex, setProjectIndex] = useState(0)

    function handleIndexLeft(){
        if (projectIndex > 0) {
            setProjectIndex(projectIndex - 1)
        }
    }

    function handleIndexRight(){
        if (projectIndex < projects.length) {
            setProjectIndex(projectIndex + 1)
        }
    }

    return <div className={styles.projects_container}>
        <div className={styles.project_content}>
            <Link href="/"><div className={styles.close_button}><button></button></div></Link>
            {singleProjectView ? <div className={styles.arrows_container}>
                    {projectIndex > 0 ? <img src="/images/icons/arrow.png" className={styles.arrow_left} onClick={handleIndexLeft}></img> : null}
                    <div className={styles.arrow_space}></div>
                    {projectIndex < projects.length - 1 ? <img src="/images/icons/arrow.png" className={styles.arrow_right} onClick={handleIndexRight}></img> : null}
        </div> : null}
            <div className={styles.project_icons}>
            {singleProjectView ? <Project setSingleProjectView={setSingleProjectView} projectIndex={projectIndex}/> : projects.map((project, index) => 
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
                        {project.link ? <a href={project.link}><img src="/images/icons/soft-internet.png" className={styles.internet_logo}></img></a> : null}
                    </div>
                </aside>
                </div>)}
            </div>
        </div>
    </div>
}