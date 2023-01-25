import { projectObjType } from "@/data/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from "@/styles/desktop/project.module.css"
import {projects} from "../../data/projects"
import { useState } from "react";

type propsObjType = {
    setSingleProjectView: Function;
    projectIndex: number;
}

export default function Project({setSingleProjectView, projectIndex} : propsObjType) {

    return <>{
    projects.map((project, index) => index === projectIndex ? 
    <div className={styles.window_container}>
        <div className={styles.project_container}>
            <div className={styles.project_info}>
                <div className={styles.weblinks}>
                    <h4>{project.name}</h4>
                    <a href={project.repo}><img src="/images/icons/soft-github.png" className={styles.github_logo}></img></a>
                    {project.link ? <a href={project.link}><img src="/images/icons/soft-internet.png" className={styles.internet_logo}></img></a> : null}
                </div>
                <Carousel showArrows={true} width={400} showThumbs={false}>
                    {project.images.map(image => <img src={image} alt={image} key={image}/>)}
                </Carousel>
                <i>{project.description}</i>
            </div>
            <div className={styles.topics_container}>
                {/* <div className={styles.all_projects} onClick={() => setSingleProjectView(false)}>
                    <img src="/images/icons/soft-projects.png" className={styles.projects_icon}></img>
                    <p>All projects</p>
                </div> */}
                {
                    project.todos.length > 0 ? <div className={styles.hover_container}>
                    <div className={styles.hover_target}>
                        <img src="/images/icons/soft-notebook.png" className={styles.todo_icon}></img>
                        <p tabIndex={0}>To dos</p>
                    </div>
                    <aside className={styles.hover_popup}><ul>To dos:
                        {project.todos.map(todo => <li key={todo}>{todo}</li>)}
                    </ul>
                    </aside>
                </div> : null
                }
                {
                    project.collaborators.length > 0 ? <div className={styles.hover_container}>
                    <div className={styles.hover_target}>
                        <img src="/images/icons/soft-users.png" className={styles.todo_icon}></img> Collaborators
                    </div>
                    <aside className={styles.hover_popup}><ul> Collaborators: 
                        {project.collaborators.map(collaborator => <li key={collaborator.name}><a href={collaborator.link}>{collaborator.name}</a></li>)}
                    </ul>
                    </aside>
                </div> : null
                }
                <div className={styles.help_icons}>
                {project.tags.map(element => element.info.text.length > 0 ?
                    <div className={styles.hover_container} key={element.info.text}>
                        <div className={styles.hover_target}>
                            <img src="/images/icons/soft-help.png" className={styles.help_icon}></img>
                            <p tabIndex={0}>{element.topic}</p>
                        </div>
                        <aside className={styles.hover_popup}>
                        <p>{element.info.text}</p>
                        </aside>
                    </div> : null)}
                </div>
            </div>
        </div>
    </div> : null)}</>  
}