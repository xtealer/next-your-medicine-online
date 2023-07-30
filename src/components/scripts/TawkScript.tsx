import { FC } from "react";
import Script from "next/script";

const TawkScript: FC = () => {
  return (
    <Script
      id="tawk-script"
      async
      strategy="afterInteractive"
      src="https://embed.tawk.to/63d866f347425128791089d8/1go2l4ahc"
    />
  );
};

export default TawkScript;
