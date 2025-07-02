"use client";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head';
import { createContext, useEffect, useState } from "react";
export const ToggleContext = createContext();
export default function App({ Component, pageProps }) {
  const [toggleColor, setToggleColor] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with your desired configuration
  }, []);
  return (<>
    <Head>
      <title>Mohammad Mobarak Hossen Portfolio</title>
    </Head>
    <ToggleContext.Provider value={{ toggleColor, setToggleColor }}>
      <Component {...pageProps} />
    </ToggleContext.Provider>
  </>
  );
}
