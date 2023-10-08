
import React from "react";
import Head from "next/head";
import "../globals.css";
import Header from '../components/header/header.jsx'; 
import Footer from '../components/footer/footer.jsx';

export default function App({ Component, pageProps }) {
  if (!pageProps || !Component) return <div>loading</div>
  return (
  
    <React.Fragment>
    <Head>
      <title>locofy-react-nextjs-project</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    <Header/>
        <Component {...pageProps} />
    <Footer/>
    </React.Fragment>
      
   
  )
}
