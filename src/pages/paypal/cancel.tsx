import { NextPageWithLayout } from "@/types/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

// TODO: Build cancel page ui.
const CancelPage: NextPageWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    router.replace("/#shop");
  }, [router, router.isReady]);

  return null;
};

export default CancelPage;
