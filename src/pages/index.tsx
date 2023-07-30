import dynamic from "next/dynamic";
import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";
import HomeProductsCarousel from "@/components/home/HomeProductsCarousel";
import HomeAdvantageCards from "@/components/home/HomeAdvantageCards";

const BackTopRow = dynamic(() =>
  import("@/components/generic/BackTopRow").then((m) => m)
);
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
        <title>Shop | Your Medicine Online</title>
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
