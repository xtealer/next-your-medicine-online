import { Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import TawkLiveChat from "@/components/generic/TawkLiveChat";

export interface MainLayoutProps {
  children?: ReactNode | ReactNode[];
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
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
