import { FC } from "react";
import Script from "next/script";

const TawkScript: FC = () => {
  return (
    <Script
      async
      id="tawk-script"
      strategy="lazyOnload"
      src="https://embed.tawk.to/63d866f347425128791089d8/1go2l4ahc"
    />
  );
};

export default TawkScript;
