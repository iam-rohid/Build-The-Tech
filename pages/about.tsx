import Head from "next/head";
import React from "react";
import { siteName } from "../src/data/app-data";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About - {siteName}</title>
        <meta name="description" content={`About page for ${siteName}`} />
      </Head>
      About Page
    </>
  );
};

export default AboutPage;
