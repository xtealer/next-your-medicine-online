export enum NETWORK_STATUS_KEY {
  ONLINE = "online",
  OFFLINE = "offline",
  LOADING = "loading",
}

export interface NetworkStatusEvent {
  status: NETWORK_STATUS_KEY;
  updated: Date;
}
