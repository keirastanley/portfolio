import Contact from "@/components/desktop/contact";
import ContactMobile from "@/components/mobile/contact";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function ContactPage() {

    const [view, setView] = useState("desktop")

    useEffect(() => {
       window.matchMedia('(max-width: 800px)').matches ?  setView("mobile") : setView("desktop")
   }, [])
  
    useEffect(() => {
        console.log(view)
    }, [view])

    return <>
        <Head>
    <title>Contact</title>
    </Head>
    {view === "desktop" ? <Contact/> : <ContactMobile/>}
    </>
}