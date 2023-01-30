import { useEffect, useState } from "react";

import { Analytics, logEvent } from "@firebase/analytics";
import { firebaseAnalytics } from "@/lib/initFirebase";
import { Timeout } from "@/types/Timeout";

const useInitAnalytics = () => {
  const [failedDate, setFailedDate] = useState(new Date());

  useEffect(() => {
    const timeoutRef = setTimeout(async () => {
      try {
        await logEvent(firebaseAnalytics as Analytics, "app_started");
      } catch (err) {
        console.log("useInitAnalytics:init:error", err);
        setFailedDate(new Date());
      }
    }, Timeout.LONG);

    return () => {
      clearTimeout(timeoutRef);
    };
  }, [failedDate]);

  return;
};

export default useInitAnalytics;
