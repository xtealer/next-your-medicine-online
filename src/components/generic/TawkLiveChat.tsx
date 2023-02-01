import Script from "next/script";
import { FC } from "react";

const TawkLiveChat: FC = () => {
  return (
    <>
      {/**
       // * Scripts
      */}
      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/63d866f347425128791089d8/1go2l4ahc"
      />
    </>
  );
};

export default TawkLiveChat;
