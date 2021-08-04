import React from "react";
import Head from "next/head";
import HeroSection from "../src/components/home/sections/hero";
import { siteDescription, siteName } from "../src/data/app-data";

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
