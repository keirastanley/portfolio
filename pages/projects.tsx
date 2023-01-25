import Projects from "@/components/desktop/projects";
import ProjectsMobile from "@/components/mobile/projects";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function ProjectsPage() {

    const [view, setView] = useState("desktop")

    useEffect(() => {
       window.matchMedia('(max-width: 650px)').matches ?  setView("mobile") : setView("desktop")
   }, [])

    useEffect(() => {
        console.log(view)
    }, [view])

    return <>
    <Head>
    <title>Projects</title>
    </Head>
    {view === "desktop" ? <Projects/> : <ProjectsMobile/> }
    </>
}