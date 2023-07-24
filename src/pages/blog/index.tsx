import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";

import ComingSoonComponent from "@/components/generic/ComingSoonComponent";

const Blog: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Blog | Your Medicine Online</title>
      </Head>
      <ComingSoonComponent />
    </>
  );
};

Blog.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default Blog;
