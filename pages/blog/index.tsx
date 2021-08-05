import Head from "next/head";
import React from "react";
import { siteName } from "../../data/app-data";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog - {siteName}</title>
        <meta name="description" content={`Blog page for ${siteName}`} />
      </Head>
      Blog Page
    </>
  );
};

export default BlogPage;
