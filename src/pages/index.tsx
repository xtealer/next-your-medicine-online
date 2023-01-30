import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Buy Ozempic Now</title>
      </Head>
    </>
  );
};

Home.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default Home;
