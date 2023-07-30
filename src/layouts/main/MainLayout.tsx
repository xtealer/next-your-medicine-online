import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { FC, ReactNode, useEffect } from "react";

import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
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

      if (process.env.NODE_ENV === "development") {
        console.log("route change routeChangeComplete");
      }
    });

    return () => {
      router.events.off("routeChangeComplete", () => {
        if (process.env.NODE_ENV === "development") {
          console.log("stopped");
        }
      });
    };
  }, [router.events]);

  const mainContainerClassname = useBreakpointValue({
    base: "scrollbar-hidden",
    md: "",
  });

  return (
    <Flex direction="column" h="full" w="full">
      <MainNavbar />
      <Box
        id="main-container"
        as="main"
        flex="1"
        w="full"
        bg="white"
        overflow="scroll"
        scrollBehavior="smooth"
        className={mainContainerClassname}
      >
        <Flex minH="full" flexDirection="column">
          {children}
        </Flex>
        <MainFooter />
      </Box>
    </Flex>
  );
};

export default MainLayout;
