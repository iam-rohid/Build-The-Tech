import React from "react";
import Head from "next/head";
import HeroSection from "../components/home/sections/hero";
import { siteDescription, siteName } from "../data/app-data";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={siteDescription} />
      </Head>
      <HeroSection />
    </>
  );
};

export default HomePage;
