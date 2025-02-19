import Head from "next/head";

import FAQContentComponent from "@/components/faq/FAQContentComponent";
import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";
import BackTopRow from "@/components/generic/BackTopRow";

const FAQPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>FAQ | Your Medicine Online</title>
      </Head>
      {/* <FAQContentComponent /> */}
      Coming Soon!
      <BackTopRow />
    </>
  );
};

FAQPage.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default FAQPage;
