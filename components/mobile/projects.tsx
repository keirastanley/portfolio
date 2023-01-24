import styles from "@/styles/mobile/projects_mobile.module.css"
import { projects } from "@/data/projects"
import { useState } from "react"
import { projectObjType } from "@/data/types"
import Link from "next/link"
import ProjectMobile from "./project"

export default function ProjectsMobile() {
    const [projectView, setProjectView] = useState<projectObjType>()

    return <div className={styles.projects_container}>
        <div className={styles.project_content}>
            <Link href="/"><div className={styles.close_button}><button></button></div></Link>
            <div className={styles.project_icons}>
            {projectView === undefined ? projects.map(project => <div className={styles.hover_container} onClick={() => setProjectView(project)} key={project.name}>
                <div className={styles.hover_target}>
                    <img src="/images/icons/soft-folder.png" className={styles.folder_icon}></img>
                    <p>{project.name}</p>
                </div>
                </div>
                ) : <ProjectMobile projectView={projectView} setProjectView={setProjectView}/>}
            </div>      
        </div>
    </div>
}