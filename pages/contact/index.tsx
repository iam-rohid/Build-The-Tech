import Head from "next/head";
import React from "react";
import { siteName } from "../../data/app-data";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contanct - {siteName}</title>
        <meta name="description" content={`Contact page for ${siteName}`} />
      </Head>
      Contact page
    </>
  );
};

export default ContactPage;
