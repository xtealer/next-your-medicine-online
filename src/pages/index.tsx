import dynamic from "next/dynamic";
import Script from "next/script";
import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";
import HomeProductsCarousel from "@/components/home/HomeProductsCarousel";
import HomeAdvantageCards from "@/components/home/HomeAdvantageCards";
import BackTopRow from "@/components/generic/BackTopRow";

const HomeAboutUsComponent = dynamic(() =>
  import("@/components/home/HomeAboutUsComponent").then((m) => m)
);
const HomeFAQComponent = dynamic(() =>
  import("@/components/home/HomeFAQComponent").then((m) => m)
);

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home | Your Medicine Online</title>
      </Head>
      <HomeProductsCarousel />
      <HomeAdvantageCards />
      <HomeAboutUsComponent />
      <HomeFAQComponent />
      <BackTopRow />
    </>
  );
};

Home.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default Home;
