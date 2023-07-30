import { FC, ReactNode } from "react";

import useNetworkStatusListener from "./hooks/useNetworkStatusListener";
import Script from "next/script";
import * as env from "@/lib/env";

const AppServices: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
  ...props
}) => {
  useNetworkStatusListener();

  return (
    <>
      <Script
        id="gtm-script"
        strategy="worker"
        src={
          "https://www.googletagmanager.com/gtag/js?id=" +
          env.firebaseConfig.measurementId
        }
      />
      <Script strategy="worker" id="gtm-init">
        {`
   window.dataLayer = window.dataLayer || [];
   window.gtag = function gtag(){window.dataLayer.push(arguments);}
   gtag('js', new Date());
   gtag('config', '${env.firebaseConfig.measurementId}');
 `}
      </Script>

      {children}
    </>
  );
};

export default AppServices;
