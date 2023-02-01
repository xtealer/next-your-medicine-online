import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";
import HomeProductsCarousel from "@/components/home/HomeProductsCarousel";
import HomeAdvantageCards from "@/components/home/HomeAdvantageCards";
import Script from "next/script";
import HomeAboutUsComponent from "@/components/home/HomeAboutUsComponent";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Buy Ozempic Now</title>
        <meta name="keywords" content="Ozempic,Ozempic Online,Ozempic Paypal" />
      </Head>
      <HomeProductsCarousel />
      <HomeAdvantageCards />
      <HomeAboutUsComponent />
      {/**
       // * Scripts
      */}
      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/63d866f347425128791089d8/1go2l4ahc"
      />
    </>
  );
};

Home.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default Home;
