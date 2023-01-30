import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";

const PrivacyPolicy: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
    </>
  );
};

PrivacyPolicy.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default PrivacyPolicy;
