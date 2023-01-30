import { FC, ReactNode } from "react";

import useNetworkStatusListener from "./hooks/useNetworkStatusListener";
import useInitAnalytics from "./hooks/useInitAnalytics";

const AppServices: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
  ...props
}) => {
  useNetworkStatusListener();
  useInitAnalytics();

  return <>{children}</>;
};

export default AppServices;
