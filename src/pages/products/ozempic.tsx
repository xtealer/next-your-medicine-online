import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";
import BackTopRow from "@/generic/BackTopRow";
import OzempicProduct from "@/components/products/OzempicProduct";

const OzempicProductPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Buy Ozempic Now</title>
        <meta name="keywords" content="Ozempic,Ozempic Online,Ozempic Paypal" />
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
