import React from "react";
import LandingSection from "../src/components/home-sections/landing";
import Head from "next/head";
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
      <LandingSection />
    </>
  );
};

export default HomePage;
