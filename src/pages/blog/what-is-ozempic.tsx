import Head from "next/head";

import { NextPageWithLayout } from "@/types/Layout";
import MainLayout from "@/layouts/main/MainLayout";

import WhatIsOzempicMDX from "@/posts/WhatIsOzempic.mdx";
import { Box } from "@chakra-ui/react";

const WhatIsOzempic: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>What Is Ozempic? | Your Medicine Online</title>
      </Head>
      <Box textAlign="center" py="10">
        <WhatIsOzempicMDX />
      </Box>
    </>
  );
};

WhatIsOzempic.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default WhatIsOzempic;
