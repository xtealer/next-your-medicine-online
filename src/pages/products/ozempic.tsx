import MainLayout from "@/layouts/main/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";
import { useRouter } from "next/router";

import { useEffect } from "react";

const REDIRECT_URL = "ozempic-pen-2mg";

const OzempicPage: NextPageWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(REDIRECT_URL);
  }, [router]);

  return null;
};

OzempicPage.getLayout = (c) => {
  return <MainLayout>{c}</MainLayout>;
};

export default OzempicPage;
