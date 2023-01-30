import { FC, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "@/theme/theme";
import AppServices from "./AppServices";

const AppProviders: FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <AppServices>{children}</AppServices>
    </ChakraProvider>
  );
};

export default AppProviders;
