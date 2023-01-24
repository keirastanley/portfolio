import Links from '@/components/links'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Nanum+Pen+Script&family=VT323&display=swap" rel="stylesheet"/>
      <link rel="icon" href="/images/icons/soft-typing-hand.png" />
    </Head>
    <div className="page_container">
      <div className="main_container">
          <Links/>
          <div className="window_container">
          <Component {...pageProps} />
          </div>
      </div>
      <div className="footer">
        <div className="footer-fixed-info"><Link href="/about">Keira Stanley</Link></div>
        <div className="footer-fixed-info-2">
          <a href="https://github.com/keirastanley"><img src="/images/icons/soft-github.png"></img></a>
          <a href="https://linkedin.com/in/keirastanley"><img src="/images/icons/soft-linkedin.png"></img></a></div>
        <div className="ticker-wrap">
          <div className="ticker">
            <div className="ticker__item">Junior full-stack developer based in London.</div>
            <div className="ticker__item">Experienced with JavaScript, HTML, CSS, Node.js, React.js, Next.js, PostgreSQL and Express.</div>
            {/* <div className="ticker__item"></div> */}
        </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  </>
}
