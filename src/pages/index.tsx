import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Buy Ozempic Now</title>
        <meta name="keywords" content="Ozempic,Ozempic Online,Ozempic Paypal" />
      </Head>
    </>
  );
};

Home.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default Home;
