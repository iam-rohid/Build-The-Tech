import React from "react";
import Head from "next/head";
import { siteDescription, siteName } from "../data/app-data";
import { HeroSection, ServicesSection } from "../components/home/sections";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={siteDescription} />
      </Head>
      <HeroSection />
      <ServicesSection />
    </>
  );
};

export default HomePage;
