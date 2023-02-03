import Links from '@/components/desktop/links'
import LinksMobile from '@/components/mobile/links'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [view, setView] = useState("desktop")

  useEffect(() => {
     window.matchMedia('(max-width: 650px)').matches ?  setView("mobile") : setView("desktop")
 }, [])

  useEffect(() => {
      console.log(view)
  }, [view])
  
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Nanum+Pen+Script&family=VT323&display=swap" rel="stylesheet"/>
      <link rel="icon" href="/images/icons/soft-typing-hand.png" />
    </Head>
    <div className="page_container">
      <div className="main_container">
          {view === "desktop" ? <Links/> : <LinksMobile/>}
          <div className="window_container">
          <Component {...pageProps} />
          </div>
      </div>
      <div className="footer">
        <div className="footer-fixed-info"><Link href="/about">Keira Stanley</Link></div>
        <div className="footer-fixed-info-2">
          <a href="https://github.com/keirastanley"><img src="/images/icons/soft-github.png"></img></a>
          <a href="https://linkedin.com/in/keirastanley"><img src="/images/icons/soft-linkedin.png"></img></a></div>
          {view === "desktop" ? <div className="ticker-wrap">
            <div className="ticker">
              <div className="ticker__item">Junior full-stack developer based in London.
              </div>
              <div className="ticker__item">Experienced with JavaScript, HTML, TypeScript, CSS, Node.js, React.js, Next.js, PostgreSQL and Express.
              </div>
              <div className="ticker__item">Currently learning Python and how to build mobile apps with React Native.
              </div>
          </div>
        </div> : null}
      </div>
    </div>
  </>
}
