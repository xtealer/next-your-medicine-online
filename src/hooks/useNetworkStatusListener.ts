import { useEffect } from "react";
import { useNetworkStatusStore } from "@/context/useNetworkStatusStore";
import useNetworkStatus from "./useNetworkStatus";

const useNetworkStatusListener = () => {
  const { setStatus } = useNetworkStatusStore();
  const netStatus = useNetworkStatus();

  useEffect(() => {
    setStatus(netStatus);
  }, [netStatus, setStatus]);

  return;
};

export default useNetworkStatusListener;
