import { projectObjType } from "@/data/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from "@/styles/mobile/project_mobile.module.css"

type propsObjType = {
    projectView: projectObjType,
    setProjectView: Function;
}

export default function ProjectMobile({projectView, setProjectView} : propsObjType) {

        return <>
        <div className={styles.project_container}>
            <div className={styles.project_info}>
                <div className={styles.weblinks}>
                    <h4>{projectView.name}</h4>
                    <a href={projectView.repo}><img src="/images/icons/soft-github.png" className={styles.github_logo}></img></a>
                    {projectView.link ? <a href={projectView.link}><img src="/images/icons/soft-internet.png" className={styles.internet_logo}></img></a> : null}
                </div>
                <Carousel showArrows={true} width={200} showThumbs={false}>
                    {projectView.images.map(image => <img src={image} alt={image} key={image}/>)}
                </Carousel>
                <i>{projectView.description}</i>
                <div className={styles.all_projects} onClick={() => setProjectView()}>
                        <img src="/images/icons/soft-projects.png" className={styles.projects_icon}></img>
                        <p>All projects</p>
                </div>
            </div>
        </div>
        </>
    }