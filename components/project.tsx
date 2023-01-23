import { projectObjType } from "@/data/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from "../styles/project.module.css"

type propsObjType = {
    view: projectObjType,
    setView: Function;
}

export default function Project({view, setView} : propsObjType) {
    return <>
    <div className={styles.project_container}>
        <div className={styles.project_info}>
            <div className={styles.weblinks}>
                <h4>{view.name}</h4>
                <a href={view.repo}><img src="/images/icons/soft-github.png" className={styles.github_logo}></img></a>
                {view.link ? <a href={view.link}><img src="/images/icons/soft-internet.png" className={styles.internet_logo}></img></a> : null}
            </div>
            <Carousel showArrows={true} width={400} showThumbs={false}>
                {view.images.map(image => <img src={image} alt={image} key={image}/>)}
            </Carousel>
            <i>{view.description}</i>
        </div>
        <div className={styles.topics_container}>
            <div className={styles.all_projects} onClick={() => setView()}>
                <img src="/images/icons/soft-projects.png" className={styles.projects_icon}></img>
                <p>All projects</p>
            </div>
            <div className={styles.hover_container}>
                <div className={styles.hover_target}>
                    <img src="/images/icons/soft-notebook.png" className={styles.todo_icon}></img>
                    <p tabIndex={0}>To dos</p>
                </div>
                <aside className={styles.hover_popup}><ul>To dos:
                    {view.todos.map(todo => <li key={todo}>{todo}</li>)}
                </ul>
                </aside>
            </div>
            <div className={styles.help_icons}>
            {view.tags.map(element => element.info.text.length > 0 ?
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
    </>
}