import { FC, useCallback } from "react";
import Script from "next/script";

import { toggleSupport } from "@/helpers/tawkHelpers";
import { msDelay } from "@/helpers/delayed";

const TawkScript: FC = () => {
  const onLoad = useCallback(() => {
    msDelay(2000).then((v) => {
      toggleSupport();
    });
  }, []);

  return (
    <Script
      strategy="lazyOnload"
      src="https://embed.tawk.to/63d866f347425128791089d8/1go2l4ahc"
      onLoad={onLoad}
    />
  );
};

export default TawkScript;
