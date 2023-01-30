import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";

const TermsOfServicePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
      </Head>
    </>
  );
};

TermsOfServicePage.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default TermsOfServicePage;
