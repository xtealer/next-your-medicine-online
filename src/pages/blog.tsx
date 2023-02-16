import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";

import ComingSoonComponent from "@/components/generic/ComingSoonComponent";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Blog | Your Medicine Online</title>
      </Head>
      <ComingSoonComponent />
    </>
  );
};

Home.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default Home;
