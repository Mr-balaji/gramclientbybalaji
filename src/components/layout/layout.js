import React, { useEffect,useState} from "react";
import Top from "./top";

import Head from "next/head";
import noInternet from 'no-internet'
import NoConnection from "@/pages/noconnection";

export default function Layout({ children, ...pageProps }) {
  
  const [IsOnline, setOnline] = useState(true);
  useEffect(() => {
    noInternet().then(offline => {
      if (offline) {
        setOnline(false); 
      }
    })
  }, []);
  
  return (
    <>
      <Head>
        <title>{pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to GramSeva</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      {IsOnline ? <><Top pageTitle={pageProps.pageTitle} /><div className="px-[30px]  pt-4 pb-6 "><>{children}</></div> </> : <NoConnection/>}

    </>
  );
}
 