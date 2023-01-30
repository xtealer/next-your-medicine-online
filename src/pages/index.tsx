import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Buy Ozempic</title>
      </Head>
      Test
    </>
  );
};

Home.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default Home;
