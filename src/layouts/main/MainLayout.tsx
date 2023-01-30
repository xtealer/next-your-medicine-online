import { Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";

export interface MainLayoutProps {
  children?: ReactNode | ReactNode[];
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Flex flexDirection="column" bg="white" h="full">
      <MainNavbar />
      <Flex flex="1" flexDirection="column" overflowY="scroll">
        <Flex flex="1" flexDirection="column">
          {children}
        </Flex>
        <MainFooter />
      </Flex>
    </Flex>
  );
};

export default MainLayout;
