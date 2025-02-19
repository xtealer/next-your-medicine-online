import { NextPageWithLayout } from "@/types/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

// TODO: Build success page ui.
const SuccessPage: NextPageWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    router.replace("/#shop");
  }, [router, router.isReady]);

  return null;
};

export default SuccessPage;
