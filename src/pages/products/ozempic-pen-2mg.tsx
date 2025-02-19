import Head from "next/head";

import MainLayout from "@/layouts/main/MainLayout";
import BackTopRow from "@/components/generic/BackTopRow";

import OzempicProduct from "@/components/products/OzempicProduct";
import { NextPageWithLayout } from "@/types/Layout";
import { useRouter } from "next/router";

import { useEffect } from "react";

const OzempicProductPage: NextPageWithLayout = () => {
    const router = useRouter();
  
    useEffect(() => {
      router.replace(REDIRECT_URL);
    }, [router]);
  
    return null;
  };
  return (
    <>
      <Head>
        <title>Get Ozempic Pen 2mg / 1,5ml Now | Your Medicine Online</title>
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
