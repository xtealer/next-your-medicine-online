import { FC, ReactNode } from "react";
import { Partytown } from "@builder.io/partytown/react";

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
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${env.firebaseConfig.measurementId}`}
      />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${env.firebaseConfig.measurementId}', { 
                page_path: window.location.pathname,
            });
        `,
        }}
      />

      {children}
    </>
  );
};

export default AppServices;
