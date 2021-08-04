import Head from "next/head";
import React from "react";
import { siteName } from "../src/data/app-data";

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Services - {siteName}</title>
        <meta name="description" content={`Services for ${siteName}`} />
      </Head>
      Services page
    </>
  );
};

export default ServicesPage;
