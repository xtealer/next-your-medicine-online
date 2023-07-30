import { FC } from "react";
import Script from "next/script";

import useNetworkStatusListener from "./hooks/useNetworkStatusListener";
import TawkScript from "./components/scripts/TawkScript";
import { firebaseConfig } from "@/lib/env";

const AppServices: FC = ({ ...props }) => {
  useNetworkStatusListener();

  return (
    <>
      <Script
        async
        id="gtm-script"
        strategy="worker"
        src={
          "https://www.googletagmanager.com/gtag/js?id=" +
          firebaseConfig.measurementId
        }
      />
      <Script strategy="worker" id="gtm-init" async>
        {`
   window.dataLayer = window.dataLayer || [];
   window.gtag = function gtag(){window.dataLayer.push(arguments);}
   gtag('js', new Date());
   gtag('config', '${firebaseConfig.measurementId}');
 `}
      </Script>
      <TawkScript />
    </>
  );
};

export default AppServices;
