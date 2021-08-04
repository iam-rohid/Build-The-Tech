import React from "react";
import Head from "next/head";
import HeroSection from "../src/components/home/sections/hero";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Build the tech</title>
        <meta
          name="description"
          content="Let’s build some Amazing Products Together!"
        />
      </Head>
      <HeroSection />
    </>
  );
};

export default HomePage;
