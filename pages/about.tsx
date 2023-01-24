import AboutMe from "@/components/desktop/about";
import AboutMeMobile from "@/components/mobile/about";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function AboutMePage(){

    const [view, setView] = useState("desktop")

    useEffect(() => {
       window.matchMedia('(max-width: 800px)').matches ?  setView("mobile") : setView("desktop")
   }, [])
  
    useEffect(() => {
        console.log(view)
    }, [view])
    
    return <>
        <Head>
            <title>About me</title>
        </Head>
        {view === "desktop" ? <AboutMe/> : <AboutMeMobile/>}

    </>
}