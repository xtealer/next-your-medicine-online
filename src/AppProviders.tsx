import { FC, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { theme } from "@/theme/theme";
const AppServices = dynamic(() => import("./AppServices"));

const AppProviders: FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
      <AppServices />
    </ChakraProvider>
  );
};

export default AppProviders;
