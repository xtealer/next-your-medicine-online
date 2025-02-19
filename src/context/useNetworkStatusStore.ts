import { NetworkStatusEvent, NETWORK_STATUS_KEY } from "@/types/NetworkStatus";
import { devtools } from "zustand/middleware";
import { create } from "zustand";

export interface NetworkStatusData {
  status: NetworkStatusEvent;
}

export interface NetworkStatusState extends NetworkStatusData {
  setStatus: (status: NetworkStatusData["status"]) => void;
}

export const useNetworkStatusStore = create<NetworkStatusState>()(
  devtools((set) => ({
    status: {
      status: NETWORK_STATUS_KEY.LOADING,
      updated: new Date(),
    },
    setStatus: (status: NetworkStatusData["status"]) =>
      set((state) => ({ status })),
  }))
);
