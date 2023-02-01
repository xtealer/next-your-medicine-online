import { useEffect } from "react";

import { Analytics, logEvent } from "@firebase/analytics";
import { firebaseAnalytics } from "@/lib/initFirebase";
import { Timeout } from "@/types/Timeout";

const useInitAnalytics = () => {
  useEffect(() => {
    const timeoutRef = setTimeout(async () => {
      try {
        await logEvent(firebaseAnalytics as Analytics, "app_started");
      } catch (err) {
        console.log("useInitAnalytics:init:error", err);
      }
    }, Timeout.LONG);

    return () => {
      clearTimeout(timeoutRef);
    };
  }, []);

  return;
};

export default useInitAnalytics;
