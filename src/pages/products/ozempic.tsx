import Head from "next/head";

import MainLayout from "@/layouts/main/MainLayout";
import BackTopRow from "@/generic/BackTopRow";

import OzempicProduct from "@/components/products/OzempicProduct";
import { NextPageWithLayout } from "@/types/Layout";

const OzempicProductPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Buy Ozempic Pen 2mg / 1,5ml Now | Your Medicine Online</title>
        <meta
          name="keywords"
          content="Get Ozempic, Get Ozempic Pen, Buy Ozempic, Get Ozempic Now, Buy Ozempic Now, Ozempic,Ozempic Online,Ozempic Paypal,Ozempic USA,Your Medicine Online Ozempic,Your Medicine Online Ozempic Pen"
        />
      </Head>
      <OzempicProduct />
      <BackTopRow />
    </>
  );
};

OzempicProductPage.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default OzempicProductPage;
