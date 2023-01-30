import { useCallback, useEffect, useState } from "react";
import { NetworkStatusEvent, NETWORK_STATUS_KEY } from "@/types/NetworkStatus";
import useDidHydrate from "./useDidHydrate";

const useNetworkStatus = () => {
  const { didHydrate } = useDidHydrate();
  const [status, setStatus] = useState<NetworkStatusEvent>({
    status: NETWORK_STATUS_KEY.ONLINE,
    updated: new Date(),
  });

  const offlineHandler = useCallback(() => {
    setStatus({
      status: NETWORK_STATUS_KEY.ONLINE,
      updated: new Date(),
    });
  }, []);

  const onlineHandler = useCallback(() => {}, []);

  useEffect(() => {
    if (!didHydrate) {
      return;
    }

    window.addEventListener(NETWORK_STATUS_KEY.OFFLINE, offlineHandler);
    window.addEventListener(NETWORK_STATUS_KEY.ONLINE, onlineHandler);

    return () => {
      window.removeEventListener(NETWORK_STATUS_KEY.OFFLINE, offlineHandler);
      window.removeEventListener(NETWORK_STATUS_KEY.ONLINE, onlineHandler);
    };
  }, [didHydrate, offlineHandler, onlineHandler]);

  return status;
};

export default useNetworkStatus;
