import { Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";

export interface MainLayoutProps {
  children?: ReactNode | ReactNode[];
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <MainNavbar />
      <Flex
        as="main"
        h="full"
        w="full"
        pt="100px"
        flexDirection="column"
        bg="white"
      >
        <Flex flex="1" flexDirection="column">
          {children}
        </Flex>
        <MainFooter />
      </Flex>
    </>
  );
};

export default MainLayout;
