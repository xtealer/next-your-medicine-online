import { Flex } from "@chakra-ui/react";
import { FC, ReactNode, useEffect } from "react";

import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import TawkLiveChat from "@/components/generic/TawkLiveChat";
import { useRouter } from "next/router";
import { scrollToTop } from "@/helpers/scrollHelpers";

export interface MainLayoutProps {
  children?: ReactNode | ReactNode[];
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      if (!window.location.hash) {
        scrollToTop("main-container");
      }
      console.log("route change routeChangeComplete");
    });

    return () => {
      router.events.off("routeChangeComplete", () => {
        console.log("stopped");
      });
    };
  }, [router.events]);

  return (
    <Flex direction="column" h="full" w="full">
      <MainNavbar />
      <Flex
        id="main-container"
        as="main"
        flex="1"
        w="full"
        flexDirection="column"
        bg="white"
        overflowY="scroll"
        scrollBehavior="smooth"
        className="scrollbar-hidden"
      >
        <Flex flex="1" flexDirection="column">
          {children}
        </Flex>
        <MainFooter />
      </Flex>
      <TawkLiveChat />
    </Flex>
  );
};

export default MainLayout;
